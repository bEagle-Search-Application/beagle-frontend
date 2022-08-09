import { FC } from 'react'
import { IconProps } from '../../interfaces'

export const UserIcon: FC<IconProps> = ({
	size,
	fill = 'none',
	stroke = 'white',
}) => (
	<svg
		width={size}
		height={size}
		viewBox='0 0 21 19'
		fill={fill}
		xmlns='http://www.w3.org/2000/svg'
	>
		<path
			d='M1.5 18C3.83579 15.5226 7.00702 14 10.5 14C13.993 14 17.1642 15.5226 19.5 18M15 5.5C15 7.98528 12.9853 10 10.5 10C8.01472 10 6 7.98528 6 5.5C6 3.01472 8.01472 1 10.5 1C12.9853 1 15 3.01472 15 5.5Z'
			stroke={stroke}
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
)
