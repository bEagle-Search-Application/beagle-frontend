import { FC, useContext } from 'react'

import { useFormik } from 'formik'
import * as Yup from 'yup'

import { Input, LabelInput, Button } from '../../atoms'
import {
  CancelIcon,
  IdeaIcon,
  GoogleCustomIcon,
  FacebookIcon,
  TwitterCustomIcon,
  SuccessCheckIcon,
  AddCircleIcon,
  ContentFaceIcon,
} from '../../../assets'
import { AuthContext, UIContext } from '../../../context'
import { regExp } from '../../../utils'

const INITIAL_VALUES_REGISTER_FORM = {
  name: '',
  surname: '',
  email: '',
  password: '',
  phone: 0,
  termsAndConditions: false,
  allowNotifications: false,
}

export const Register: FC = () => {
  const { handleOpenModal, handleCloseModal } = useContext(UIContext)
  const { createUser } = useContext(AuthContext)
  const {
    getFieldProps,
    handleSubmit,
    touched,
    errors,
    isSubmitting,
    isValid,
  } = useFormik({
    initialValues: INITIAL_VALUES_REGISTER_FORM,
    onSubmit: async (values) => {
      const { name, surname, email, password, phone } = values
      const isRegisterValid = await createUser(
        name.trim(),
        surname.trim(),
        email.trim(),
        password.trim(),
        Number(phone.toString().trim())
      )

      if (!isRegisterValid) {
        alert('Error al crear usuario')
        return
      }

      handleCloseModal()
      return handleOpenModal('account-created')
    },
    //TODO: Verificar si la validación es la correcta y mejorarla
    validationSchema: Yup.object({
      name: Yup.string()
        .required('El nombre es requerido')
        .min(3, 'El nombre debe tener al menos 3 caracteres')
        .matches(regExp.name, 'Introduzca un nombre válido'),
      surname: Yup.string()
        .required('El apellido es requerido')
        .min(3, 'El apellido debe tener al menos 3 caracteres')
        .matches(regExp.name, 'Introduzca un apellido válido'),
      email: Yup.string()
        .email('Introduzca un email válido')
        .required('El email es requerido'),
      password: Yup.string().min(8,'La contraseña debe tener al menos 8 caracteres').required('La contraseña es requerida'),
      phone: Yup.number()
        .test(
          'len',
          'El número debe tener al menos 6 dígitos',
          (val = 0) => val.toString().length >= 6
        )
        .required('El teléfono es requerido'),
      termsAndConditions: Yup.boolean()
        .oneOf([true], 'Debe aceptar los términos y condiciones')
        .required(),
    }),
  })

  return (
    <div className='w-[27.4375rem]'>
      <div className='flex justify-end pt-4 pb-2 pr-5'>
        <div className='cursor-pointer' onClick={handleCloseModal}>
          <CancelIcon size={16} stroke='#9CA3AF' />
        </div>
      </div>
      <div className='flex flex-col gap-8 pb-10'>
        <div className='flex flex-col items-center gap-4'>
          <div className='text-center'>
            <ContentFaceIcon size={24} stroke='#4B5563' />
          </div>
          <h5 className='text-neutral-900 text-[1.5rem] leading-7 font-bold'>
            Bienvenido a bEagle!
          </h5>
        </div>

        {/* Form Register */}
        <form
          className='w-full px-8 text-sm'
          noValidate
          onSubmit={handleSubmit}
        >
          <div className='flex gap-4 box-content'>
            <div className='flex-1 flex-col gap-1'>
              <span className='text-neutral-600 font-bold'>Nombre</span>
              <Input
                className='bg-neutral-100'
                placeholder='Escribe tu nombre aquí'
                id='name'
                {...getFieldProps('name')}
              />
              {touched['name'] && errors.name && (
                <LabelInput
                  type='error'
                  text={errors.name}
                  icon={<SuccessCheckIcon size={12} stroke='#B91C1C' />}
                />
              )}
            </div>
            <div className='flex-1 flex-col gap-1'>
              <span className='text-neutral-600 font-bold'>Apellido</span>
              <Input
                className='bg-neutral-100'
                placeholder='Escribe tu apellido aquí'
                id='surname'
                {...getFieldProps('surname')}
              />
              {touched['surname'] && errors.surname && (
                <LabelInput
                  type='error'
                  text={errors.surname}
                  icon={<SuccessCheckIcon size={12} stroke='#B91C1C' />}
                />
              )}
            </div>
          </div>
          <div className='mt-4 flex flex-col gap-1'>
            <span className='text-neutral-600 font-bold'>Email</span>
            <Input
              className='bg-neutral-100'
              placeholder='Escribe tu email aquí'
              id='email'
              {...getFieldProps('email')}
            />
            {touched['email'] && errors.email && (
              <LabelInput
                type='error'
                text={errors.email}
                icon={<SuccessCheckIcon size={12} stroke='#B91C1C' />}
              />
            )}
          </div>
          <div className='mt-4 flex flex-col gap-1'>
            <span className='text-neutral-600 font-bold'>Contraseña</span>
            <Input
              type='password'
              className='bg-neutral-100'
              placeholder='Escribe tu contraseña aquí'
              id='password'
              {...getFieldProps('password')}
            />
            {touched.password && errors.password && (
              <LabelInput
                type='error'
                text={errors.password}
                icon={<SuccessCheckIcon size={12} stroke='#B91C1C' />}
              />
            )}
            <LabelInput
              type='primary'
              icon={<IdeaIcon size={20} stroke='#655BA4' />}
              text='Recuerda que tu contraseña debe contener al menos una mayúscula, un número, y un cáracter especial (ej. $%^$@!#).'
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
              id='phone'
              {...getFieldProps('phone')}
            />
            {touched.phone && errors.phone && (
              <LabelInput
                type='error'
                text={errors.phone}
                icon={<SuccessCheckIcon size={12} stroke='#B91C1C' />}
              />
            )}
          </div>
          {/* Ver si validaremos celular */}
          <div className='mt-4 flex flex-col gap-3 text-xs text-neutral-600'>
            <label className='w-fit flex items-center gap-1'>
              <input
                type='checkbox'
                id='termsAndConditions'
                {...getFieldProps('termsAndConditions')}
              />
              <span>
                Acepto los{' '}
                <span className='underline'>términos y condiciones</span> de
                bEagle.inc
              </span>
            </label>
            <label className='w-fit flex items-center gap-1'>
              <input
                type='checkbox'
                id='allowNotifications'
                {...getFieldProps('allowNotifications')}
              />
              {/* Preguntar si es 'No deseo' o 'deseo' */}
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
              className='w-full justify-center text-white bg-primary-500 hover:bg-primary-700 active:bg-primary-900  disabled:opacity-50'
              disabled={!isValid}
            />
            <Button
              size='medium'
              content='Ya tengo una cuenta'
              className='w-full justify-center text-neutral-600 hover:text-neutral-700 active:text-neutral-800'
              onClick={() => handleOpenModal('login')}
            />
          </div>
        </form>

        <hr className='mx-8 h-[1px] border-t border-neutral-300' />

        {/* Social media */}
        <div className='mx-8 flex items-center flex-col gap-4'>
          <span className='text-neutral-600'>Registrarse con</span>
          <div className='flex gap-8 justify-center items-center'>
            <GoogleCustomIcon />
            <FacebookIcon size={33} stroke='#fff' fill='#1877F2' />
            <TwitterCustomIcon />
          </div>
        </div>
      </div>
      {isSubmitting && (
        <div className='w-full h-full absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] flex items-center justify-center backdrop-blur-[1px] bg-neutral-500/20 z-50 rounded-xl'>
          <div className='animate-spin'>
            {/* TODO: Cambiar de ícono por un spinner */}
            <AddCircleIcon size={50} stroke='#000' />
          </div>
        </div>
      )}
    </div>
  )
}
