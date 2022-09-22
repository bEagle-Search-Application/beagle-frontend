import { FC, ReactNode, useReducer } from 'react'
import { UIContext, uiReducer } from './'
import { ITypeOfModals } from '../../interfaces'

interface UIProviderProps {
  children: ReactNode
}

export interface UIState {
  whichModal: ITypeOfModals
  modalIsOpen: boolean
}

const INITIAL_STATE_UI: UIState = {
  whichModal: 'login',
  modalIsOpen: false,
}

export const UIProvider: FC<UIProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, INITIAL_STATE_UI)

  const handleOpenModal = (modalToOpen: ITypeOfModals) =>
    dispatch({ type: '[UI] - OPEN_MODAL', payload: modalToOpen })
  const handleCloseModal = () => dispatch({ type: '[UI] - CLOSE_MODAL' })

  return (
    <UIContext.Provider value={{ state, handleOpenModal, handleCloseModal }}>
      {children}
    </UIContext.Provider>
  )
}
