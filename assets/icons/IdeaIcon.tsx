import { FC } from 'react'
import { IconProps } from '../../interfaces'

export const IdeaIcon: FC<IconProps> = ({
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
			d='M8.33335 14.7155V16.6667C8.33335 17.5871 9.07955 18.3333 10 18.3333C10.9205 18.3333 11.6667 17.5871 11.6667 16.6667V14.7155M10 1.66666V2.49999M2.50002 9.99999H1.66669M4.58335 4.58332L4.08327 4.08324M15.4167 4.58332L15.9169 4.08324M18.3334 9.99999H17.5M15 9.99999C15 12.7614 12.7614 15 10 15C7.2386 15 5.00002 12.7614 5.00002 9.99999C5.00002 7.23857 7.2386 4.99999 10 4.99999C12.7614 4.99999 15 7.23857 15 9.99999Z'
			stroke={stroke}
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
)
