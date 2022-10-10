import { FC, HTMLAttributes, ReactElement, ReactNode } from 'react'
import { IconProps } from '../../../interfaces'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  content: string
  size: 'small' | 'medium' | 'large' | 'small-overline'

  leftIcon?: ReactElement<IconProps>
  rightIcon?: ReactElement<IconProps>
}

interface BadgeContainerProps extends HTMLAttributes<HTMLButtonElement> {
  size: 'small' | 'medium' | 'large' | 'small-overline'

  children: ReactNode
}

const BadgeContainer: FC<BadgeContainerProps> = ({
  size,
  className,
  children,

  ...attributes
}) => {
  switch (size) {
    case 'small':
      return (
        <button
          className={`py-1 px-2 rounded-lg text-xs font-bold flex items-center ${
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
          className={`py-1 px-3 rounded-[10px] text-base flex items-center ${
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
          className={`py-1 px-3 rounded-lg text-lg flex items-center ${
            className || ''
          }`}
          {...attributes}
        >
          {children}
        </button>
      )

    case 'small-overline':
      return (
        <button
          className={`py-1 px-3 rounded-lg text-[0.875rem] leading-5 tracking-[1px] font-bold flex items-center ${
            className || ''
          }`}
          {...attributes}
        >
          {children}
        </button>
      )

    default:
      return <button>Inserte un contenido...</button>
  }
}

export const Badge: FC<ButtonProps> = ({
  size,
  content,
  className,
  leftIcon,
  rightIcon,
}) => (
  <BadgeContainer size={size} className={className}>
    {leftIcon && <div className='mr-1'>{leftIcon}</div>}
    <span>{content}</span>
    {rightIcon && <div className='ml-1'>{rightIcon}</div>}
  </BadgeContainer>
)
