import { createContext } from 'react'
import { InitialStateUIProps } from './'

interface UIContextProps {
  state: InitialStateUIProps

  handleOpenModal: () => void
  handleCloseModal: () => void
}

export const UIContext = createContext({} as UIContextProps)
