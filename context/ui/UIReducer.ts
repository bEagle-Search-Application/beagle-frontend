import { UIState } from './'
import { ITypeOfModals } from '../../interfaces'

type ActionProps =
  | {
      type: '[UI] - OPEN_MODAL'
      payload: ITypeOfModals
    }
  | {
      type: '[UI] - CLOSE_MODAL'
    }

export const uiReducer = (state: UIState, action: ActionProps): UIState => {
  switch (action.type) {
    case '[UI] - OPEN_MODAL':
      return { ...state, modalIsOpen: true, whichModal: action.payload }
    case '[UI] - CLOSE_MODAL':
      return { ...state, modalIsOpen: false }

    default:
      return { ...state }
  }
}
