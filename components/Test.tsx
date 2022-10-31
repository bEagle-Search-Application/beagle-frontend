import { useRouter } from 'next/router'
import { useEffect } from 'react'

export const Test = () => {
  const router = useRouter()

  useEffect(() => {
    router.push('/')
  }, [router])

  return <>Usted necesita logearse para ver esta página</>
}
