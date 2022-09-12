import { FC } from 'react'
import { IconProps } from '../../interfaces'

export const ShareIcon: FC<IconProps> = ({
	size,
	fill = 'none',
	stroke = 'white',
}) => (
	<svg
		width={size}
		height={size}
		viewBox='0 0 13 12'
		fill={fill}
		xmlns='http://www.w3.org/2000/svg'
	>
		<path
			d='M6.91266 9.71323L6.0877 10.5382C4.94868 11.6772 3.10194 11.6772 1.96291 10.5382C0.823885 9.39916 0.823885 7.55242 1.96291 6.4134L2.78787 5.58844M10.2125 6.41339L11.0375 5.58844C12.1765 4.44941 12.1765 2.60268 11.0375 1.46365C9.89842 0.324617 8.05169 0.324618 6.91266 1.46365L6.0877 2.2886M4.45852 8.04257L8.54185 3.95924'
			stroke={stroke}
			strokeWidth='1.16667'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
)
