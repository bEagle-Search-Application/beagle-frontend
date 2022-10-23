import { useContext } from 'react'
import { useRouter } from 'next/router'
import NextLink from 'next/link'

import { Button, Option } from '../../atoms'

import {
  IdeaIcon,
  AddCircleIcon,
  ContactIcon,
  HeartIcon,
  SmileIcon,
  SadnessIcon,
  SettingsIcon,
  HelpIcon,
  DogIcon,
  StarIcon,
} from '../../../assets'
import { AuthContext, UIContext } from '../../../context'

export const Sidebar = () => {
  const { isAuthenticated, user } = useContext(AuthContext)
  const { handleOpenModal } = useContext(UIContext)
  const router = useRouter()

  const handlePostAnAd = () => {
    if (!user) handleOpenModal('login')
    if (!!user) return router.push('/publicar-objeto-perdido')

    router.push({
      pathname: router.pathname,
      query: { redirect: 'publicar-objeto-perdido' },
    })
  }

  return (
    <div className='pt-5 max-h-[53.75rem] h-[calc(100vh_-_5.625rem)] flex flex-col justify-between text-lg select-none'>
      <div>
        {!!user ? (
          <div
            className='ml-8 mr-20 mb-6 flex items-center gap-3 w-max cursor-pointer'
            onClick={() => router.push('/mi-perfil')}
          >
            <div className='flex'>
              {/* TODO: Dinamizar img  y arreglar alt */}
              {/* TODO: Dinamizar alto y ancho */}
              <img
                className='w-8 h-8 mx-auto rounded-full object-cover'
                src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
                alt='Persona que lo encontró'
              />
            </div>
            <div className='flex flex-col items-center'>
              <span className='text-black font-bold text-base self-start'>
                {`${user.name} ${user.surname}`}
              </span>
              <div className='flex items-center gap-1'>
                {Array.from({ length: 5 }, (_, i) => (
                  <StarIcon
                    key={i}
                    size={16}
                    fill={`${
                      Number(user.rating) >= i + 1 ? '#FCD34D' : '#fff'
                    }`}
                    stroke='#4B5563'
                  />
                ))}
                <span className='text-neutral-600 text-xs font-bold'>
                  {`(${user.rating}.0)`}
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div className='pl-8 pr-[2.6875rem] mb-6'>
            <div className='bg-primary-50 text-primary-700 text-left flex gap-1 py-[0.37rem] px-3 rounded-lg'>
              <div>
                <IdeaIcon size={20} stroke='#655BA4' />
              </div>
              <div className='text-sm'>
                <span className='font-bold'>
                  Necesitas una cuenta para publicar o contactar.
                </span>
                <br />
                Puedes crearte una haciendo click aquí en menos de 1 minuto.
              </div>
            </div>
          </div>
        )}

        <div className='pl-8 mb-4'>
          <Button
            className='text-white bg-primary-500 hover:bg-primary-700 active:bg-primary-900'
            size='medium'
            content='Publicar un anuncio'
            leftIcon={<AddCircleIcon size={20} stroke='#fff' />}
            onClick={() => handlePostAnAd()}
          />
        </div>

        {/* OptionGroup Icons */}
        <div>
          <NextLink href='/' passHref>
            <a>
              <div
                className={`flex gap-2 px-8 py-5 ${
                  router.asPath === '/' ? 'bg-primary-100' : ''
                } hover:bg-primary-100 cursor-pointer`}
              >
                <Option
                  label='Todos los avisos'
                  leftIcon={
                    <DogIcon size={20} stroke='#4B5563' fill='#4B5563' />
                  }
                />
              </div>
            </a>
          </NextLink>

          {isAuthenticated && (
            <>
              <NextLink href='/mensajes' passHref>
                <a>
                  <div
                    className={`px-8 py-5 cursor-pointer transition ease-in duration-150 ${
                      router.asPath === '/mensajes' ? 'bg-primary-100' : ''
                    } hover:bg-primary-100 active:bg-primary-100`}
                  >
                    <Option
                      label='Mensajes'
                      leftIcon={<ContactIcon size={20} stroke='#4B5563' />}
                    />
                  </div>
                </a>
              </NextLink>

              <NextLink href='/mis-favoritos' passHref>
                <a>
                  <div
                    className={`px-8 py-5 cursor-pointer transition ease-in duration-150 ${
                      router.asPath === '/mis-favoritos' ? 'bg-primary-100' : ''
                    } hover:bg-primary-100 active:bg-primary-100`}
                  >
                    <Option
                      label='Favoritos'
                      leftIcon={<HeartIcon size={20} stroke='#4B5563' />}
                    />
                  </div>
                </a>
              </NextLink>
              <NextLink href='/mis-encontrados' passHref>
                <a>
                  <div
                    className={`px-8 py-5 cursor-pointer transition ease-in duration-150 ${
                      router.asPath === '/mis-encontrados'
                        ? 'bg-primary-100'
                        : ''
                    } hover:bg-primary-100 active:bg-primary-100`}
                  >
                    <Option
                      label='Encontrados'
                      leftIcon={<SmileIcon size={20} stroke='#4B5563' />}
                    />
                  </div>
                </a>
              </NextLink>
              <NextLink href='/mis-perdidos' passHref>
                <a>
                  <div
                    className={`px-8 py-5 cursor-pointer transition ease-in duration-150 ${
                      router.asPath === '/mis-perdidos' ? 'bg-primary-100' : ''
                    } hover:bg-primary-100 active:bg-primary-100`}
                  >
                    <Option
                      label='Perdidos'
                      leftIcon={<SadnessIcon size={20} stroke='#4B5563' />}
                    />
                  </div>
                </a>
              </NextLink>
            </>
          )}
        </div>
      </div>

      <div>
        {isAuthenticated && (
          <NextLink href='/configuraciones' passHref>
            <a>
              <div
                className={`px-8 py-5 cursor-pointer transition ease-in duration-150 ${
                  router.asPath === '/configuraciones' ? 'bg-primary-100' : ''
                } hover:bg-primary-100 active:bg-primary-100`}
              >
                <Option
                  label='Configuraciones'
                  leftIcon={<SettingsIcon size={20} stroke='#4B5563' />}
                />
              </div>
            </a>
          </NextLink>
        )}

        <NextLink href='/ayuda' passHref>
          <a>
            <div
              className={`px-8 py-5 cursor-pointer transition ease-in duration-150 ${
                router.asPath === '/ayuda' ? 'bg-primary-100' : ''
              } hover:bg-primary-100 active:bg-primary-100`}
            >
              <Option
                label='Ayuda'
                leftIcon={<HelpIcon size={20} stroke='#4B5563' />}
              />
            </div>
          </a>
        </NextLink>
      </div>
    </div>
  )
}
