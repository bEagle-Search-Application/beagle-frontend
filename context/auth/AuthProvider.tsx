import { ReactNode, FC, useReducer, useEffect } from 'react'
import Cookies from 'js-cookie'

import { AuthContext, authReducer } from './'
import { ILoginResponse, IUser } from '../../interfaces'
import { bEagleApi } from '../../api'
import { useRouter } from 'next/router'

interface Props {
  children: ReactNode
}

export interface AuthState {
  isAuthenticated: boolean
  user?: IUser
}

const AUTH_INITIAL_STATE: AuthState = {
  isAuthenticated: false,
  user: undefined,
}

export const AuthProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, AUTH_INITIAL_STATE)
  const router = useRouter()

  // Efecto que se ejecuta al iniciar la aplicación y verifica si el usuario tiene una sesión activa
  useEffect(() => {
    const controller = new AbortController()
    checkToken(controller)

    return () => controller.abort()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  /**
   * Función que se encarga de verificar si el usuario tiene los o un token válido
   */
  const checkToken = (controller: AbortController) => {
    // No ha logeado
    if (!Cookies.get('access_token') && !Cookies.get('refresh_token')) return
    // Tiene refresh token, pero no access token
    if (!Cookies.get('access_token') && Cookies.get('refresh_token')) {
      refreshToken(controller)
      return
    }
    // Tiene access token, pero no refresh token
    if (Cookies.get('access_token') && !Cookies.get('refresh_token')) {
      logoutUser().then(() => router.reload())
      return
    }
    // No tiene ningún token, pero tiene el user en localStorage
    if (
      !Cookies.get('access_token') &&
      !Cookies.get('refresh_token') &&
      localStorage.getItem('user-data')
    ) {
      logoutUser().then(() => router.reload())
      router.reload()
      return
    }

    // Ha logeado
    dispatch({
      type: '[AUTH] - LOGIN',
      payload: JSON.parse(window.localStorage.getItem('user-data') || ''),
    })
  }

  /**
   *
   * Función que se encarga de logear al usuario
   * En localStorage se almacena el usuario
   * En cookies se almacena el token de acceso(expira en 10min) y el token de refresco(expira en 10d)
   *
   * @param email
   * @param password
   * @returns true si el usuario se logeo correctamente, false en caso contrario
   */
  const loginUser = async (
    email: string,
    password: string
  ): Promise<boolean> => {
    try {
      const { data } = await bEagleApi.post('/auth/login', {
        email,
        password,
      })
      const { response } = await data
      const { user, auth } = (await response) as ILoginResponse
      dispatch({ type: '[AUTH] - LOGIN', payload: user })
      window.localStorage.setItem('user-data', JSON.stringify(user))
      Cookies.set('access_token', auth.access_token, {
        expires: 1 / 144,
        path: '/',
      })
      Cookies.set('refresh_token', auth.refresh_token, {
        expires: 15,
        path: '/',
      })

      return true
    } catch (error) {
      return false
    }
  }

  /**
   * Función que se encarga de cerrar la sesión del usuario
   * Remueve el usuario del localStorage y los tokens de las cookies
   */
  const logoutUser = async () => {
    dispatch({ type: '[AUTH] - LOGOUT' })
    bEagleApi.post('/logout', null, {
      headers: {
        Authorization: `Bearer ${Cookies.get('access_token')}`,
      },
    })
    router.push('/')
    window.localStorage.removeItem('user-data')
    Cookies.remove('access_token')
    Cookies.remove('refresh_token')
  }

  /**
   *
   * @param name
   * @param surname
   * @param email
   * @param password
   * @param phone
   * @returns true si el usuario se registro correctamente, false en caso contrario
   */
  const createUser = async (
    name: string,
    surname: string,
    email: string,
    password: string,
    phone: number
  ) => {
    const response = await bEagleApi.post('/register', {
      name,
      surname,
      email,
      password,
      phone_prefix: phone.toString().slice(0, 2),
      phone: phone.toString().slice(2, -1),
    })
    if (response.status === 201) return true
    return false
  }

  /**
   * Función que se encarga de actualizar el token de acceso
   */
  const refreshToken = async (controller: AbortController) => {
    const response = await bEagleApi.post('/token/refresh', null, {
      headers: {
        Authorization: `Bearer ${Cookies.get('refresh_token')}`,
      },
      signal: controller.signal,
    })

    const { data } = response
    Cookies.set('access_token', data.response.access_token, {
      expires: 1 / 144,
    })
    router.reload()
  }

  return (
    <AuthContext.Provider
      value={{ ...state, loginUser, logoutUser, createUser }}
    >
      {children}
    </AuthContext.Provider>
  )
}
