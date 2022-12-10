import { useRouter } from 'next/router'
import NextLink from 'next/link'
import { motion } from 'framer-motion'

import { Option } from '../../atoms'

const variants = {
  initial: {
    color: 'var(--color-neutral-400)',
  },
  hover: {
    color: 'var(--color-neutral-600)',
  },
}

export const ConfigurationSidebar = () => {
  const router = useRouter()

  return (
    <div className='pt-5 max-h-[53.75rem] h-[calc(100vh_-_5.625rem)] flex flex-col justify-between text-lg select-none'>
      {/* OptionGroup Icons */}
      <div className=''>
        <NextLink href='/configuraciones/edit-profile' passHref>
          <a>
            <motion.div
              initial='initial'
              whileHover='hover'
              variants={variants}
              transition={{
                duration: 0.3,
                ease: 'easeInOut',
              }}
              className='px-8 py-5 cursor-pointer font-bold'
            >
              <Option label='Editar Perfil' />
            </motion.div>
          </a>
        </NextLink>

        <NextLink href='/configuraciones/password' passHref>
          <a>
            <div
              className={`px-8 py-5 cursor-pointer transition ease-in duration-150 ${
                router.route === '/configuraciones/password'
                  ? 'bg-primary-100'
                  : ''
              } hover:bg-primary-100 active:bg-primary-100`}
            >
              <Option label='Contraseña' />
            </div>
          </a>
        </NextLink>
        <NextLink href='/configuraciones/contact' passHref>
          <a>
            <div
              className={`px-8 py-5 cursor-pointer transition ease-in duration-150 ${
                router.route === '/configuraciones/contact'
                  ? 'bg-primary-100'
                  : ''
              } hover:bg-primary-100 active:bg-primary-100`}
            >
              <Option label='Contacto' />
            </div>
          </a>
        </NextLink>

        <div className='flex justify-center'>
          <hr className='w-[13.75rem] border-gray-300 shadow-2xl shadow-black ' />
        </div>

        <NextLink href='/configuraciones/delete-account' passHref>
          <a>
            <div
              className={`px-8 py-5 cursor-pointer transition ease-in duration-150 ${
                router.route === '/configuraciones/delete-account'
                  ? 'bg-primary-100'
                  : ''
              } hover:bg-primary-100 active:bg-primary-100 text-red-500`}
            >
              <Option label='Eliminar cuenta' />
            </div>
          </a>
        </NextLink>
      </div>
    </div>
  )
}
