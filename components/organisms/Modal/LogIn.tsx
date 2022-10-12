import { FC, useContext, useState } from 'react'
import { useRouter } from 'next/router'

import { Input, Button, LabelInput } from '../../atoms'
import {
  CancelIcon,
  FacebookIcon,
  GoogleCustomIcon,
  HappyFaceIcon,
  SuccessCheckIcon,
  TwitterCustomIcon,
} from '../../../assets'
import { AuthContext, UIContext } from '../../../context'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const INITIAL_VALUES_LOGIN_FORM = {
  email: '',
  password: '',
}

export const LogIn: FC = () => {
  const router = useRouter()
  const { loginUser } = useContext(AuthContext)
  const { handleOpenModal, handleCloseModal } = useContext(UIContext)
  const [submitStateForm, setSubmitStateForm] = useState({
    isSubmitValid: false,
    messageError: '',
  })
  const {
    touched,
    errors,
    handleSubmit,
    getFieldProps,
    isValid,
    isSubmitting,
  } = useFormik({
    initialValues: INITIAL_VALUES_LOGIN_FORM,
    onSubmit: async (values) => {
      const isValidLogin = await loginUser(values.email, values.password)
      const { redirect = '' } = router.query

      if (!isValidLogin) {
        return setSubmitStateForm({
          isSubmitValid: false,
          messageError: 'Usuario o contraseña incorrecto',
        })
      }

      handleCloseModal()
      if (!!redirect) return router.push(redirect as string)
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Email inválido').required('Email requerido'),
      password: Yup.string().required('Contraseña requerida'),
    }),
  })

  return (
    <div className='w-[27.5rem] max-w-md'>
      <div className='flex justify-end pt-4 pb-2 pr-5'>
        <div className='cursor-pointer' onClick={handleCloseModal}>
          <CancelIcon size={16} stroke='#9CA3AF' />
        </div>
      </div>
      <div className='flex flex-col gap-8 pb-10'>
        <div className='flex flex-col items-center gap-4'>
          <div className='text-center'>
            <HappyFaceIcon size={24} stroke='#4B5563' />
          </div>
          <h5 className='text-neutral-900 text-[1.5rem] leading-7 font-bold'>
            Que bueno tenerte de vuelta!
          </h5>
        </div>
        <form onSubmit={handleSubmit} className='w-full px-8 text-sm'>
          <div className='flex flex-col gap-1'>
            <span className='text-neutral-600 font-bold'>Email</span>
            <Input
              className='bg-neutral-100'
              placeholder='Escribe tu email aquí'
              id='email'
              {...getFieldProps('email')}
            />
            {touched.email && errors.email && (
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
            <span className='mx-3 my-[6px] text-primary-500 text-xs'>
              ¿Olvidaste tu contraseña?
            </span>
          </div>
          <div>
            {submitStateForm.messageError.length !== 0 && (
              <LabelInput
                type='error'
                text={submitStateForm.messageError}
                icon={<SuccessCheckIcon size={12} stroke='#B91C1C' />}
              />
            )}
          </div>
          <div className='mt-8 flex flex-col gap-3'>
            <Button
              type='submit'
              size='medium'
              content='Iniciar sesión'
              className='w-full justify-center text-white bg-primary-500 hover:bg-primary-700 active:bg-primary-900 disabled:opacity-50'
              disabled={!isValid || isSubmitting}
            />
            <Button
              size='medium'
              content='Crear cuenta'
              onClick={() => handleOpenModal('register')}
              className='w-full justify-center text-neutral-600 hover:text-neutral-700 active:text-neutral-800'
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
