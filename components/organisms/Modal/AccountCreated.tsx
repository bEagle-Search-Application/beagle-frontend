import { Button } from '../../atoms'
import { SuccessCheckIcon, CancelIcon } from '../../../assets'
import { FC } from 'react'

interface Props {
  handleCloseModal: () => void
}

export const AccountCreated: FC<Props> = ({ handleCloseModal }) => {
  return (
    <div className='w-[462px] mx-auto p-8'>
      <div className='flex flex-col gap-8'>
        <div className='flex justify-between'>
          {/* <div onClick={handleCloseModal}> */}
          <SuccessCheckIcon size={20} stroke='#16A34A' />
          <div className='cursor-pointer' onClick={handleCloseModal}>
            <CancelIcon size={16} stroke='#9CA3AF' />
          </div>
        </div>
        <div className='flex flex-col gap-6'>
          <h4 className='text-primary-900 text-[28px] leading-8 font-bold'>
            ¡Tu cuenta se ha creado con éxito!
          </h4>
          <span className='text-neutral-400 text-lg'>
            Debes confirmar tu email antes de realizar una publicación o
            contactar a un usuario.
          </span>
        </div>
        <div className='flex justify-between'>
          {/* TODO: Revisar hover y active */}
          <Button size='medium' content='Cerrar' onClick={handleCloseModal} />
          <Button
            size='medium'
            className='text-white bg-success-500 hover:bg-success-700 active:bg-success-900'
            content='Ir a mi email'
          />
        </div>
      </div>
    </div>
  )
}
