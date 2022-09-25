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
      localStorage.setItem('email', user.email)
      Cookies.set('token', auth.token)
      // TODO: Necesitaría una función que me permita saber si el token sigue funcionando, cada que el usuario refresque la página

      return true
    } catch (error) {
      return false
    }
  }

  const logoutUser = () => {
    dispatch({ type: '[AUTH] - LOGOUT' })
    router.push('/')
    Cookies.remove('token')
    localStorage.removeItem('email')
  }

  return (
    <AuthContext.Provider value={{ ...state, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  )
}
