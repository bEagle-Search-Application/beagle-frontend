import { FC } from 'react'
import { Badge, Button } from '../../atoms'

import {
  ContactIcon,
  EllipseIcon,
  MapIcon,
  RewardIcon,
  StarIcon,
  TimeIcon,
  UserIcon,
} from '../../../assets'

interface CardProps {
  title: string
}

// TODO: Agregar las propiedades a pasar al componente
export const Card: FC<CardProps> = ({ title }) => (
  <div className='max-w-full w-[22.6785rem] max-w-[28rem] flex flex-col flex-grow rounded-3xl outline outline-1 outline-neutral-300'>
    {/* Imagen y Badge */}
    <div className='mb-6 relative -z-50'>
      <div className='text-white absolute left-5 top-6'>
        {/* TODO: Buscado o encontrado dependerá del objeto */}
        <Badge
          content='ENCONTRADO'
          size='small-overline'
          className='bg-primary-600'
        />
      </div>
      <img
        className='rounded-3xl object-cover'
        src='https://images.unsplash.com/photo-1589578230792-919e176e2243?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
        alt='About'
      />
    </div>
    {/* Contenido de la Card */}
    <div className='px-[1.625rem] flex flex-col gap-8 items-center'>
      <div>
        <h6 className='text-neutral-900 text-center font-bold text-[1.25rem] leading-6'>
          {/* TODO: Dinamizar el título */}
          {title}
        </h6>
      </div>
      <div className='px-[2.6rem] flex flex-col gap-4 text-sm text-neutral-600'>
        <div className='flex items-center gap-4'>
          <MapIcon size={20} stroke='#4B5563' />
          <span className='text-left'>
            {/* // TODO: Dinamizar la dirección */}
            Via loppolo 17, Ragusa, 97100 (+5km)
          </span>
        </div>
        <div className='flex items-center gap-4'>
          {/* // TODO: Dinamizar el monto */}
          {/* // TODO: Este campo es condicional */}
          <RewardIcon size={20} stroke='#4B5563' />
          <span>Monto de la recompensa</span>
        </div>
        <div className='flex items-center gap-4'>
          <UserIcon size={20} stroke='#4B5563' />
          <div className='flex items-center gap-2'>
            {/* // TODO: Dinamizar el nombre y apellido */}
            <span>Nombre Apellido</span>
            <EllipseIcon size={4} fill='#4B5563' stroke='#4B5563' />
            <div className='flex items-center gap-1'>
              <StarIcon size={16} fill='#FCD34D' stroke='#4B5563' />
              {/* // TODO: Dinamizar el rating */}
              <span className='text-xs font-bold'>(1.0)</span>
            </div>
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <TimeIcon size={20} stroke='#4B5563' />
          {/* // TODO: Dinamizar la fecha */}
          <span>Días desde que se publicó</span>
        </div>
      </div>
      <div className='mb-7'>
        <div className='flex justify-center gap-8 px-[0.9375rem]'>
          {/* TODO: Redirigir al enlace de ver detalles del objeto  */}
          <Button
            size='medium'
            content='Ver detalles'
            className='text-neutral-600 hover:text-neutral-700 active:text-neutral-800'
          />
          {/* TODO: Abrir mensajería o llevar al chat con un mensaje predeterminado  */}
          <Button
            className='text-white bg-neutral-600 hover:bg-neutral-700 active:bg-neutral-900'
            size='medium'
            content='Contactar'
            rightIcon={<ContactIcon size={15} stroke='#fff' />}
          />
        </div>
      </div>
    </div>
  </div>
)
