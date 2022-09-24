import { FC, useContext } from 'react'
import NextLink from 'next/link'

import { Option } from '../../atoms'
import {
  UserOutlinedIcon,
  RightArrowIcon,
  ExitAppIcon,
  GiveHelpIcon,
} from '../../../assets'
import { AuthContext } from '../../../context'
import { useRouter } from 'next/router'

export const Dropdown: FC = () => {
  const { logoutUser } = useContext(AuthContext)
  const router = useRouter()

  //TODO: Preguntar si se hace un reload al cerrar sesión
  const handleLogout = () => {
    logoutUser()
    router.push('/')
  }

  //TODO: Preguntar si se deberían mover las opciones al hacer un hover
  //TODO: Agregar los demás enlaces a las páginas
  return (
    <div className='w-52 h-[336px] select-none p-4 bg-white absolute top-2 right-0 rounded-xl shadow-[2px_6px_20px_rgba(0,0,0,0.15)] '>
      <div className='mt-1 pb-2 border-solid border-b-neutral-200 border-b-[0.5px]'>
        <NextLink href='/mi-perfil' passHref>
          <a>
            <Option
              className='p-2 rounded-xl relative text-sm text-neutral-600 justify-between hover:bg-neutral-100'
              label='Mi perfil'
              rightIcon={<UserOutlinedIcon size={15} stroke='#9CA3AF' />}
            />
          </a>
        </NextLink>
      </div>
      <div className='mt-1 pb-2'>
        <Option
          className='p-2 rounded-xl text-sm text-neutral-600 justify-between hover:bg-neutral-100'
          label='Mi cuenta'
          rightIcon={<RightArrowIcon size={12} stroke='#9CA3AF' />}
        />
      </div>
      <div className='mt-1 pb-2 border-solid border-b-neutral-200 border-b-[0.5px]'>
        <NextLink href='/configuraciones' passHref>
          <a>
            <Option
              className='p-2 rounded-xl text-sm text-neutral-600 justify-between hover:bg-neutral-100'
              label='Configuraciones'
              rightIcon={<RightArrowIcon size={12} stroke='#9CA3AF' />}
            />
          </a>
        </NextLink>
      </div>
      <div className='mt-1 pb-2'>
        <Option
          className='p-2 rounded-xl text-sm text-neutral-600 justify-between hover:bg-neutral-100'
          label='Apoya a bEagle'
          rightIcon={<GiveHelpIcon size={16} stroke='#9CA3AF' />}
        />
      </div>
      <div className='mt-1 pb-2 border-solid border-b-neutral-200 border-b-[0.5px]'>
        <Option
          className='p-2 rounded-xl text-sm text-neutral-600 justify-between hover:bg-neutral-100'
          label='Terminos y Condiciones'
          rightIcon={<RightArrowIcon size={12} stroke='#9CA3AF' />}
        />
      </div>
      <div className='mt-1 pb-2'>
        <Option
          className='p-2 rounded-xl text-sm text-error-600 justify-between hover:bg-neutral-100 cursor-pointer'
          label='Cerrar sesión'
          rightIcon={<ExitAppIcon size={16} stroke='#DC2626' />}
          onClick={handleLogout}
        />
      </div>
    </div>
  )
}
