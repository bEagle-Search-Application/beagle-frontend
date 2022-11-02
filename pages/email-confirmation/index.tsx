import { useEffect, useState } from 'react'
import { bEagleApi } from '../../api'

const EmailConfirmationPage = ({ message }: { message: string }) => {
  const [showMessage, setShowMessage] = useState(false)
  useEffect(() => {
    setShowMessage(true)
  }, [])

  return (
    <div className='w-full h-screen flex justify-center items-center text-2xl'>
      {showMessage ? message : 'Verificando...'}
    </div>
  )
}

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { token = '' } = ctx.query

  if (!token) {
    return {
      props: {
        message: 'No se encontró el token o el email',
      },
    }
  }

  // TODO: Si la cuenta ya ha sido creada revisar cómo podriamos manejarlo
  let response
  try {
    response = await bEagleApi.post('/users/verify/' + token, null, {
      params: {
        Authorization: `Bearer ${token}`,
      },
    })
    if (response.status === 204)
      return {
        props: {
          message: 'Cuenta creada con éxito',
        },
      }
  } catch (error) {
    return {
      props: {
        message: 'Ha ocurrido un error al verificar el email o el token',
      },
    }
  }

  return {
    props: {
      message: 'Ha ocurrido un error al verificar el email o el token',
    },
  }
}

export default EmailConfirmationPage
