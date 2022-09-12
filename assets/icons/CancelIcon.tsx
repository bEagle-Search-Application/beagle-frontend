import { FC } from 'react'
import { IconProps } from '../../interfaces'

export const CancelIcon: FC<IconProps> = ({
	size,
	fill = 'none',
	stroke = 'white',
}) => (
	<svg
		width={size}
		height={size}
		viewBox='0 0 10 11'
		fill={fill}
		xmlns='http://www.w3.org/2000/svg'
	>
		<path
			d='M9.16659 1.19141L0.833252 9.52474M0.833252 1.19141L9.16659 9.52474'
			stroke={stroke}
			strokeWidth='1.66667'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
)
