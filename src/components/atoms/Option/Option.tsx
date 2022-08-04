import { FC, HTMLAttributes, ReactElement } from 'react'
import { IconProps } from '../../../interfaces'

interface OptionProps extends HTMLAttributes<HTMLDivElement> {
	label: string

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
		className={`flex items-center gap-[10px] ${className || ''}`}
		{...attributes}
	>
		{leftIcon && <div>{leftIcon}</div>}
		<span>{label}</span>
		{rightIcon && <div>{rightIcon}</div>}
	</div>
)
