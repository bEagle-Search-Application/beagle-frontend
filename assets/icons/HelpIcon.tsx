import { FC } from 'react'
import { IconProps } from '../../interfaces'

export const HelpIcon: FC<IconProps> = ({
	size,
	fill = 'none',
	stroke = 'white',
}) => (
	<svg
		width={size}
		height={size}
		viewBox='0 0 22 22'
		fill={fill}
		xmlns='http://www.w3.org/2000/svg'
	>
		<path
			d='M8.13626 8.13628L3.92893 3.92896M3.92893 18.0711L8.16797 13.8321M13.8611 13.8638L18.0684 18.0711M18.0684 3.92896L13.8287 8.16862M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11ZM15 11C15 13.2091 13.2091 15 11 15C8.79086 15 7 13.2091 7 11C7 8.79086 8.79086 7 11 7C13.2091 7 15 8.79086 15 11Z'
			stroke={stroke}
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
)
