import { IUser } from './'

export interface ILoginResponse {
  user: IUser
  auth: {
    token: string
    type: 'Bearer'
  }
}
