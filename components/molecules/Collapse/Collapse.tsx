import { Option } from '../../atoms'
import { EllipseIcon, WarningIcon } from '../../../assets'

export const Collapse = () => {
  return (
    <div className='w-[455px] select-none text-neutral-600 bg-white rounded-xl absolute top-6 right-4 shadow-[2px_6px_20px_rgba(0,0,0,0.15)]'>
      <div className='mt-5'>
        <div className='ml-4 mb-1 mr-[5px] flex flex-col gap-[19px]'>
          <div className='pl-2 pt-2 pb-4 relative border-b-[1px] border-b-neutral-200'>
            <Option
              className='flex items-center pr-8'
              label={
                <div className='flex-1 flex items-center justify-between'>
                  Texto de notificación
                  <div>
                    <EllipseIcon size={10} fill='#DC2626' />
                  </div>
                </div>
              }
              leftIcon={
                <div className='p-2 bg-neutral-100 rounded-full'>
                  <WarningIcon size={24} stroke='#4B5563' />
                </div>
              }
            />
          </div>
          <div className='pl-2 pt-2 pb-4 relative border-b-[1px] border-b-neutral-200'>
            <Option
              className='flex items-center pr-8'
              label={
                <div className='flex-1 flex items-center justify-between'>
                  Texto de notificación
                  <div>
                    <EllipseIcon size={10} fill='#DC2626' />
                  </div>
                </div>
              }
              leftIcon={
                <div className='p-2 bg-neutral-100 rounded-full'>
                  <WarningIcon size={24} stroke='#4B5563' />
                </div>
              }
            />
          </div>
          <div className='pl-2 pt-2 pb-4 relative border-b-[1px] border-b-neutral-200'>
            <Option
              className='flex items-center pr-8'
              label={
                <div className='flex-1 flex items-center justify-between'>
                  Texto de notificación
                  <div>
                    <EllipseIcon size={10} fill='#DC2626' />
                  </div>
                </div>
              }
              leftIcon={
                <div className='p-2 bg-neutral-100 rounded-full'>
                  <WarningIcon size={24} stroke='#4B5563' />
                </div>
              }
            />
          </div>
          <div className='pl-2 pt-2 pb-4 relative'>
            <Option
              className='flex items-center pr-8'
              label={
                <div className='flex-1 flex items-center justify-between'>
                  Texto de notificación
                  <div>
                    <EllipseIcon size={10} fill='#DC2626' />
                  </div>
                </div>
              }
              leftIcon={
                <div className='p-2 bg-neutral-100 rounded-full'>
                  <WarningIcon size={24} stroke='#4B5563' />
                </div>
              }
            />
          </div>
        </div>
      </div>
      <div className='bg-neutral-100 rounded-b-xl'>
        <div className='my-1 py-2 px-6 text-end text-xs font-bold'>
          Marcas todas las leídas
        </div>
      </div>
    </div>
  )
}
