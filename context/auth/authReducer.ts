import { IUser } from '../../interfaces'
import { AuthState } from './'

type ActionProps = {
  type: '[AUTH] - LOGIN'
  payload: IUser
}

export const authReducer = (
  state: AuthState,
  action: ActionProps
): AuthState => {
  switch (action.type) {
    case '[AUTH] - LOGIN':
      return {
        ...state,
        isAuthenticated: true,
        user: { ...action.payload },
      }

    default:
      return { ...state }
  }
}
