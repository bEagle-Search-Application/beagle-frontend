import { ChangeEvent, useState } from 'react'

export const useForm = <T>(initialValues: T) => {
  const [data, setData] = useState<T>({ ...initialValues })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData((data) => ({
      ...data,
      [e.target.name]: e.target.value,
    }))
  }

  return { formValues: data, handleChange }
}
