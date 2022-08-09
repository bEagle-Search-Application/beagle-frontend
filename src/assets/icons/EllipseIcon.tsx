import { FC } from 'react'
import { IconProps } from '../../interfaces'

export const EllipseIcon: FC<IconProps> = ({
	size,
	fill = 'none',
	stroke = 'white',
}) => (
	<svg
		width={size}
		height={size}
		viewBox='0 0 5 4'
		fill={fill}
		xmlns='http://www.w3.org/2000/svg'
	>
		<circle cx='2.5' cy='2' r='2' stroke={stroke} />
	</svg>
)
