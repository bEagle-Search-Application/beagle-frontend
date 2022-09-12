import { LocationIcon, MobileIcon, StarIcon } from '../../assets'
import { GridExtraCard } from '../../components'
import { MainLayout } from '../../layouts'

const MyProfile = () => (
  <MainLayout>
    <div className='mx-8 mt-10 mb-24'>
      <div className='flex gap-8'>
        <img
          className='w-24 h-24 rounded-full object-cover'
          src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
          alt='Persona que lo encontró'
        />
        <div className='flex flex-col justify-center'>
          {/* TODO: Dinamizar nombre */}
          <h5 className='text-neutral-900 text-[24px] leading-7 font-semibold'>
            Name Surname
          </h5>
          <div className='flex items-center gap-1'>
            {/* TODO: Dinamizar el rating, 5 es la puntuación máxima */}
            <StarIcon size={16} fill='#FCD34D' stroke='#4B5563' />
            <StarIcon size={16} fill='#FCD34D' stroke='#4B5563' />
            <StarIcon size={16} fill='#FCD34D' stroke='#4B5563' />
            <StarIcon size={16} fill='#fff' stroke='#4B5563' />
            <StarIcon size={16} fill='#fff' stroke='#4B5563' />
            <span className='text-neutral-600 font-bold'>(3.0)</span>
          </div>
        </div>
      </div>
      <div className='max-w-[544px] flex flex-col gap-10 mt-10 text-neutral-600'>
        <div>
          <span className='text-sm font-bold tracking-[1px]'>BIO</span>
          <div className='m-4'>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </span>
          </div>
        </div>
        <div>
          <span className='text-sm font-bold tracking-[1px]'>UBICACÍON</span>
          <div className='m-4 flex items-center gap-4'>
            <LocationIcon size={20} stroke='#4B5563' />
            <span>Via Ioppolo 17, Ragusa 97100, Italia.</span>
          </div>
        </div>
        <div>
          <span className='text-sm font-bold tracking-[1px]'>TELÉFONO</span>
          <div className='m-4 flex items-center gap-4'>
            <MobileIcon size={20} stroke='#4B5563' />
            <span>+39543123872434</span>
          </div>
        </div>
      </div>
      <div className='text-neutral-600 mt-[52px]'>
        <span className='text-sm font-bold tracking-[1px]'>RESEÑAS</span>
        <div className='mt-4'>
          <GridExtraCard />
        </div>
      </div>
    </div>
  </MainLayout>
)

export default MyProfile
