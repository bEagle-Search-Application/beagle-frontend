import { FC } from 'react'
import { IconProps } from '../../interfaces'

export const SearchIcon: FC<IconProps> = ({
	size,
	fill = 'none',
	stroke = 'white',
}) => (
	<svg
		width={size}
		height={size}
		viewBox='0 0 17 18'
		fill={fill}
		xmlns='http://www.w3.org/2000/svg'
	>
		<path
			d='M16 16.5L12.375 12.875M14.3333 8.16667C14.3333 11.8486 11.3486 14.8333 7.66667 14.8333C3.98477 14.8333 1 11.8486 1 8.16667C1 4.48477 3.98477 1.5 7.66667 1.5C11.3486 1.5 14.3333 4.48477 14.3333 8.16667Z'
			stroke={stroke}
			strokeWidth='1.66667'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
)
