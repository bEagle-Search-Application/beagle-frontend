import { FC, InputHTMLAttributes, ReactElement } from 'react'
import { IconProps } from '../../../interfaces'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	className?: string
	leftIcon?: ReactElement<IconProps>
	rightIcon?: ReactElement<IconProps>
}

export const Input: FC<InputProps> = ({
	className,
	leftIcon,
	...attributes
}) => (
	<div>
		{leftIcon && <div />}
		<input
			type='text'
			className={`${className} px-2 py-2.5 rounded-xl placeholder-neutral-400`}
			{...attributes}
		/>
	</div>
)
