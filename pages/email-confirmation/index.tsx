import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { bEagleApi } from '../../api'
import { AxiosError } from 'axios'

interface PropsError {
  response: string
}

const EmailConfirmationPage = () => {
  const [message, setMessage] = useState<string>('Verificando...')
  const router = useRouter()
  const { token = '' } = router.query

  useEffect(() => {
    const controller = new AbortController()
    if (token === '') return
    if (token.length < 15)
      return setMessage('Asegúrese de enviar un token válido')

    bEagleApi
      .post('/users/verify/' + token, null, {
        signal: controller.signal,
      })
      .then(() => {
        setMessage('Email verificado correctamente')
        setTimeout(() => {
          router.push('/')
        }, 2000)
      })
      .catch((err: AxiosError<PropsError>) => {
        setMessage(err.response?.data.response || 'Error al verificar email')
      })

    return () => {
      controller.abort()
    }
  }, [token, router])

  return (
    <div className='w-full h-screen flex justify-center items-center text-2xl'>
      {message}
    </div>
  )
}

export default EmailConfirmationPage
