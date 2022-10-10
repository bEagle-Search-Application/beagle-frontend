import { FC, FormEvent, useContext, useState } from 'react'
import { useRouter } from 'next/router'

import { Input, Button } from '../../atoms'
import {
  CancelIcon,
  FacebookIcon,
  GoogleCustomIcon,
  SmileIcon,
  TwitterCustomIcon,
} from '../../../assets'
import { useForm } from '../../../hooks'
import { AuthContext, UIContext } from '../../../context'

const INITIAL_VALUES_REGISTER_FORM = {
  email: '',
  password: '',
}

export const LogIn: FC = () => {
  const router = useRouter()
  const { loginUser } = useContext(AuthContext)
  const { handleOpenModal, handleCloseModal } = useContext(UIContext)
  const [buttonDisabled, setButtonDisabled] = useState(false)
  const { formValues, handleChange } = useForm(INITIAL_VALUES_REGISTER_FORM)
  const { email, password } = formValues

  // TODO: Validar campos del formulario
  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setButtonDisabled(true)

    const isValidLogin = await loginUser(email, password)
    const { redirect = '' } = router.query

    if (!isValidLogin) {
      //TODO: Manejo de errores
      setButtonDisabled(false)
      return alert('Usuario o contraseña incorrectos')
    }

    handleCloseModal()

    if (!!redirect) {
      return router.push(redirect as string)
    }
  }

  return (
    <div className='w-[27.5rem] max-w-md'>
      <div className='flex justify-end pt-4 pb-2 pr-5'>
        <div className='cursor-pointer' onClick={handleCloseModal}>
          <CancelIcon size={16} stroke='#9CA3AF' />
        </div>
      </div>
      <div className='flex flex-col gap-8 pb-10'>
        <div className='flex flex-col items-center gap-4'>
          {/* TODO: Usar el ícono que esta en figma */}
          <div className='text-center'>
            <SmileIcon size={24} stroke='#4B5563' />
          </div>
          <h5 className='text-neutral-900 text-[1.5rem] leading-7 font-bold'>
            Que bueno tenerte de vuelta!
          </h5>
        </div>
        <form onSubmit={handleFormSubmit} className='w-full px-8 text-sm'>
          <div className='flex flex-col gap-1'>
            <span className='text-neutral-600 font-bold'>Email</span>
            <Input
              className='bg-neutral-100'
              placeholder='Escribe tu email aquí'
              name='email'
              value={email}
              onChange={handleChange}
            />
          </div>
          <div className='mt-4 flex flex-col gap-1'>
            <span className='text-neutral-600 font-bold'>Contraseña</span>
            <Input
              type='password'
              className='bg-neutral-100'
              name='password'
              value={password}
              onChange={handleChange}
            />
            <span className='mx-3 my-[6px] text-primary-500 text-xs'>
              ¿Olvidaste tu contraseña?
            </span>
          </div>
          {/* TODO: Button iniciar sesion */}
          <div className='mt-8 flex flex-col gap-3'>
            <Button
              type='submit'
              size='medium'
              content='Iniciar sesión'
              className='w-full justify-center text-white bg-primary-500 hover:bg-primary-700 active:bg-primary-900'
              disabled={buttonDisabled}
            />
            {/* TODO: Hover y active */}
            <Button
              size='medium'
              content='Crear cuenta'
              onClick={() => handleOpenModal('register')}
              className='w-full justify-center text-neutral-600 hover:bg-neutral-100 active:bg-neutral-300'
            />
          </div>
        </form>
        <hr className='mx-8 h-[1px] border-t border-neutral-300' />
        <div className='mx-8 flex items-center flex-col gap-4'>
          <span className='text-neutral-600'>Iniciar sesión con</span>
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
