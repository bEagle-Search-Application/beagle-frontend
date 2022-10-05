import { createContext } from 'react'
import { IUser } from '../../interfaces'

interface ContextProps {
  isAuthenticated: boolean
  user?: IUser

  createUser: (
    name: string,
    surname: string,
    email: string,
    password: string,
    phone: number
  ) => Promise<boolean>
  loginUser: (email: string, password: string) => Promise<boolean>
  logoutUser: () => void
}

export const AuthContext = createContext({} as ContextProps)
