import { createContext } from 'react'
import { UIState } from './'
import { ITypeOfModals } from '../../interfaces'

interface UIContextProps {
  state: UIState

  handleOpenModal: (arg: ITypeOfModals) => void
  handleCloseModal: () => void
}

export const UIContext = createContext({} as UIContextProps)
