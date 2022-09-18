import { FC } from 'react'
import Image from 'next/image'

import { Input, Button } from '../../atoms'
import { LogoIcon, SearchIcon } from '../../../assets'
import { ITypeOfModals } from '../../../interfaces'

interface Props {
  handleOpenModal: (arg: ITypeOfModals) => void
}

export const Navbar: FC<Props> = ({ handleOpenModal }) => {
  return (
    <nav className='px-8 py-4 border-b-[1px] border-solid border-neutral-300'>
      {/* TODO: Determinar si el ancho máximo será 1440px para tener un contenedor que siempre mantenga centrado el contenido */}
      <div className='flex justify-between items-center'>
        <div className=''>
          {/* //TODO: Adaptar tamaño a las diferentes resoluciones de pantalla */}
          <Image src={LogoIcon} alt='Logo Beagle' />
        </div>
        <div className='w-[375px]'>
          <Input
            className='bg-neutral-100 max-w-sm'
            leftIcon={<SearchIcon size={20} stroke='#4B5563' />}
            placeholder='Busca mascotas, objetos o personas...'
          />
        </div>
        <div className='flex gap-4'>
          <Button
            size='small'
            content='Regístrate'
            className='text-white bg-primary-500 hover:bg-primary-700 active:bg-primary-900'
            onClick={() => handleOpenModal('register')}
          />
          {/* TODO: Agregar hover y active a este botón */}
          <Button
            size='small'
            content='Inicia Sesión'
            className='text-primary-500 border-[1px] border-solid border-primary-500'
            onClick={() => handleOpenModal('login')}
          />
        </div>
      </div>
    </nav>
  )
}
