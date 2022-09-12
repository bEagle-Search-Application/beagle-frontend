import { FC } from 'react'
import { IconProps } from '../../interfaces'

export const DownArrowIcon: FC<IconProps> = ({
	size,
	fill = 'none',
	stroke = 'white',
}) => (
	<svg
		width={size}
		height={size}
		viewBox='0 0 12 8'
		fill={fill}
		xmlns='http://www.w3.org/2000/svg'
	>
		<path
			d='M1 1.5L6 6.5L11 1.5'
			stroke={stroke}
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
)
