import { FilterIcon } from '../../assets'
import { Button, GridCard } from '../../components'
import { MainLayout } from '../../layouts'

const SearchResults = () => (
  <MainLayout>
    {/* Search Filters */}
    <div className='mt-[3.375rem] pb-[7.75rem]'>
      {/* TODO: Mejorar centro */}
      <div className='flex gap-60 justify-center'>
        <div className='flex-1' />
        <div className='flex gap-6'>
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
        {/* TODO: Hover */}
        <div className='flex-1'>
          <Button
            className='text-neutral-600 hover:bg-neutral-100 ml-auto'
            size='medium'
            content='Filtros'
            leftIcon={<FilterIcon size={20} stroke='#4B5563' />}
          />
        </div>
      </div>

      <div className='mt-8 mb-5'>
        <h3 className='text-[2rem] leading-9 text-neutral-500 font-bold'>
          {/* TODO: Dinamizar búsqueda */}
          Resultados de la búsqueda{' '}
          <span className='text-neutral-900'>&quot;conejo blanco&quot;</span>
        </h3>
      </div>
      <div className='flex flex-col gap-10'>
        <div>
          <div>
            <h4 className='text-[1.75rem] leading-8 font-bold text-left'>
              Buscados
            </h4>
          </div>
          <div className='mt-4'>
            <GridCard />
          </div>
        </div>

        <div>
          <div>
            <h4 className='text-[1.75rem] leading-8 font-bold text-left'>
              Encontrados
            </h4>
          </div>
          <div className='mt-4'>
            <GridCard />
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
)

export default SearchResults
