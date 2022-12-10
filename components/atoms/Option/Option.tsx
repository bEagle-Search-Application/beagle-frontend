import { FC, HTMLAttributes, ReactElement } from 'react'
import { IconProps } from '../../../interfaces'

interface OptionProps extends HTMLAttributes<HTMLDivElement> {
  label: string | ReactElement

  leftIcon?: ReactElement<IconProps>
  rightIcon?: ReactElement<IconProps>
}

export const Option: FC<OptionProps> = ({
  label,
  className,
  leftIcon,
  rightIcon,

  ...attributes
}) => (
  <div
    className={`flex items-center gap-[0.625rem] text-base ${className || ''}`}
    {...attributes}
  >
    {leftIcon && <div>{leftIcon}</div>}
    {label}
    {rightIcon && <div>{rightIcon}</div>}
  </div>
)
