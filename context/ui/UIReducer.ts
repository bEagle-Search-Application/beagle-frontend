import { InitialStateUIProps } from './'

type ActionProps = {
  type: '[UI] - OPEN_MODAL' | '[UI] - CLOSE_MODAL'
}

export const uiReducer = (state: InitialStateUIProps, action: ActionProps) => {
  switch (action.type) {
    case '[UI] - OPEN_MODAL':
      return { ...state, modalIsOpen: true }
    case '[UI] - CLOSE_MODAL':
      return { ...state, modalIsOpen: false }

    default:
      return { ...state }
  }
}
