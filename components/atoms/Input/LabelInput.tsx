import { FC, ReactElement } from 'react'
import { IconProps } from '../../../interfaces'

interface LabelInputProps {
  type: 'error' | 'success' | 'primary'
  text: string

  icon?: ReactElement<IconProps>
}

export const LabelInput: FC<LabelInputProps> = ({ type, text, icon }) => {
  switch (type) {
    case 'primary':
      return (
        <div className='bg-primary-50 flex items-center px-3 py-[0.375rem] mt-1 rounded-lg max-w-sm'>
          {icon && <div>{icon}</div>}
          <span className='text-xs text-primary-700 ml-[0.375rem] mr-2 text-left'>
            {text}
          </span>
        </div>
      )

    case 'error':
      return (
        <div className='bg-error-50 flex items-center px-3 py-[0.375rem] mt-1 rounded-lg max-w-sm'>
          {icon && <div>{icon}</div>}
          <span className='text-xs text-error-700 ml-[0.375rem] mr-5 text-left'>
            {text}
          </span>
        </div>
      )

    case 'success':
      return (
        <div className='bg-success-50 flex items-center px-3 py-[0.375rem] mt-1 rounded-lg max-w-sm'>
          {icon && <div>{icon}</div>}
          <span className='text-xs text-success-700 ml-[0.375rem] mr-5 text-left'>
            {text}
          </span>
        </div>
      )

    default:
      return (
        <div className='bg-primary-50 flex items-center px-3 py-[6px] mt-1 rounded-lg max-w-sm'>
          {icon && <div>{icon}</div>}
          <span className='text-xs text-primary-700 ml-[6px] mr-5 text-left'>
            {text}
          </span>
        </div>
      )
  }
}
