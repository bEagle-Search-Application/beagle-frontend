import { FC } from 'react'
import { IconProps } from '../../interfaces'

export const HeartIcon: FC<IconProps> = ({
	size,
	fill = 'none',
	stroke = 'white',
}) => (
	<svg
		width={size}
		height={size}
		viewBox='0 0 22 21'
		fill={fill}
		xmlns='http://www.w3.org/2000/svg'
	>
		<path
			fillRule='evenodd'
			clipRule='evenodd'
			d='M10.9932 4.13581C8.9938 1.7984 5.65975 1.16964 3.15469 3.31001C0.649644 5.45038 0.296968 9.02898 2.2642 11.5604C3.89982 13.6651 8.84977 18.1041 10.4721 19.5408C10.6536 19.7016 10.7444 19.7819 10.8502 19.8135C10.9426 19.8411 11.0437 19.8411 11.1361 19.8135C11.2419 19.7819 11.3327 19.7016 11.5142 19.5408C13.1365 18.1041 18.0865 13.6651 19.7221 11.5604C21.6893 9.02898 21.3797 5.42787 18.8316 3.31001C16.2835 1.19216 12.9925 1.7984 10.9932 4.13581Z'
			stroke={stroke}
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
)
