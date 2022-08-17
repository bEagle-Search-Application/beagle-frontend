import { FC } from 'react'
import { IconProps } from '../../interfaces'

export const MobileIcon: FC<IconProps> = ({
	size,
	fill = 'none',
	stroke = 'white',
}) => (
	<svg
		width={size}
		height={size}
		viewBox='0 0 14 20'
		fill={fill}
		xmlns='http://www.w3.org/2000/svg'
	>
		<path
			d='M7.00008 14.5827H7.00841M3.83341 18.3327H10.1667C11.1002 18.3327 11.5669 18.3327 11.9234 18.151C12.237 17.9912 12.492 17.7363 12.6518 17.4227C12.8334 17.0661 12.8334 16.5994 12.8334 15.666V4.33268C12.8334 3.39926 12.8334 2.93255 12.6518 2.57603C12.492 2.26243 12.237 2.00746 11.9234 1.84767C11.5669 1.66602 11.1002 1.66602 10.1667 1.66602H3.83341C2.89999 1.66602 2.43328 1.66602 2.07676 1.84767C1.76316 2.00746 1.50819 2.26243 1.3484 2.57603C1.16675 2.93255 1.16675 3.39926 1.16675 4.33268V15.666C1.16675 16.5994 1.16675 17.0661 1.3484 17.4227C1.50819 17.7363 1.76316 17.9912 2.07676 18.151C2.43328 18.3327 2.89999 18.3327 3.83341 18.3327ZM7.41675 14.5827C7.41675 14.8128 7.2302 14.9993 7.00008 14.9993C6.76996 14.9993 6.58341 14.8128 6.58341 14.5827C6.58341 14.3526 6.76996 14.166 7.00008 14.166C7.2302 14.166 7.41675 14.3526 7.41675 14.5827Z'
			stroke={stroke}
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
)
