import { FC } from 'react'
import { IconProps } from '../../interfaces'

export const AddCircleIcon: FC<IconProps> = ({
	size,
	fill = 'none',
	stroke = 'white',
}) => (
	<svg
		width={size}
		height={size}
		viewBox='0 0 20 20'
		fill={fill}
		xmlns='http://www.w3.org/2000/svg'
	>
		<path
			d='M10 6.66669V13.3334M6.66669 10H13.3334M18.3334 10C18.3334 14.6024 14.6024 18.3334 10 18.3334C5.39765 18.3334 1.66669 14.6024 1.66669 10C1.66669 5.39765 5.39765 1.66669 10 1.66669C14.6024 1.66669 18.3334 5.39765 18.3334 10Z'
			stroke={stroke}
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
)
