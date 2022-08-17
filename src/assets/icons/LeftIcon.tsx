import { FC } from 'react'
import { IconProps } from '../../interfaces'

export const LeftIcon: FC<IconProps> = ({
	size,
	fill = 'none',
	stroke = 'white',
}) => (
	<svg
		width={size}
		height={size}
		viewBox='0 0 8 12'
		fill={fill}
		xmlns='http://www.w3.org/2000/svg'
	>
		<path
			d='M6.5 11L1.5 6L6.5 1'
			stroke={stroke}
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
)
