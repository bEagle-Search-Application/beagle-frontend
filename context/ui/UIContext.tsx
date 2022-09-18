import { createContext } from 'react'
import { InitialStateUIProps } from './'
import { ITypeOfModals } from '../../interfaces'

interface UIContextProps {
  state: InitialStateUIProps

  handleOpenModal: (arg: ITypeOfModals) => void
  handleCloseModal: () => void
}

export const UIContext = createContext({} as UIContextProps)
