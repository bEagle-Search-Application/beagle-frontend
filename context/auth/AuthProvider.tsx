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

  // useEffect(() => {
  //   const token = Cookies.get('token')
  //   const email = localStorage.getItem('email')
  //   if (!token || !email) return

  //   bEagleApi
  //     .post(`/api/users/verify/${token}`)
  //     .then((res) => {
  //       console.log(res)
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // }, [])

  useEffect(() => {
    checkToken()
  }, [])

  const checkToken = async () => {
    if (!Cookies.get('access_token') || !Cookies.get('refresh_token')) return
    if (!window.localStorage.getItem('user-data')) return
    //TODO: LLamar a la api para verificar el token
    //TODO: En caso no exista token de access o refresh significa que el usuario no está logeado
    //TODO: En caso no exista user en localStorage significa que el usuario no está logeado
    dispatch({
      type: '[AUTH] - LOGIN',
      payload: JSON.parse(window.localStorage.getItem('user-data') || ''),
    })
  }

  const loginUser = async (
    email: string,
    password: string
  ): Promise<boolean> => {
    try {
      const { data } = await bEagleApi.get('/auth/login', {
        params: {
          email,
          password,
        },
      })
      const { response } = await data
      const { user, auth } = (await response) as ILoginResponse
      dispatch({ type: '[AUTH] - LOGIN', payload: user })
      window.localStorage.setItem('user-data', JSON.stringify(user))
      Cookies.set('access_token', auth.access_token)
      Cookies.set('refresh_token', auth.refresh_token)

      // TODO: Necesitaría una función que me permita saber si el token sigue funcionando, cada que el usuario refresque la página

      return true
    } catch (error) {
      return false
    }
  }

  const logoutUser = () => {
    dispatch({ type: '[AUTH] - LOGOUT' })
    router.push('/')
    window.localStorage.removeItem('user-data')
    Cookies.remove('access_token')
    Cookies.remove('refresh_token')
  }

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
    if (response.status === 204) return true
    return false
  }

  return (
    <AuthContext.Provider
      value={{ ...state, loginUser, logoutUser, createUser }}
    >
      {children}
    </AuthContext.Provider>
  )
}
