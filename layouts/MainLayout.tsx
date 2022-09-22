import { FC, ReactNode, useContext } from 'react'

import {
  AccountCreated,
  LogIn,
  // MessageCode,
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
  const { state } = useContext(UIContext)

  const RenderAccountModal = (modal: ITypeOfModals) => {
    switch (modal) {
      case 'login':
        return <LogIn />

      case 'register':
        return <Register />

      case 'account-created':
        return <AccountCreated />

      default:
        return <LogIn />
    }
  }

  return (
    <div className='mx-auto'>
      <Navbar />
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
