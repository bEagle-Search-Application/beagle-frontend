import { FC, ReactNode, useReducer } from 'react'
import { UIContext, uiReducer } from './'

interface UIProviderProps {
  children: ReactNode
}

export interface InitialStateUIProps {
  modalIsOpen: boolean
}

const INITIAL_STATE_UI: InitialStateUIProps = {
  modalIsOpen: false,
}

export const UIProvider: FC<UIProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, INITIAL_STATE_UI)

  const handleOpenModal = () => dispatch({ type: '[UI] - OPEN_MODAL' })
  const handleCloseModal = () => dispatch({ type: '[UI] - CLOSE_MODAL' })

  return (
    <UIContext.Provider value={{ state, handleOpenModal, handleCloseModal }}>
      {children}
    </UIContext.Provider>
  )
}
