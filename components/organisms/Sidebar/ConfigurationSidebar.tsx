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
  active: {
    color: 'var(--color-neutral-600)',
  },
}

export const ConfigurationSidebar = () => {
  const router = useRouter()

  return (
    <div className='pt-5 max-h-[53.75rem] h-[calc(100vh_-_5.625rem)] flex flex-col justify-between text-lg select-none'>
      {/* OptionGroup Icons */}
      <div className=''>
        <NextLink href='/configuraciones' passHref>
          <a>
            <motion.div
              initial='initial'
              whileHover='hover'
              variants={variants}
              animate={router.route === '/configuraciones' ? 'active' : ''}
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

        <NextLink href='/configuraciones/cambiar-contrasenia' passHref>
          <a>
            <motion.div
              initial='initial'
              whileHover='hover'
              variants={variants}
              animate={
                router.route === '/configuraciones/cambiar-contrasenia'
                  ? 'active'
                  : ''
              }
              transition={{
                duration: 0.3,
                ease: 'easeInOut',
              }}
              className='px-8 py-5 cursor-pointer font-bold'
            >
              <Option label='Contraseña' />
            </motion.div>
          </a>
        </NextLink>
        <NextLink href='/configuraciones/contacto' passHref>
          <a>
            <motion.div
              initial='initial'
              whileHover='hover'
              variants={variants}
              animate={
                router.route === '/configuraciones/contacto' ? 'active' : ''
              }
              transition={{
                duration: 0.3,
                ease: 'easeInOut',
              }}
              className='px-8 py-5 cursor-pointer font-bold'
            >
              <Option label='Contacto' />
            </motion.div>
          </a>
        </NextLink>

        <div className='flex justify-center'>
          <hr className='w-[13.75rem] border-gray-300 shadow-2xl shadow-black ' />
        </div>

        <NextLink href='/configuraciones/eliminar-cuenta' passHref>
          <a>
            <motion.div
              initial='initial'
              whileHover='hover'
              variants={variants}
              animate={
                router.route === '/configuraciones/eliminar-cuenta'
                  ? 'active'
                  : ''
              }
              transition={{
                duration: 0.3,
                ease: 'easeInOut',
              }}
              className='px-8 py-5 cursor-pointer font-bold'
            >
              <Option label='Eliminar cuenta' />
            </motion.div>
          </a>
        </NextLink>
      </div>
    </div>
  )
}
