import { IUser } from './'

export interface ILoginResponse {
  user: IUser
  auth: {
    access_token: string
    refresh_token: string
  }
}
