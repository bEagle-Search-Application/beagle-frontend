import { FC, FormEvent } from 'react'

import { Input, Button } from '../../atoms'
import {
  CancelIcon,
  FacebookIcon,
  GoogleCustomIcon,
  SmileIcon,
  TwitterCustomIcon,
} from '../../../assets'
import { ITypeOfModals } from '../../../interfaces'

interface Props {
  handleOpenModal: (arg: ITypeOfModals) => void
  handleCloseModal: () => void
}

export const LogIn: FC<Props> = ({ handleOpenModal, handleCloseModal }) => {
  //TODO: Arreglar el orden y las importanciones, tratar de reducir en lo posible estos imports
  //TODO: Tratar de deshacernos de este handle. No es necesario
  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <div className='w-[439px] max-w-md'>
      <div className='flex justify-end pt-4 pb-2 pr-5'>
        <div className='cursor-pointer' onClick={handleCloseModal}>
          <CancelIcon size={16} stroke='#9CA3AF' />
        </div>
      </div>
      <div className='flex flex-col gap-8 pb-10'>
        <div className='flex flex-col items-center gap-4'>
          {/* TODO: Usar el ícono que esta en figma */}
          <div className='text-center'>
            <SmileIcon size={24} stroke='#4B5563' />
          </div>
          <h5 className='text-neutral-900 text-[24px] leading-7 font-bold'>
            Que bueno tenerte de vuelta!
          </h5>
        </div>
        <form onSubmit={handleFormSubmit} className='w-full px-8 text-sm'>
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
          <div className='mt-8 flex flex-col gap-3'>
            <Button
              size='medium'
              content='Iniciar sesión'
              className='w-full justify-center text-white bg-primary-500 hover:bg-primary-700 active:bg-primary-900'
              // onClick=
            />
            {/* TODO: Hover y active */}
            <Button
              size='medium'
              content='Crear cuenta'
              onClick={() => handleOpenModal('register')}
              className='w-full justify-center text-neutral-600 hover:bg-neutral-100 active:bg-neutral-300'
            />
          </div>
        </form>
        <hr className='mx-8 h-[1px] border-t border-neutral-300' />
        <div className='mx-8 flex items-center flex-col gap-4'>
          <span className='text-neutral-600'>Iniciar sesión con</span>
          <div className='flex gap-8 justify-center items-center'>
            <GoogleCustomIcon />
            <FacebookIcon size={33} stroke='#fff' fill='#1877F2' />
            <TwitterCustomIcon />
          </div>
        </div>
      </div>
    </div>
  )
}
