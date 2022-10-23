import { useContext } from 'react'
import type { NextPage } from 'next'

import { AuthContext } from '../context'
import { MainLayout } from '../layouts'
import { Badge, Button, FilterBar, GridCard } from '../components'

import { AddCircleIcon, AnnonationQuestionIcon, SearchIcon } from '../assets'

const Dashboard: NextPage = () => {
  const { isAuthenticated } = useContext(AuthContext)

  return (
    <MainLayout>
      <div className='mt-[3.375rem] pb-[7.75rem] relative'>
        {/* Filtros de búsqueda */}
        <div className='mb-10'>
          <FilterBar />
        </div>

        {/* Contenedor de todas las Cards */}
        <div className='flex flex-col gap-10'>
          {!isAuthenticated && (
            <div>
              <div>
                <h4 className='text-[1.75rem] leading-8 font-bold text-left'>
                  Búsquedas recientes
                </h4>
                <div className='mt-4 flex gap-5'>
                  <div className='min-w-[16.6875rem] max-w-xs min-h-[18.375rem] py-8 px-[3.3125rem] flex flex-col justify-center gap-6 bg-gradient-to-r from-[#8074C6] to-[#4B4183] rounded-xl'>
                    <AnnonationQuestionIcon size={20} stroke='#fff' />
                    <h4 className='text-[1.75rem] leading-7 text-neutral-50 font-bold'>
                      ¿Perdiste o encontraste algo?
                    </h4>
                    <Button
                      size='medium'
                      className='bg-white text-neutral-800 justify-center'
                      content='Crear anuncio'
                      leftIcon={<AddCircleIcon size={20} stroke='#4B5563' />}
                    />
                  </div>
                  <div className='py-[2.4375rem] px-[2rem] min-w-[16.6875rem] max-w-xs rounded-xl border-[1px] border-neutral-300 border-solid'>
                    <h4 className='text-[1.75rem] leading-7 text-neutral-600 font-bold'>
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
                  <div className='py-[2.4375rem] px-[2rem] min-w-[16.6875rem] max-w-xs rounded-xl border-[1px] border-neutral-300 border-solid'>
                    <h4 className='text-[1.75rem] leading-7 text-neutral-600 font-bold'>
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
                  <div className='py-[2.4375rem] px-[2rem] min-w-[16.6875rem] max-w-xs rounded-xl border-[1px] border-neutral-300 border-solid'>
                    <h4 className='text-[1.75rem] leading-7 text-neutral-600 font-bold'>
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

          {/* Encontrados */}
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
          {/* Buscados */}
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
        </div>
      </div>
    </MainLayout>
  )
}

export default Dashboard
