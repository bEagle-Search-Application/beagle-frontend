import { ButtonHTMLAttributes, FC, ReactElement, ReactNode } from 'react'
import { IconProps } from '../../../interfaces'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: 'small' | 'medium' | 'large'
  content: string

  leftIcon?: ReactElement<IconProps>
  rightIcon?: ReactElement<IconProps>
}

interface ButtonContainerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: 'small' | 'medium' | 'large'
  children: ReactNode
}

const ButtonContainer: FC<ButtonContainerProps> = ({
  size = 'small',
  className,

  children,
  ...attributes
}) => {
  switch (size) {
    case 'small':
      return (
        <button
          className={`text-sm font-bold py-2 px-[0.875rem] rounded-xl flex items-center transition-all duration-300 ease-out ${
            className || ''
          }`}
          {...attributes}
        >
          {children}
        </button>
      )
    case 'medium':
      return (
        <button
          className={`text-base font-bold py-[0.625rem] px-4 rounded-xl flex items-center transition-all duration-300 ease-out ${
            className || ''
          }`}
          {...attributes}
        >
          {children}
        </button>
      )
    case 'large':
      return (
        <button
          className={`text-lg font-bold py-3 px-6 rounded-[14px] flex items-center transition-all duration-300 ease-out ${
            className || ''
          }`}
          {...attributes}
        >
          {children}
        </button>
      )
    default:
      return (
        <button
          className={`text-sm font-bold py-2 px-[0.875rem] rounded-xl flex items-center transition-all duration-300 ease-out ${
            className || ''
          }`}
          {...attributes}
        >
          Text here
        </button>
      )
  }
}

export const Button: FC<ButtonProps> = ({
  size,
  content,
  className,

  leftIcon,
  rightIcon,
  ...attributes
}) => (
  <ButtonContainer size={size} className={className} {...attributes}>
    {leftIcon && <div className='mr-[0.625rem]'>{leftIcon}</div>}
    <span>{content}</span>
    {rightIcon && <div className='ml-[0.625rem]'>{rightIcon}</div>}
  </ButtonContainer>
)
