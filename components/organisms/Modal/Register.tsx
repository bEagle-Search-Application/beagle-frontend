import { FC, FormEvent, useContext, useState } from 'react'

import { Input, LabelInput, Button } from '../../atoms'
import {
  CancelIcon,
  SmileyFaceIcon,
  IdeaIcon,
  GoogleCustomIcon,
  FacebookIcon,
  TwitterCustomIcon,
} from '../../../assets'
import { useForm } from '../../../hooks'
import { AuthContext, UIContext } from '../../../context'

const INITIAL_VALUES_REGISTER_FORM = {
  name: '',
  surname: '',
  email: '',
  password: '',
  phone: 0,
}

export const Register: FC = () => {
  const [buttonDisabled, setButtonDisabled] = useState(false)
  const { handleOpenModal, handleCloseModal } = useContext(UIContext)
  const { createUser } = useContext(AuthContext)
  const { formValues, handleChange } = useForm(INITIAL_VALUES_REGISTER_FORM)
  const { name, surname, email, password, phone } = formValues

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setButtonDisabled(false)

    const isRegisterValid = await createUser(
      name,
      surname,
      email,
      password,
      phone
    )
    if (isRegisterValid) {
      handleCloseModal()
      return handleOpenModal('account-created')
    } else {
      alert('Error al crear usuario')
      setButtonDisabled(true)
      return
    }
  }

  return (
    <div className='w-[27.4375rem]'>
      <div className='flex justify-end pt-4 pb-2 pr-5'>
        <div className='cursor-pointer' onClick={handleCloseModal}>
          <CancelIcon size={16} stroke='#9CA3AF' />
        </div>
      </div>
      <div className='flex flex-col gap-8 pb-10'>
        <div className='flex flex-col items-center gap-4'>
          {/* TODO: Usar el ícono que esta en figma */}
          <div className='text-center'>
            <SmileyFaceIcon size={24} stroke='#4B5563' />
          </div>
          <h5 className='text-neutral-900 text-[24px] leading-7 font-bold'>
            Bienvenido a bEagle!
          </h5>
        </div>
        <form onSubmit={handleFormSubmit} className='w-full px-8 text-sm'>
          <div className='flex gap-4 box-content'>
            <div className='flex-1 flex-col gap-1'>
              <span className='text-neutral-600 font-bold'>Nombre</span>
              <Input
                className='bg-neutral-100'
                placeholder='Escribe tu nombre aquí'
                name='name'
                onChange={handleChange}
                value={name}
              />
            </div>
            <div className='flex-1 flex-col gap-1'>
              <span className='text-neutral-600 font-bold'>Apellido</span>
              <Input
                className='bg-neutral-100'
                placeholder='Escribe tu apellido aquí'
                name='surname'
                onChange={handleChange}
                value={surname}
              />
            </div>
          </div>
          <div className='mt-4 flex flex-col gap-1'>
            <span className='text-neutral-600 font-bold'>Email</span>
            <Input
              className='bg-neutral-100'
              placeholder='Escribe tu email aquí'
              name='email'
              onChange={handleChange}
              value={email}
            />
          </div>
          <div className='mt-4 flex flex-col gap-1'>
            <span className='text-neutral-600 font-bold'>Contraseña</span>
            <Input
              type='password'
              className='bg-neutral-100'
              placeholder='Escribe tu contraseña aquí'
              name='password'
              onChange={handleChange}
              value={password}
            />
            <LabelInput
              type='primary'
              icon={<IdeaIcon size={20} stroke='#655BA4' />}
              text='Recuerda que tu contraseña debe contener al menos una mayúscula, un número, y un cáracter especial (ej. $%^$@!#). '
            />
          </div>
          <div className='mt-4 flex flex-col gap-1'>
            <span className='text-neutral-600 font-bold'>
              Número de teléfono
            </span>
            <Input
              type='number'
              className='bg-neutral-100'
              placeholder='Escribe tu número de teléfono aquí'
              name='phone'
              onChange={handleChange}
              value={phone}
            />
          </div>
          <div className='mt-4 flex flex-col gap-3 text-xs text-neutral-600'>
            <label className='w-fit flex items-center gap-1'>
              <input type='checkbox' />
              <span>
                Acepto los{' '}
                <span className='underline'>términos y condiciones</span> de
                bEagle.inc
              </span>
            </label>
            <label className='w-fit flex items-center gap-1'>
              <input type='checkbox' />
              <span>
                No deseo recibir emails, promociones, beneficios, o NFTs.
              </span>
            </label>
          </div>
          <div className='mt-8 flex flex-col gap-3'>
            <Button
              type='submit'
              size='medium'
              content='Continuar'
              className='w-full justify-center text-white bg-primary-500 hover:bg-primary-700 active:bg-primary-900'
              disabled={buttonDisabled}
            />
            {/* TODO: Hover y active */}
            <Button
              size='medium'
              content='Ya tengo una cuenta'
              className='w-full justify-center text-neutral-600 hover:bg-neutral-100 active:bg-neutral-300'
              onClick={() => handleOpenModal('login')}
            />
          </div>
        </form>
        <hr className='mx-8 h-[1px] border-t border-neutral-300' />
        <div className='mx-8 flex items-center flex-col gap-4'>
          <span className='text-neutral-600'>Registrarse con</span>
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
