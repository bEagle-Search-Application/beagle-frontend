import { FC, FormEvent, ReactNode, useContext, useState } from 'react'
import {
  CancelIcon,
  FacebookCustomIcon,
  FacebookIcon,
  GoogleCustomIcon,
  IdeaIcon,
  SmileIcon,
  SmileyFaceIcon,
  TwitterCustomIcon,
} from '../assets'
import {
  Button,
  Input,
  LabelInput,
  LogIn,
  Navbar,
  Register,
  Sidebar,
} from '../components'
import { UIContext } from '../context'

interface Props {
  children: ReactNode
}

type ModalProps = 'login' | 'register'

export const MainLayout: FC<Props> = ({ children }) => {
  const { state, handleCloseModal } = useContext(UIContext)
  const [whichModal, setWhichModal] = useState<ModalProps>('login')

  const handleModal = (modal: ModalProps) => {
    setWhichModal(modal)
  }

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
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
        <div className='fixed top-0 w-full h-screen backdrop-blur bg-neutral-900/40'>
          <div className='max-w-md bg-white relative mx-auto top-[50%] translate-y-[-50%] rounded-xl'>
            {/* LOGIN */}
            <LogIn
              whichModal={whichModal}
              handleModal={handleModal}
              handleCloseModal={handleCloseModal}
            />
            {/* REGISTER */}
            <Register
              whichModal={whichModal}
              handleModal={handleModal}
              handleCloseModal={handleCloseModal}
            />
          </div>
        </div>
      )}
    </div>
  )
}
