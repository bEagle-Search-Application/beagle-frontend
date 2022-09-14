import { FC, ReactNode, useContext } from 'react'
import { CancelIcon, SmileIcon, SmileyFaceIcon } from '../assets'
import { Input, LabelInput, Navbar, Sidebar } from '../components'
import { UIContext } from '../context'

interface Props {
  children: ReactNode
}

export const MainLayout: FC<Props> = ({ children }) => {
  const { state } = useContext(UIContext)

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
            <div className='flex justify-end pt-4 pr-5'>
              <CancelIcon size={16} stroke='#9CA3AF' />
            </div>
            <div className='mt-4 flex flex-col gap-8'>
              <div className='flex flex-col items-center gap-4'>
                {/* TODO: Usar el ícono que esta en figma */}
                <div className='text-center'>
                  <SmileIcon size={20} stroke='#9CA3AF' />
                </div>
                <h5 className='text-neutral-900 text-[24px] leading-7 font-bold'>
                  Que bueno tenerte de vuelta!
                </h5>
              </div>
              <form className='w-full px-8 text-sm'>
                <div className='flex flex-col gap-1'>
                  <span className='text-neutral-600 font-bold'>Email</span>
                  <Input
                    className='bg-neutral-100'
                    placeholder='Escribe tu email aquí'
                  />
                </div>
                <div className='mt-4 flex flex-col gap-1'>
                  <span className='text-neutral-600 font-bold'>Contraseña</span>
                  <Input className='bg-neutral-100' />
                  <span className='mx-3 my-[6px] text-primary-500 text-xs'>
                    ¿Olvidaste tu contraseña?
                  </span>
                </div>
                {/* TODO: Button iniciar sesion */}
                <div></div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
