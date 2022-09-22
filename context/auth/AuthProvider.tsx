import { ReactNode, FC, useReducer } from 'react'
import Cookies from 'js-cookie'

import { AuthContext, authReducer } from './'
import { ILoginResponse, IUser } from '../../interfaces'
import { bEagleApi } from '../../api'

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
      Cookies.set('token', auth.token)
      // TODO: Necesitaría una función que me permita saber si el token sigue funcionando, cada que el usuario refresque la página

      return true
    } catch (error) {
      return false
    }
  }

  return (
    <AuthContext.Provider value={{ ...state, loginUser }}>
      {children}
    </AuthContext.Provider>
  )
}
