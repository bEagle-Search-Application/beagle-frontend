import { FC, useContext } from 'react'
import { useRouter } from 'next/router'

import { Button } from '../../atoms'
import { SuccessCheckIcon, CancelIcon } from '../../../assets'
import { UIContext } from '../../../context'

export const AccountCreated: FC = () => {
  const { handleCloseModal } = useContext(UIContext)

  return (
    <div className='w-[28.875rem] mx-auto p-8'>
      <div className='flex flex-col gap-8'>
        <div className='flex justify-between'>
          {/* <div onClick={handleCloseModal}> */}
          <SuccessCheckIcon size={20} stroke='#16A34A' />
          <div className='cursor-pointer' onClick={handleCloseModal}>
            <CancelIcon size={16} stroke='#9CA3AF' />
          </div>
        </div>
        <div className='flex flex-col gap-6'>
          <h4 className='text-primary-900 text-[1.75rem] leading-8 font-bold'>
            ¡Tu cuenta se ha creado con éxito!
          </h4>
          <span className='text-neutral-400 text-lg'>
            Debes <u>confirmar tu email</u> antes de realizar una publicación o
            contactar a un usuario.
          </span>
        </div>
        <div className='flex justify-between'>
          <Button
            size='medium'
            className='text-neutral-600 hover:text-neutral-700 active:text-neutral-800'
            content='Cerrar'
            onClick={handleCloseModal}
          />
        </div>
      </div>
    </div>
  )
}
