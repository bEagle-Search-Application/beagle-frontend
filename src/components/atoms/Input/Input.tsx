import { FC, InputHTMLAttributes, ReactElement } from 'react'
import { IconProps } from '../../../interfaces'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	className?: string
	leftIcon?: ReactElement<IconProps>
	rightIcon?: ReactElement<IconProps>
}

export const Input: FC<InputProps> = ({
	className = '',
	leftIcon,
	rightIcon,

	...attributes
}) => (
	<div
		className={`text-sm flex items-center px-2 py-2.5 max-w-sm rounded-xl ${className}`}
	>
		{leftIcon && <div className='flex'>{leftIcon}</div>}
		<input
			type='text'
			className='ml-[6px] mr-5 placeholder-neutral-400 bg-transparent flex-auto caret-primary-600'
			{...attributes}
		/>
		{rightIcon && <div className='flex'>{rightIcon}</div>}
	</div>
)
