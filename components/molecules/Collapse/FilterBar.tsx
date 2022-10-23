import { useState } from 'react'
import { Button, Option } from '../..'
import {
  FilterIcon,
  DogIcon,
  DownArrowIcon,
  RewardIcon,
  LocationIcon,
  CancelIcon,
  DogFaceIcon,
  PolygonsIcon,
  UserIcon,
  SmileyFaceIcon,
} from '../../../assets'

interface filtersToSearch {
  whichOne: listOfFilters
  isCollapsed: boolean
}

type listOfFilters = 'AllCategories' | 'Rewards' | 'Location'

export const FilterBar = () => {
  const [filterIsCollapsed, setFilterIsCollapse] = useState<boolean>(false)
  const [filterToCollapse, setFilterToCollapse] = useState<filtersToSearch>({
    whichOne: 'AllCategories',
    isCollapsed: false,
  })

  // Función para cambiar el estado de la barra de filtros
  const handleCollapseFilters = (filter: listOfFilters) => {
    return filterToCollapse.whichOne === filter
      ? setFilterToCollapse((state) => ({
          ...state,
          isCollapsed: !state.isCollapsed,
        }))
      : setFilterToCollapse({ whichOne: filter, isCollapsed: true })
  }

  return (
    <div>
      {/* Filtros desactivados */}
      <div
        className={`flex gap-60 justify-center transition ease-out duration-300 ${
          !filterIsCollapsed ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className='flex-1' />
        <div className='flex gap-6'>
          {/* TODO: Agregar transiciones para que el cambio visual no sea tan brusco  */}
          <div className='p-[0.625rem] font-bold text-neutral-400 rounded-xl cursor-pointer hover:text-neutral-600 active:bg-neutral-100'>
            <button>Todos</button>
          </div>
          <div className='p-[0.625rem] font-bold text-neutral-400 rounded-xl cursor-pointer hover:text-neutral-600 active:bg-neutral-100'>
            <button>Mascotas</button>
          </div>
          <div className='p-[0.625rem] font-bold text-neutral-400 rounded-xl cursor-pointer hover:text-neutral-600 active:bg-neutral-100'>
            <button>Objetos</button>
          </div>
          <div className='p-[0.625rem] font-bold text-neutral-400 rounded-xl cursor-pointer hover:text-neutral-600 active:bg-neutral-100'>
            <button>Personas</button>
          </div>
        </div>
        <div className='flex-1'>
          <Button
            className='text-neutral-600 hover:text-neutral-800 ml-auto'
            size='medium'
            content='Filtros'
            leftIcon={<FilterIcon size={16} stroke='currentColor' />}
            onClick={() => setFilterIsCollapse(true)}
          />
        </div>
      </div>

      {/* Filtros activados */}
      <div
        className={`w-full flex absolute gap-60 justify-center transition-all ease-out duration-300 ${
          filterIsCollapsed
            ? 'opacity-100 -translate-y-12 visible'
            : 'opacity-0 invisible'
        }`}
      >
        <div className='flex-1' />
        <div className='flex gap-6'>
          {/* Todas las categorías */}
          <div className='relative'>
            <Button
              size='medium'
              className='text-neutral-400 hover:text-neutral-600 active:bg-neutral-100 active:text-neutral-700'
              content='Todas las categorías'
              // TODO: Pedir que el ícono no contenga muchos paths
              leftIcon={<DogIcon size={20} stroke='currentColor' />}
              rightIcon={<DownArrowIcon size={12} stroke='currentColor' />}
              onClick={() => handleCollapseFilters('AllCategories')}
            />
            {/* Filtros de mascota, objetos, personas */}
            <div
              className={`mt-[0.5rem] w-full p-4 bg-white absolute border-neutral-200 rounded-lg border-[1px] shadow-[2px_6px_20px_rgba(0,0,0,0.1)] transition-all ease-out duration-300 ${
                filterToCollapse.whichOne === 'AllCategories' &&
                filterToCollapse.isCollapsed
                  ? 'opacity-100 visible'
                  : 'opacity-0 invisible'
              }`}
            >
              <div className='pb-2 border-b-[0.5px] border-b-neutral-200'>
                <Option
                  className='py-2 pl-2 pr-6 text-sm text-neutral-600 justify-between cursor-pointer rounded-lg transition ease-out duration-300 relative hover:bg-neutral-100 hover:bottom-[1px]'
                  label='Mascotas'
                  rightIcon={<DogFaceIcon size={14} fill='currentColor' />}
                />
              </div>

              <div className='pt-1 pb-2 border-b-[0.5px] border-b-neutral-200'>
                <Option
                  className='py-2 pl-2 pr-6 text-sm text-neutral-600 justify-between cursor-pointer rounded-lg transition ease-out duration-300 relative hover:bg-neutral-100 hover:bottom-[1px]'
                  label='Objetos'
                  rightIcon={<PolygonsIcon size={14} fill='currentColor' />}
                />
              </div>

              <div className='pt-1'>
                <Option
                  className='pt-1 mb-2 pl-2 py-2 pr-6 text-sm text-neutral-600 justify-between cursor-pointer rounded-lg transition ease-out duration-300 relative hover:bg-neutral-100 hover:bottom-[1px]'
                  label='Personas'
                  rightIcon={<UserIcon size={14} stroke='currentColor' />}
                />
              </div>
            </div>
          </div>

          {/* Recompensa */}
          <div className='relative'>
            <Button
              size='medium'
              className='text-neutral-400 hover:text-neutral-600 active:bg-neutral-100 active:text-neutral-700'
              content='Recompensa'
              leftIcon={<RewardIcon size={20} stroke='currentColor' />}
              rightIcon={<DownArrowIcon size={12} stroke='currentColor' />}
              onClick={() => handleCollapseFilters('Rewards')}
            />

            {/* Filtros de recompensa */}
            <div
              className={`mt-[0.5rem] w-max p-4 bg-white absolute -right-[0.5rem] border-neutral-200 rounded-lg border-[1px] shadow-[2px_6px_20px_rgba(0,0,0,0.1)] transition-all ease-out duration-300 ${
                filterToCollapse.whichOne === 'Rewards' &&
                filterToCollapse.isCollapsed
                  ? 'opacity-100 visible'
                  : 'opacity-0 invisible'
              }`}
            >
              <div className='pb-2 border-b-[0.5px] border-b-neutral-200'>
                <Option
                  className='py-2 pl-2 pr-6 text-sm text-neutral-600 justify-between cursor-pointer rounded-lg transition ease-out duration-300 relative hover:bg-neutral-100 hover:bottom-[1px]'
                  label='Con recompensa'
                  rightIcon={<RewardIcon size={14} stroke='currentColor' />}
                />
              </div>

              <div className='pt-1 pb-2 border-b-[0.5px] border-b-neutral-200'>
                <Option
                  className='py-2 pl-2 pr-6 text-sm text-neutral-600 justify-between cursor-pointer rounded-lg transition ease-out duration-300 relative hover:bg-neutral-100 hover:bottom-[1px]'
                  label='Sin recompensa'
                  rightIcon={<SmileyFaceIcon size={14} stroke='currentColor' />}
                />
              </div>
            </div>
          </div>

          {/* Locación */}
          <div className='relative'>
            <Button
              size='medium'
              className='text-neutral-400 hover:text-neutral-600 active:bg-neutral-100 active:text-neutral-700'
              //TODO: Filtrar por locación
              content='Madrid, España...'
              leftIcon={<LocationIcon size={18} stroke='currentColor' />}
              rightIcon={<DownArrowIcon size={12} stroke='currentColor' />}
              onClick={() => handleCollapseFilters('Location')}
            />

            {/* Filtros de locación */}
            {/* TODO: Crear el dropdown para locación */}
            <div
              className={`mt-[0.5rem] w-full p-4 bg-white absolute border-neutral-200 rounded-lg border-[1px] shadow-[2px_6px_20px_rgba(0,0,0,0.1)] transition-all ease-out duration-300 ${
                filterToCollapse.whichOne === 'Location' &&
                filterToCollapse.isCollapsed
                  ? 'opacity-100 visible'
                  : 'opacity-0 invisible'
              }`}
            >
              <div className='pb-2 border-b-[0.5px] border-b-neutral-200'>
                <Option
                  className='py-2 pl-2 pr-6 text-sm text-neutral-600 justify-between cursor-pointer rounded-lg transition ease-out duration-300 relative hover:bg-neutral-100 hover:bottom-[1px]'
                  label='Mascotas'
                  rightIcon={<DogFaceIcon size={14} fill='currentColor' />}
                />
              </div>

              <div className='pt-1 pb-2 border-b-[0.5px] border-b-neutral-200'>
                <Option
                  className='py-2 pl-2 pr-6 text-sm text-neutral-600 justify-between cursor-pointer rounded-lg transition ease-out duration-300 relative hover:bg-neutral-100 hover:bottom-[1px]'
                  label='Objetos'
                  rightIcon={<PolygonsIcon size={14} fill='currentColor' />}
                />
              </div>

              <div className='pt-1'>
                <Option
                  className='pt-1 mb-2 pl-2 py-2 pr-6 text-sm text-neutral-600 justify-between cursor-pointer rounded-lg transition ease-out duration-300 relative hover:bg-neutral-100 hover:bottom-[1px]'
                  label='Personas'
                  rightIcon={<UserIcon size={14} stroke='currentColor' />}
                />
              </div>
            </div>
          </div>
        </div>
        <div className='flex-1'>
          {/* TODO: Hover */}
          <Button
            className='text-white bg-primary-500 hover:bg-primary-600 active:bg-primary-700 ml-auto'
            size='medium'
            content='Filtros'
            rightIcon={<CancelIcon size={10} stroke='currentColor' />}
            onClick={() => setFilterIsCollapse(false)}
          />
        </div>
      </div>
    </div>
  )
}
