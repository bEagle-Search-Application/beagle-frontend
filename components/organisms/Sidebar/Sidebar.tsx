import { Button, Option } from '../../atoms'
import Image from 'next/image'

import {
  IdeaIcon,
  AddCircleIcon,
  GroupIcon,
  ContactIcon,
  HeartIcon,
  SmileIcon,
  SadnessIcon,
  SettingsIcon,
  HelpIcon,
} from '../../../assets'

export const Sidebar = () => (
  <div className='flex mt-6'>
    <div className='flex flex-col gap-[64px] text-lg'>
      <div>
        <div className='pl-8 pr-[43px] mb-6'>
          <div className='bg-primary-50 text-primary-700 text-left flex gap-1 py-[6px] px-3 rounded-lg'>
            <div>
              <IdeaIcon size={20} stroke='#655BA4' />
            </div>

            <div className='text-sm'>
              <span className='font-bold'>
                Necesitas una cuenta para publicar o contactar.
              </span>
              <br />
              <span>
                Puedes crearte una haciendo click aquí en menos de 1 minuto.
              </span>
            </div>
          </div>
        </div>

        <div className='pl-8 mb-4'>
          <Button
            className='text-white bg-primary-500 hover:bg-primary-700 active:bg-primary-900'
            size='medium'
            content='Publicar un anuncio'
            leftIcon={<AddCircleIcon size={20} stroke='#fff' />}
          />
        </div>

        {/* OptionGroup Icons */}
        <div>
          {/* TODO: Arreglar contenedor de este icon */}
          <div className='flex gap-2 px-8 py-5 bg-primary-100 cursor-pointer'>
            <Image src={GroupIcon} alt='Perrito icon' />
            <Option label='Todos los avisos' />
          </div>

          {/* TODO: Si está "active", asignar el color */}
          {/* TODO: Revisar si lleva transition o no */}
          <div className='px-8 py-5 cursor-pointer transition ease-in duration-150 hover:bg-primary-100 active:bg-primary-100'>
            <Option
              label='Mensajes'
              leftIcon={<ContactIcon size={20} stroke='#4B5563' />}
            />
          </div>
          <div className='px-8 py-5 cursor-pointer transition ease-in duration-150 hover:bg-primary-100 active:bg-primary-100'>
            <Option
              label='Favoritos'
              leftIcon={<HeartIcon size={20} stroke='#4B5563' />}
            />
          </div>
          <div className='px-8 py-5 cursor-pointer transition ease-in duration-150 hover:bg-primary-100 active:bg-primary-100'>
            <Option
              label='Encontrados'
              leftIcon={<SmileIcon size={20} stroke='#4B5563' />}
            />
          </div>
          <div className='px-8 py-5 cursor-pointer transition ease-in duration-150 hover:bg-primary-100 active:bg-primary-100'>
            <Option
              label='Perdidos'
              leftIcon={<SadnessIcon size={20} stroke='#4B5563' />}
            />
          </div>
        </div>
      </div>

      <div>
        {/* TODO: Necesitar estar logeado para ver el ícono de configuraciones */}
        <div className='px-8 py-5 cursor-pointer transition ease-in duration-150 hover:bg-primary-100 active:bg-primary-100'>
          <Option
            label='Configuraciones'
            leftIcon={<SettingsIcon size={20} stroke='#4B5563' />}
          />
        </div>
        <div className='px-8 py-5 cursor-pointer transition ease-in duration-150 hover:bg-primary-100 active:bg-primary-100'>
          <Option
            label='Ayuda'
            leftIcon={<HelpIcon size={20} stroke='#4B5563' />}
          />
        </div>
      </div>
    </div>
    <div className=' bg-slate-400' />
  </div>
)
