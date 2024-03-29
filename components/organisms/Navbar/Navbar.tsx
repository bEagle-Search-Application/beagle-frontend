import { FC, useContext, useRef, useState } from 'react'
import NextLink from 'next/link'

import { Input, Button } from '../../atoms'
import { Collapse, Dropdown } from '../../molecules'

import { AuthContext, UIContext } from '../../../context'
import {
  LogoCustomIcon,
  SearchIcon,
  BellIcon,
  ContactIcon,
  DownArrowIcon,
} from '../../../assets'
import { useClickOutside } from '../../../hooks'

export const Navbar: FC = () => {
  const { isAuthenticated, user } = useContext(AuthContext)
  const { handleOpenModal } = useContext(UIContext)
  const [showDropdown, setShowDropdown] = useState(false)
  const [showMail, setShowMail] = useState(false)

  const dropdownFocus = useRef<HTMLDivElement>(null)
  const collapseFocus = useRef<HTMLDivElement>(null)
  useClickOutside(dropdownFocus, () => setShowDropdown(false))
  useClickOutside(collapseFocus, () => setShowMail(false))

  return (
    <nav className='px-8 py-4 border-b-[1px] border-solid border-neutral-300'>
      <div className='flex justify-between items-center'>
        <NextLink href='/' passHref>
          <a>
            <LogoCustomIcon />
          </a>
        </NextLink>
        <div className='w-[23.4375rem]'>
          <Input
            className='bg-neutral-100 max-w-sm'
            leftIcon={<SearchIcon size={20} stroke='#4B5563' />}
            placeholder='Busca mascotas, objetos o personas...'
          />
        </div>

        {isAuthenticated ? (
          <div className='flex gap-11'>
            <div
              className='flex gap-[0.8125rem] items-center'
              ref={collapseFocus}
            >
              <div
                className='p-[0.3125rem] rounded-full cursor-pointer relative hover:bg-slate-200 hover:left-[1px] hover:bottom-[1px]'
                onClick={() => setShowMail(!showMail)}
              >
                <BellIcon size={20} stroke='#4B5563' />
              </div>
              <NextLink href='/mensajes' passHref>
                <a>
                  <div className='p-[0.3125rem] rounded-full cursor-pointer relative hover:bg-slate-200 hover:left-[1px] hover:bottom-[1px]'>
                    <ContactIcon size={20} stroke='#4B5563' />
                  </div>
                </a>
              </NextLink>
              <div
                className={`relative transition-all z-50 duration-300 ease-out ${
                  showMail ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
              >
                <Collapse />
              </div>
            </div>
            <div>
              {/* TODO: Imagen a configurar del perfil */}
              <div
                className='flex gap-2 items-center cursor-pointer'
                onClick={() => setShowDropdown(!showDropdown)}
                ref={dropdownFocus}
              >
                <img
                  className='w-8 h-8 object-fill rounded-full'
                  src='https://images.unsplash.com/photo-1589578230792-919e176e2243?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
                  alt={`Foto de perfil de ${user?.name} ${user?.surname}`}
                />
                <div className='px-[0.375rem] py-[0.5625rem]'>
                  <DownArrowIcon size={16} stroke='#4B5563' />
                </div>
              </div>
              <div
                className={`relative z-50 transition-all duration-300 ease-in-out ${
                  showDropdown ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
              >
                <Dropdown />
              </div>
            </div>
          </div>
        ) : (
          <div className='flex gap-4'>
            <Button
              size='small'
              content='Regístrate'
              className='text-white bg-primary-500 hover:bg-primary-700 active:bg-primary-900'
              onClick={() => handleOpenModal('register')}
            />
            <Button
              size='small'
              content='Inicia Sesión'
              className='text-primary-500 border-[1px] border-solid border-primary-500'
              onClick={() => handleOpenModal('login')}
            />
          </div>
        )}
      </div>
    </nav>
  )
}
