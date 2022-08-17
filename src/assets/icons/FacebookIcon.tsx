import { FC } from 'react'
import { IconProps } from '../../interfaces'

export const FacebookIcon: FC<IconProps> = ({ size, fill = 'none' }) => (
	<svg
		width={size}
		height={size}
		viewBox='0 0 13 12'
		fill={fill}
		xmlns='http://www.w3.org/2000/svg'
	>
		<path
			d='M12.5 6C12.5 2.7 9.8 0 6.5 0C3.2 0 0.5 2.7 0.5 6C0.5 9 2.675 11.475 5.525 11.925V7.725H4.025V6H5.525V4.65C5.525 3.15 6.425 2.325 7.775 2.325C8.45 2.325 9.125 2.475 9.125 2.475V3.975H8.375C7.625 3.975 7.4 4.425 7.4 4.875V6H9.05L8.75 7.725H7.325V12C10.325 11.55 12.5 9 12.5 6Z'
			fill={fill}
		/>
	</svg>
)
