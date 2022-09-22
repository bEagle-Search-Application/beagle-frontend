import { FC, useContext, useState } from 'react'

import { Input, Button } from '../../atoms'
import { PopUp } from '../../molecules'

import { KeyIcon, QuestionHelpIcon } from '../../../assets'
import { UIContext } from '../../../context'

export const MessageCode: FC = () => {
  const { handleOpenModal } = useContext(UIContext)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className='w-[364px] mx-auto py-10'>
      <div className='flex flex-col gap-8 items-center'>
        <div className='flex flex-col items-center'>
          <KeyIcon size={20} stroke='#4B5563' />
          <div className='mt-4'>
            <h5 className='text-neutral-900 text-[24px] leading-7 font-bold'>
              Inserte el código enviado a:
            </h5>
            <div className='mt-2 flex justify-center items-center gap-2'>
              <span>+39 3447554343 </span>
              <span className='text-primary-600 text-sm'>Editar</span>
              <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <QuestionHelpIcon size={16} stroke='#4B5563' />
                {isHovered && (
                  <div className='absolute -right-64 top-12'>
                    <PopUp
                      title='Consejo'
                      content='Debes revisar tu la mensajería de tu teléfono móvil e insertar el código aquí.'
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className='p-[10px] flex gap-2 justify-items-stretch'>
          <Input className='bg-neutral-100 w-10 h-12' />
          <Input className='bg-neutral-100 w-10 h-12' />
          <Input className='bg-neutral-100 w-10 h-12' />
          <Input className='bg-neutral-100 w-10 h-12' />
          <Input className='bg-neutral-100 w-10 h-12' />
          <Input className='bg-neutral-100 w-10 h-12' />
        </div>
        <div className='px-8 w-full flex flex-col gap-3'>
          <Button
            size='medium'
            content='Confirmar'
            className='justify-center bg-primary-500 text-white hover:bg-primary-700 active:bg-primary-900'
            onClick={() => handleOpenModal('account-created')}
          />
          {/* TODO: Hover y active bg */}
          <Button
            size='medium'
            content='Reenviar código'
            className='justify-center text-neutral-600 hover:bg-neutral-100 active:bg-neutral-200'
          />
        </div>
      </div>
    </div>
  )
}
