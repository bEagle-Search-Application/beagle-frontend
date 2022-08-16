import { FC } from 'react'
import { IconProps } from '../../interfaces'

export const TimeIcon: FC<IconProps> = ({
	size,
	fill = 'none',
	stroke = 'white',
}) => (
	<svg
		width={size}
		height={size}
		viewBox='0 0 23 22'
		fill={fill}
		xmlns='http://www.w3.org/2000/svg'
	>
		<path
			d='M11.5 5V11L15.5 13M21.5 11C21.5 16.5228 17.0228 21 11.5 21C5.97715 21 1.5 16.5228 1.5 11C1.5 5.47715 5.97715 1 11.5 1C17.0228 1 21.5 5.47715 21.5 11Z'
			stroke={stroke}
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
)
