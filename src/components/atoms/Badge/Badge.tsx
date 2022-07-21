import { FC, HTMLAttributes, ReactElement, ReactNode } from 'react'
import { IconProps } from '../../../interfaces'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
	content: string
	size: 'small' | 'medium' | 'large'

	textColor?: 'white' | 'black'

	bgColor?: string
	leftIcon?: ReactElement<IconProps>
	rightIcon?: ReactElement<IconProps>
}

interface BadgeContainerProps extends HTMLAttributes<HTMLButtonElement> {
	size: 'small' | 'medium' | 'large'

	textColor?: string
	bgColor?: string

	children: ReactNode
}

const BadgeContainer: FC<BadgeContainerProps> = ({
	size,
	textColor,
	bgColor,
	children,

	...attributes
}) => {
	const variableStyles = `${bgColor || 'bg-primary-300'} text-${
		textColor || 'white'
	}`

	switch (size) {
		case 'small':
			return (
				<button
					className={`${variableStyles} py-1 px-2 rounded-lg text-xs font-bold flex items-center`}
					{...attributes}
				>
					{children}
				</button>
			)

		case 'medium':
			return (
				<button
					className={`${variableStyles} py-1 px-3 rounded-[10px] text-base flex items-center`}
					{...attributes}
				>
					{children}
				</button>
			)

		case 'large':
			return (
				<button
					className={`${variableStyles} py-1 px-3 rounded-lg text-lg flex items-center`}
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
	bgColor,
	size,
	content,
	textColor,
	leftIcon,
	rightIcon,
}) => (
	<BadgeContainer size={size} bgColor={bgColor} textColor={textColor}>
		{leftIcon && <div className='mr-1'>{leftIcon}</div>}
		<span>{content}</span>
		{rightIcon && <div className='ml-1'>{rightIcon}</div>}
	</BadgeContainer>
)
