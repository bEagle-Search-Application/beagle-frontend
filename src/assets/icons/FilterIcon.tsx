import { FC } from 'react'
import { IconProps } from '../../interfaces'

export const FilterIcon: FC<IconProps> = ({
	size,
	fill = 'none',
	stroke = 'white',
}) => (
	<svg
		width={size}
		height={size}
		viewBox='0 0 18 12'
		fill={fill}
		xmlns='http://www.w3.org/2000/svg'
	>
		<path
			d='M4 6H14M1.5 1H16.5M6.5 11H11.5'
			stroke={stroke}
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
)
