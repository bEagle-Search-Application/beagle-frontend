import { useContext } from 'react'
import type { NextPage } from 'next'

import { AuthContext } from '../context'
import { MainLayout } from '../layouts'
import { Badge, Button, GridCard } from '../components'

import {
  AddCircleIcon,
  AnnonationQuestionIcon,
  FilterIcon,
  SearchIcon,
} from '../assets'

const Dashboard: NextPage = () => {
  const { isAuthenticated } = useContext(AuthContext)

  return (
    <MainLayout>
      {/* Search Filters */}
      <div className='mt-[54px] pb-[124px]'>
        {/* TODO: Mejorar centro */}
        <div className='flex gap-60 justify-center mb-10'>
          <div className='flex-1' />
          <div className='flex gap-6'>
            {/* TODO: Revisar diseño y asegurar de que es encuentre adecuadamente */}
            <div className='bg-neutral-100 text-neutral-600 font-bold p-[10px] rounded-xl cursor-pointer'>
              <button>Todos</button>
            </div>
            <div className='text-neutral-400 hover:bg-neutral-100 p-[10px] rounded-xl cursor-pointer'>
              <button>Mascotas</button>
            </div>
            <div className='text-neutral-400 hover:bg-neutral-100 p-[10px] rounded-xl cursor-pointer'>
              <button>Objetos</button>
            </div>
            <div className='text-neutral-400 hover:bg-neutral-100 p-[10px] rounded-xl cursor-pointer'>
              <button>Personas</button>
            </div>
          </div>
          <div className='flex-1'>
            {/* TODO: Hover */}
            <Button
              className='text-neutral-600 hover:bg-neutral-100 ml-auto'
              size='medium'
              content='Filtros'
              leftIcon={<FilterIcon size={20} stroke='#4B5563' />}
            />
          </div>
        </div>

        <div className='flex flex-col gap-10'>
          {isAuthenticated && (
            <div>
              <div>
                <h4 className='text-[28px] leading-8 font-bold text-left'>
                  Búsquedas recientes
                </h4>
                <div className='mt-4 flex gap-5'>
                  <div className='min-w-[267px] max-w-xs min-h-[294px] py-8 px-[53px] flex flex-col justify-center gap-6 bg-gradient-to-r from-[#8074C6] to-[#4B4183] rounded-xl'>
                    <AnnonationQuestionIcon size={20} stroke='#fff' />
                    <h4 className='text-[28px] leading-7 text-neutral-50 font-bold'>
                      ¿Perdiste o encontraste algo?
                    </h4>
                    <Button
                      size='medium'
                      className='bg-white text-neutral-800 justify-center'
                      content='Crear anuncio'
                      leftIcon={<AddCircleIcon size={20} stroke='#4B5563' />}
                    />
                  </div>
                  <div className='py-[39px] px-[32.5px] min-w-[267px] max-w-xs rounded-xl border-[1px] border-neutral-300 border-solid'>
                    <h4 className='text-[28px] leading-7 text-neutral-600 font-bold'>
                      “Iphone 8 plus de color rojo...
                    </h4>
                    <div className='mt-6 grid auto-rows-auto grid-cols-3 gap-1'>
                      <Badge
                        size='small'
                        className='bg-neutral-50 text-neutral-700 justify-center'
                        content='Ejemplo'
                      />
                      <Badge
                        size='small'
                        className='bg-neutral-50 text-neutral-700 justify-center'
                        content='Ejemplo'
                      />
                      <Badge
                        size='small'
                        className='bg-neutral-50 text-neutral-700 justify-center'
                        content='Ejemplo'
                      />
                      <Badge
                        size='small'
                        className='bg-neutral-50 text-neutral-700 justify-center'
                        content='Ejemplo'
                      />
                      <Badge
                        size='small'
                        className='bg-neutral-50 text-neutral-700 justify-center'
                        content='Ejemplo'
                      />
                      <Badge
                        size='small'
                        className='bg-neutral-50 text-neutral-700 justify-center'
                        content='Ejemplo'
                      />
                    </div>
                    <Button
                      size='medium'
                      className='mt-8 mx-auto bg-white text-neutral-800 border-[1px] border-neutral-300 border-solid'
                      content='Buscar'
                      leftIcon={<SearchIcon size={20} stroke='#4B5563' />}
                    />
                  </div>
                  <div className='py-[39px] px-[32.5px] min-w-[267px] max-w-xs rounded-xl border-[1px] border-neutral-300 border-solid'>
                    <h4 className='text-[28px] leading-7 text-neutral-600 font-bold'>
                      “Iphone 8 plus de color rojo...
                    </h4>
                    <div className='mt-6 grid auto-rows-auto grid-cols-3 gap-1'>
                      <Badge
                        size='small'
                        className='bg-neutral-50 text-neutral-700 justify-center'
                        content='Ejemplo'
                      />
                      <Badge
                        size='small'
                        className='bg-neutral-50 text-neutral-700 justify-center'
                        content='Ejemplo'
                      />
                      <Badge
                        size='small'
                        className='bg-neutral-50 text-neutral-700 justify-center'
                        content='Ejemplo'
                      />
                      <Badge
                        size='small'
                        className='bg-neutral-50 text-neutral-700 justify-center'
                        content='Ejemplo'
                      />
                      <Badge
                        size='small'
                        className='bg-neutral-50 text-neutral-700 justify-center'
                        content='Ejemplo'
                      />
                      <Badge
                        size='small'
                        className='bg-neutral-50 text-neutral-700 justify-center'
                        content='Ejemplo'
                      />
                    </div>
                    <Button
                      size='medium'
                      className='mt-8 mx-auto bg-white text-neutral-800 border-[1px] border-neutral-300 border-solid'
                      content='Buscar'
                      leftIcon={<SearchIcon size={20} stroke='#4B5563' />}
                    />
                  </div>
                  <div className='py-[39px] px-[32.5px] min-w-[267px] max-w-xs rounded-xl border-[1px] border-neutral-300 border-solid'>
                    <h4 className='text-[28px] leading-7 text-neutral-600 font-bold'>
                      “Iphone 8 plus de color rojo...
                    </h4>
                    <div className='mt-6 grid auto-rows-auto grid-cols-3 gap-1'>
                      <Badge
                        size='small'
                        className='bg-neutral-50 text-neutral-700 justify-center'
                        content='Ejemplo'
                      />
                      <Badge
                        size='small'
                        className='bg-neutral-50 text-neutral-700 justify-center'
                        content='Ejemplo'
                      />
                      <Badge
                        size='small'
                        className='bg-neutral-50 text-neutral-700 justify-center'
                        content='Ejemplo'
                      />
                      <Badge
                        size='small'
                        className='bg-neutral-50 text-neutral-700 justify-center'
                        content='Ejemplo'
                      />
                      <Badge
                        size='small'
                        className='bg-neutral-50 text-neutral-700 justify-center'
                        content='Ejemplo'
                      />
                      <Badge
                        size='small'
                        className='bg-neutral-50 text-neutral-700 justify-center'
                        content='Ejemplo'
                      />
                    </div>
                    <Button
                      size='medium'
                      className='mt-8 mx-auto bg-white text-neutral-800 border-[1px] border-neutral-300 border-solid'
                      content='Buscar'
                      leftIcon={<SearchIcon size={20} stroke='#4B5563' />}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          <div>
            <div>
              <h4 className='text-[28px] leading-8 font-bold text-left'>
                Encontrados
              </h4>
            </div>
            <div className='mt-4'>
              <GridCard />
            </div>
          </div>
          <div>
            <div>
              <h4 className='text-[28px] leading-8 font-bold text-left'>
                Buscados
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
}

export default Dashboard
