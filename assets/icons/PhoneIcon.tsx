import { FC } from 'react'
import { IconProps } from '../../interfaces'

export const PhoneIcon: FC<IconProps> = ({
	size,
	fill = 'none',
	stroke = 'white',
}) => (
	<svg
		width={size}
		height={size}
		viewBox='0 0 15 15'
		fill={fill}
		xmlns='http://www.w3.org/2000/svg'
	>
		<path
			d='M4.56287 5.65103C5.04055 6.64593 5.69172 7.5784 6.51639 8.40307C7.34106 9.22773 8.27353 9.87891 9.26843 10.3566C9.35401 10.3977 9.3968 10.4182 9.45094 10.434C9.64335 10.4901 9.87962 10.4498 10.0426 10.3331C10.0884 10.3003 10.1277 10.2611 10.2061 10.1826C10.4461 9.94266 10.566 9.82269 10.6867 9.74425C11.1416 9.44845 11.7281 9.44845 12.1831 9.74425C12.3037 9.82269 12.4237 9.94266 12.6636 10.1826L12.7974 10.3163C13.1621 10.6811 13.3445 10.8635 13.4436 11.0593C13.6406 11.4488 13.6406 11.9089 13.4436 12.2984C13.3445 12.4943 13.1621 12.6766 12.7974 13.0414L12.6892 13.1496C12.3257 13.513 12.144 13.6948 11.8969 13.8336C11.6227 13.9876 11.1968 14.0984 10.8823 14.0974C10.5989 14.0966 10.4052 14.0416 10.0178 13.9317C7.93595 13.3408 5.97145 12.2258 4.33253 10.5869C2.69361 8.948 1.5787 6.98351 0.987801 4.90162C0.877848 4.51423 0.82287 4.32054 0.822027 4.03712C0.821091 3.72264 0.931838 3.29678 1.08586 3.02259C1.22467 2.77549 1.40641 2.59375 1.76991 2.23026L1.87809 2.12207C2.24283 1.75733 2.4252 1.57496 2.62107 1.47589C3.0106 1.27887 3.47061 1.27887 3.86014 1.47589C4.056 1.57496 4.23837 1.75733 4.60311 2.12207L4.73686 2.25581C4.9768 2.49575 5.09677 2.61572 5.17521 2.73636C5.47101 3.19132 5.47101 3.77784 5.17521 4.23279C5.09677 4.35343 4.9768 4.4734 4.73686 4.71334C4.6584 4.7918 4.61918 4.83103 4.58634 4.87688C4.46966 5.03983 4.42937 5.27611 4.48546 5.46852C4.50124 5.52266 4.52179 5.56545 4.56287 5.65103Z'
			stroke={stroke}
			strokeWidth='1.37264'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
)
