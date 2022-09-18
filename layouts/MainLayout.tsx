import { FC, ReactNode, useContext } from 'react'

import {
  AccountCreated,
  LogIn,
  MessageCode,
  Navbar,
  Register,
  Sidebar,
} from '../components'
import { UIContext } from '../context'
import { ITypeOfModals } from '../interfaces'

interface Props {
  children: ReactNode
}

export const MainLayout: FC<Props> = ({ children }) => {
  const { state, handleOpenModal, handleCloseModal } = useContext(UIContext)

  const RenderAccountModal = (modal: ITypeOfModals) => {
    switch (modal) {
      case 'login':
        return (
          <LogIn
            handleCloseModal={handleCloseModal}
            handleOpenModal={handleOpenModal}
          />
        )

      case 'register':
        return (
          <Register
            handleCloseModal={handleCloseModal}
            handleOpenModal={handleOpenModal}
          />
        )

      case 'message-code':
        return (
          <MessageCode
            handleCloseModal={handleCloseModal}
            handleOpenModal={handleOpenModal}
          />
        )

      case 'account-created':
        return <AccountCreated handleCloseModal={handleCloseModal} />

      default:
        return (
          <LogIn
            handleCloseModal={handleCloseModal}
            handleOpenModal={handleOpenModal}
          />
        )
    }
  }

  return (
    <div className='mx-auto'>
      <Navbar handleOpenModal={handleOpenModal} />
      <main className='flex'>
        <div className='max-w-[280px]'>
          <Sidebar />
        </div>
        {/* TODO: cambiar el text -left */}
        {/* TODO: hacer responsive */}
        <div className='w-full px-4 border-l border-solid border-neutral-300'>
          {children}
        </div>
      </main>
      {/* MODAL */}
      {state.modalIsOpen && (
        <div className='fixed left-0 top-0 w-full h-full z-10 overflow-auto backdrop-blur bg-neutral-900/40'>
          {/* <div className='max-w-md bg-white relative mx-auto top-[50%] translate-y-[-50%] rounded-xl'> */}
          <div className='flex w-fit bg-white mx-auto relative top-[50%] translate-y-[-50%] rounded-xl'>
            {RenderAccountModal(state.whichModal)}
          </div>
        </div>
      )}
    </div>
  )
}
