import {
  FacebookIcon,
  HeartIcon,
  InstagramIcon,
  LeftIcon,
  LocationIcon,
  MobileIcon,
  RewardIcon,
  ShareIcon,
  StarIcon,
  WhatsappIcon,
} from '../../assets'
import { Badge, Button } from '../../components'
import { MainLayout } from '../../layouts'

const AboutTheObject = () => (
  <MainLayout>
    <div className='pb-4 text-neutral-600'>
      <div className='mt-10 flex gap-[0.625rem]'>
        <div className='max-w-[45.375rem]'>
          <div className='px-[0.875rem] py-2 mb-10'>
            <Button
              size='small'
              content='Volver'
              leftIcon={<LeftIcon size={16} stroke='#4B5563' />}
            />
          </div>
          <div className='flex flex-col gap-10'>
            <div className='flex flex-col gap-4'>
              <div>
                <div className='flex items-center gap-4'>
                  <h4 className='text-black text-[1.75rem] leading-8 font-bold'>
                    Bolso Beige
                  </h4>
                  <div className='p-[0.625rem] rounded-full shadow-[2px_6px_20px_rgba(0,0,0,0.1)] cursor-pointer'>
                    {/* TODO: Revisar si es un ícono para agregar a favoritos o algo por el estilo */}
                    <HeartIcon size={16} stroke='#4B5563' />
                  </div>
                  <Badge
                    className='text-white bg-secondary-600'
                    content='Perdido'
                    size='small'
                  />
                </div>
              </div>
              <div className='pl-4'>
                <span className='text-neutral-400 text-[1rem] leading-5 font-bold tracking-[1px]'>
                  28/06/22
                </span>
              </div>
            </div>
            <div className='flex flex-col gap-4'>
              <span className='text-[1rem] leading-4 font-bold tracking-[1px]'>
                FOTOGRAFÍAS
              </span>
              <div className='pl-4 flex gap-[0.6875rem]'>
                <div className='max-w-[12.5rem]'>
                  {/* TODO: Dinamizar la propiedad 'alt' --> objeto perdido */}
                  <img
                    className='h-[12.5rem
                    ] rounded-xl object-cover'
                    src='https://images.unsplash.com/photo-1605733513597-a8f8341084e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=929&q=80'
                    alt='objeto perdido'
                  />
                </div>
                <div className='flex flex-col gap-[0.625rem]'>
                  <div className='max-w-[13.125rem]'>
                    {/* TODO: Dinamizar la propiedad 'alt' --> objeto perdido */}
                    <img
                      className='w-52 h-24 rounded-xl object-cover'
                      src='https://images.unsplash.com/photo-1606522754091-a3bbf9ad4cb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=542&q=80'
                      alt='objeto perdido'
                    />
                  </div>
                  <div>
                    {/* TODO: Dinamizar la propiedad 'alt' --> objeto perdido */}
                    <img
                      className='w-52 h-24 rounded-xl object-cover'
                      src='https://images.unsplash.com/photo-1559563458-527698bf5295?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                      alt='objeto perdido'
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-6'>
              <span className='text-[1rem] leading-4 font-bold tracking-[1px]'>
                DESCRIPCIÓN
              </span>
              <div className='pl-4'>
                {/* TODO: Dinamizar descripción */}
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                </span>
              </div>
            </div>
            <div className='flex flex-col gap-6'>
              <span className='text-[1rem] leading-4 font-bold tracking-[1px]'>
                RECOMPENSA
              </span>
              <div className='pl-4 flex items-center gap-4'>
                <RewardIcon size={20} stroke='#4B5563' />
                {/* TODO: Dinamizar recompensa */}
                <Badge
                  className='bg-success-100 text-success-600'
                  content='20€'
                  size='medium'
                />
              </div>
            </div>
            <div className='flex flex-col gap-6'>
              <span className='text-[1rem] leading-4 font-bold tracking-[1px]'>
                UBICACIÓN
              </span>
              <div className='pl-4 flex items-center gap-4'>
                {/* TODO: Dinamizar ubicación */}
                <LocationIcon size={20} stroke='#4B5563' />
                <span>Via Ioppolo 17, Ragusa 97100, Italia.</span>
              </div>
              <div className='pl-4'>
                {/* TODO: Dinamizar utilizando la API de Google */}
                MAPA DE GOOGLE
              </div>
            </div>
          </div>
        </div>
        <div className='flex-auto'>
          <div className='flex flex-col justify-center gap-4'>
            <h6 className='text-[0.75rem] leading-4 text-center font-bold tracking-[1px]'>
              ENCONTRADO POR:
            </h6>
            <div className='max-w-36'>
              {/* TODO: Dinamizar img  y arreglar alt */}
              {/* TODO: Dinamizar alto y ancho */}
              <img
                className='w-36 h-36 mx-auto rounded-full object-cover'
                src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
                alt='Persona que lo encontró'
              />
            </div>
            <div className='flex flex-col items-center'>
              {/* TODO: Dinamizar nombre */}
              <span className='text-black font-bold'>Name Surname</span>
              <div className='flex items-center gap-1'>
                {/* TODO: Dinamizar el rating, 5 es la puntuación máxima */}
                <StarIcon size={16} fill='#FCD34D' stroke='#4B5563' />
                <StarIcon size={16} fill='#FCD34D' stroke='#4B5563' />
                <StarIcon size={16} fill='#FCD34D' stroke='#4B5563' />
                <StarIcon size={16} fill='#fff' stroke='#4B5563' />
                <StarIcon size={16} fill='#fff' stroke='#4B5563' />
                <span className='text-neutral-600 text-xs font-bold'>
                  (3.0)
                </span>
              </div>
            </div>
            <div className='flex gap-4 justify-center'>
              {/* TODO: Dinamizar los enlaces del perfil */}
              <Button
                className='text-white bg-primary-500 hover:bg-primary-700 active:bg-primary-900'
                size='small'
                content='Ver perfil'
              />
              <div className='bg-primary-500 hover:bg-primary-700 active:bg-primary-900 py-2 px-[0.875rem] rounded-xl cursor-pointer'>
                <MobileIcon size={20} stroke='#fff' />
              </div>
            </div>
            <div className='text-center'>
              <span className='font-bold tracking-[1px]'>COMPARTIR</span>
            </div>
            <div className='flex gap-4 justify-center'>
              {/* TODO: Dinamizar los links de los enlaces */}
              <div className='bg-neutral-400 p-[0.375rem] rounded-full cursor-pointer'>
                <WhatsappIcon size={12} fill='#fff' />
              </div>
              <div className='bg-neutral-400 p-[0.375rem] rounded-full cursor-pointer'>
                <FacebookIcon size={12} fill='#fff' />
              </div>
              <div className='bg-neutral-400 p-[0.375rem] rounded-full cursor-pointer'>
                <InstagramIcon size={12} fill='#fff' />
              </div>
              <div className='bg-neutral-400 p-[0.375rem] rounded-full cursor-pointer'>
                <ShareIcon size={12} stroke='#fff' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-10 px-[0.875rem] py-2 flex justify-between'>
        <div className='py-1'>
          <Button
            size='small'
            content='Volver'
            leftIcon={<LeftIcon size={16} stroke='#4B5563' />}
          />
        </div>
        <Button
          className='text-white bg-primary-500 hover:bg-primary-700 active:bg-primary-900'
          size='medium'
          content='Enviar mensaje'
        />
      </div>
    </div>
  </MainLayout>
)

export default AboutTheObject
