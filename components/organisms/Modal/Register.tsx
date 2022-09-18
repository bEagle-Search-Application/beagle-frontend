import { FC, FormEvent, useState } from 'react'

import { Input, LabelInput, Button } from '../../atoms'
import {
  CancelIcon,
  SmileyFaceIcon,
  IdeaIcon,
  GoogleCustomIcon,
  FacebookIcon,
  TwitterCustomIcon,
} from '../../../assets'
import { ITypeOfModals } from '../../../interfaces'

interface Props {
  handleOpenModal: (arg: ITypeOfModals) => void
  handleCloseModal: () => void
}

export const Register: FC<Props> = ({ handleOpenModal, handleCloseModal }) => {
  const [isValidData, setIsValidData] = useState(false)
  //TODO: Arreglar el orden y las importanciones, tratar de reducir en lo posible estos imports
  //TODO: Tratar de deshacernos de este handle. No es necesario
  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsValidData(true)
  }

  return (
    <div className='w-[439px]'>
      <div className='flex justify-end pt-4 pb-2 pr-5'>
        <div className='cursor-pointer' onClick={handleCloseModal}>
          <CancelIcon size={16} stroke='#9CA3AF' />
        </div>
      </div>
      <div className='flex flex-col gap-8 pb-10'>
        <div className='flex flex-col items-center gap-4'>
          {/* TODO: Usar el ícono que esta en figma */}
          <div className='text-center'>
            <SmileyFaceIcon size={24} stroke='#4B5563' />
          </div>
          <h5 className='text-neutral-900 text-[24px] leading-7 font-bold'>
            Bienvenido a bEagle!
          </h5>
        </div>
        <form onSubmit={handleFormSubmit} className='w-full px-8 text-sm'>
          <div className='flex gap-4 box-content'>
            <div className='flex-1 flex-col gap-1'>
              <span className='text-neutral-600 font-bold'>Nombre</span>
              <Input
                className='bg-neutral-100'
                placeholder='Escribe tu nombre aquí'
              />
            </div>
            <div className='flex-1 flex-col gap-1'>
              <span className='text-neutral-600 font-bold'>Apellido</span>
              <Input
                className='bg-neutral-100'
                placeholder='Escribe tu apellido aquí'
              />
            </div>
          </div>
          <div className='mt-4 flex flex-col gap-1'>
            <span className='text-neutral-600 font-bold'>Email</span>
            <Input
              className='bg-neutral-100'
              placeholder='Escribe tu email aquí'
            />
          </div>
          <div className='mt-4 flex flex-col gap-1'>
            <span className='text-neutral-600 font-bold'>Contraseña</span>
            <Input
              className='bg-neutral-100'
              placeholder='Escribe tu contraseña aquí'
            />
            <LabelInput
              type='primary'
              icon={<IdeaIcon size={20} stroke='#655BA4' />}
              text='Recuerda que tu contraseña debe contener al menos una mayúscula, un número, y un cáracter especial (ej. $%^$@!#). '
            />
          </div>
          <div className='mt-4 flex flex-col gap-1'>
            <span className='text-neutral-600 font-bold'>
              Número de teléfono
            </span>
            <Input
              className='bg-neutral-100'
              placeholder='Escribe tu número de teléfono aquí'
            />
          </div>
          <div className='mt-4 flex flex-col gap-3 text-xs text-neutral-600'>
            <label className='flex items-center gap-1'>
              <input type='checkbox' />
              <span>
                Acepto los{' '}
                <span className='underline'>términos y condiciones</span> de
                bEagle.inc
              </span>
            </label>
            <label className='flex items-center gap-1'>
              <input type='checkbox' />
              <span>
                No deseo recibir emails, promociones, beneficios, o NFTs.
              </span>
            </label>
          </div>
          {/* TODO: Button continuar */}
          <div className='mt-8 flex flex-col gap-3'>
            <Button
              size='medium'
              content='Continuar'
              className='w-full justify-center text-white bg-primary-500 hover:bg-primary-700 active:bg-primary-900'
              onClick={() => handleOpenModal('message-code')}
            />
            {/* TODO: Hover y active */}
            <Button
              size='medium'
              content='Ya tengo una cuenta'
              className='w-full justify-center text-neutral-600 hover:bg-neutral-100 active:bg-neutral-300'
              onClick={() => handleOpenModal('login')}
            />
          </div>
        </form>
        <hr className='mx-8 h-[1px] border-t border-neutral-300' />
        <div className='mx-8 flex items-center flex-col gap-4'>
          <span className='text-neutral-600'>Registrarse con</span>
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
