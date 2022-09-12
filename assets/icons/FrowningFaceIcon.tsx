import { FC } from 'react'
import { IconProps } from '../../interfaces'

export const FrowningFaceIcon: FC<IconProps> = ({
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
			d='M13.3334 13.3327C13.3334 13.3327 12.0834 11.666 10.0001 11.666C7.91675 11.666 6.66675 13.3327 6.66675 13.3327M14.1667 7.69935C13.8376 8.10351 13.3876 8.33268 12.9167 8.33268C12.4459 8.33268 12.0084 8.10351 11.6667 7.69935M8.33342 7.69935C8.00425 8.10351 7.55425 8.33268 7.08341 8.33268C6.61258 8.33268 6.17508 8.10351 5.83341 7.69935M18.3334 9.99935C18.3334 14.6017 14.6025 18.3327 10.0001 18.3327C5.39771 18.3327 1.66675 14.6017 1.66675 9.99935C1.66675 5.39698 5.39771 1.66602 10.0001 1.66602C14.6025 1.66602 18.3334 5.39698 18.3334 9.99935Z'
			stroke={stroke}
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
)
