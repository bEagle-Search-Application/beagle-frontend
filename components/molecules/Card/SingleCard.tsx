import { FC } from 'react'
import { Badge } from '../../atoms'

interface Props {
  title: string
  description: string
}

export const SingleCard: FC<Props> = ({ title, description }) => (
  <div className='min-w-[22.6875rem] max-w-[28.125rem] relative'>
    {/* TODO: Volver responsive */}
    <div className='bg-gradient-to-b from-transparent via-transparent to-black rounded-xl'>
      <div className='relative -z-10'>
        {/* TODO: Arreglar el alto de la img */}
        <div className='absolute top-[1.625rem] left-[1.625rem]'>
          <Badge
            className='text-white bg-secondary-600'
            size='small-overline'
            content='BUSCADO'
          />
        </div>
        <img
          className='max-h-[25.875rem] h-[25.875rem] object-cover rounded-xl'
          src='https://images.unsplash.com/photo-1605733513597-a8f8341084e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=929&q=80'
          alt='Imagen del objeto perdido'
        />
      </div>
      <div className='text-white p-[1.625rem] absolute -translate-y-full'>
        <div>
          <h3 className='text-[2rem] leading-9 font-bold'>{title}</h3>
          <span className='text-[1.125rem] leading-7'>{description}</span>
        </div>
      </div>
    </div>
  </div>
)
