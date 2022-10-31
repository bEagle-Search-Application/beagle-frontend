import { Button, GridSingleCard, wrapperPrivateRoute } from '../../components'
import { MainLayout } from '../../layouts'
import { FilterIcon } from '../../assets'

const Objects = () => (
  <MainLayout>
    <div className='mt-[3.375rem] pb-[7.75rem]'>
      {/* TODO: Mejorar centro */}
      <div className='flex gap-60 justify-center mb-10'>
        <div className='flex-1' />
        <div className='flex-1 flex gap-6'>
          {/* TODO: Revisar diseño y asegurar de que es encuentre adecuadamente */}
          <div className='bg-neutral-100 text-neutral-600 font-bold p-[0.625rem] rounded-xl cursor-pointer'>
            <button>Todos</button>
          </div>
          <div className='text-neutral-400 hover:bg-neutral-100 p-[0.625rem] rounded-xl cursor-pointer'>
            <button>Mascotas</button>
          </div>
          <div className='text-neutral-400 hover:bg-neutral-100 p-[0.625rem] rounded-xl cursor-pointer'>
            <button>Objetos</button>
          </div>
          <div className='text-neutral-400 hover:bg-neutral-100 p-[0.625rem] rounded-xl cursor-pointer'>
            <button>Personas</button>
          </div>
        </div>
        <div className='flex-1'>
          <Button
            className='text-neutral-600 hover:text-neutral-700 active:text-neutral-800 ml-auto'
            size='medium'
            content='Filtros'
            leftIcon={<FilterIcon size={20} stroke='#4B5563' />}
          />
        </div>
      </div>
      <div>
        <div>
          <div>
            <h4 className='text-[1.75rem] leading-8 font-bold text-left'>
              Encontrados
            </h4>
          </div>
          <div className='mt-4'>
            <GridSingleCard />
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
)

export default wrapperPrivateRoute(Objects)
