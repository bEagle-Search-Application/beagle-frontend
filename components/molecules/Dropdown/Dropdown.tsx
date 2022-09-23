import { Option } from '../../atoms'
import {
  UserOutlinedIcon,
  RightArrowIcon,
  ExitAppIcon,
  GiveHelpIcon,
} from '../../../assets'

export const DropDown = () => {
  return (
    <div className='w-52 h-[336px] z-10 p-4 bg-white absolute top-10 right-0 rounded-xl shadow-[2px_6px_20px_rgba(0,0,0,0.15)] '>
      <div className='mt-1 pb-2 border-solid border-b-neutral-200 border-b-[0.5px]'>
        <Option
          className='p-2 rounded-xl relative text-sm text-neutral-600 justify-between hover:bg-neutral-100'
          label='Mi perfil'
          rightIcon={<UserOutlinedIcon size={15} stroke='#9CA3AF' />}
        />
      </div>
      <div className='mt-1 pb-2 border-solid border-b-neutral-200 border-b-[0.5px]'>
        <Option
          className='p-2 rounded-xl text-sm text-neutral-600 justify-between hover:bg-neutral-100'
          label='Mi cuenta'
          rightIcon={<RightArrowIcon size={12} stroke='#9CA3AF' />}
        />
      </div>
      <div className='mt-1 pb-2 border-solid border-b-neutral-200 border-b-[0.5px]'>
        <Option
          className='p-2 rounded-xl text-sm text-neutral-600 justify-between hover:bg-neutral-100'
          label='Configuraciones'
          rightIcon={<RightArrowIcon size={12} stroke='#9CA3AF' />}
        />
      </div>
      <div className='mt-1 pb-2 border-solid border-b-neutral-200 border-b-[0.5px]'>
        <Option
          className='p-2 rounded-xl text-sm text-neutral-600 justify-between hover:bg-neutral-100'
          label='Apoya a bEagle'
          rightIcon={<GiveHelpIcon size={16} stroke='#9CA3AF' />}
        />
      </div>
      <div className='mt-1 pb-2 border-solid border-b-neutral-200 border-b-[0.5px]'>
        <Option
          className='p-2 rounded-xl text-sm text-neutral-600 justify-between hover:bg-neutral-100'
          label='Terminos y Condiciones'
          rightIcon={<RightArrowIcon size={12} stroke='#9CA3AF' />}
        />
      </div>
      <div className='mt-1 pb-2'>
        <Option
          className='p-2 rounded-xl text-sm text-error-600 justify-between hover:bg-neutral-100'
          label='Cerrar sesión'
          rightIcon={<ExitAppIcon size={16} stroke='#DC2626' />}
        />
      </div>
    </div>
  )
}
