import { FC } from 'react'
import { IconProps } from '../../interfaces'

export const PolygonsIcon: FC<IconProps> = ({ size, fill = 'none' }) => (
	<svg
		width={size}
		height={size}
		viewBox='0 0 18 20'
		fill={fill}
		xmlns='http://www.w3.org/2000/svg'
	>
		<path
			d='M6.66589 20.0004C4.70561 18.9833 2.74586 17.9662 0.785584 16.9491C0.539824 16.8218 0.426965 16.6241 0.427492 16.3482C0.430129 14.0187 0.430129 11.6893 0.427492 9.35979C0.426965 9.06665 0.560392 8.87575 0.820919 8.74117C2.56866 7.83985 4.31218 6.9307 6.06045 6.0299C6.18808 5.96418 6.2366 5.89481 6.23554 5.74928C6.22869 4.66279 6.24662 3.57577 6.22605 2.48928C6.21498 1.89831 6.46179 1.46434 6.91956 1.12217C7.37258 0.783653 7.88836 0.569797 8.43051 0.428443C10.6471 -0.150532 12.8626 -0.152619 15.0692 0.48269C15.6082 0.637605 16.1171 0.866587 16.5453 1.24057C16.9103 1.55927 17.0933 1.94838 17.0922 2.4413C17.0854 6.11127 17.0822 9.78124 17.0943 13.4512C17.0964 14.05 16.8544 14.4902 16.3882 14.8324C15.7727 15.2836 15.0576 15.5001 14.3235 15.6659C13.9965 15.74 13.6664 15.7984 13.3325 15.8292C13.2244 15.8391 13.1711 15.874 13.178 15.9971C13.2286 16.899 13.0171 16.8453 12.4565 17.1389C10.7146 18.0512 8.96791 18.9541 7.2228 19.8601C7.13051 19.9081 7.03664 19.954 6.94329 20.0004C6.84994 20.0004 6.75765 20.0004 6.66589 20.0004ZM7.41582 3.8637C7.41582 3.91064 7.41582 3.97375 7.41582 4.03687C7.41582 4.60958 7.42163 5.18178 7.41213 5.7545C7.4095 5.90419 7.4538 5.98243 7.59092 6.05285C9.30438 6.93435 11.012 7.82629 12.726 8.70623C13.0435 8.86897 13.1854 9.0943 13.1833 9.44951C13.1743 11.115 13.1827 12.7804 13.1748 14.4459C13.1738 14.6295 13.2202 14.6785 13.4016 14.6467C13.8225 14.5732 14.2428 14.4975 14.6504 14.3703C15.027 14.2524 15.3951 14.1131 15.7115 13.8685C15.8365 13.772 15.9067 13.6614 15.9067 13.4898C15.9019 10.3279 15.9035 7.16646 15.9024 4.00453C15.9024 3.95028 15.9204 3.89082 15.903 3.86891C13.0604 4.88134 10.2473 4.88238 7.41582 3.8637ZM1.61252 10.2674C1.61252 12.1848 1.61357 14.0641 1.60988 15.9429C1.60988 16.053 1.67106 16.0869 1.74806 16.127C3.17199 16.8666 4.59592 17.6063 6.01985 18.3464C6.20865 18.4445 6.21076 18.444 6.21076 18.2411C6.21129 16.4332 6.2097 14.6259 6.21392 12.818C6.21445 12.6876 6.16699 12.624 6.05307 12.5655C5.12593 12.0909 4.20249 11.6094 3.27799 11.1301C2.7332 10.8479 2.18789 10.5652 1.61252 10.2674ZM11.9951 10.2747C11.9054 10.3185 11.8469 10.3456 11.7894 10.3753C10.3823 11.1051 8.97582 11.8369 7.56613 12.5608C7.43534 12.6281 7.39262 12.7027 7.39315 12.8446C7.39789 14.6394 7.39578 16.4342 7.39631 18.2291C7.39631 18.4471 7.39789 18.4471 7.59092 18.3469C9.00272 17.612 10.414 16.875 11.829 16.1463C11.9613 16.078 11.9982 16.0024 11.9977 15.8621C11.993 14.1585 11.9946 12.4544 11.9946 10.7509C11.9951 10.6017 11.9951 10.4531 11.9951 10.2747ZM11.3005 9.3045C11.2488 9.27112 11.2335 9.25964 11.2161 9.25025C9.78535 8.50802 8.35404 7.76735 6.92589 7.02094C6.82041 6.96565 6.74658 6.99016 6.65587 7.03763C5.52253 7.62704 4.3876 8.21384 3.2532 8.80168C2.94679 8.96025 2.64144 9.1209 2.3382 9.27894C2.35454 9.34832 2.40781 9.35458 2.44525 9.3744C3.85231 10.1052 5.26042 10.8333 6.66642 11.5667C6.77347 11.6225 6.85416 11.6141 6.95542 11.5609C7.92528 11.0539 8.89671 10.5516 9.86815 10.0478C10.337 9.80524 10.8058 9.56165 11.3005 9.3045ZM11.5763 3.4485C12.6079 3.43755 13.5619 3.35514 14.4922 3.09434C14.9421 2.96811 15.3846 2.81841 15.75 2.51432C15.942 2.35471 15.9404 2.27386 15.75 2.11217C15.4605 1.86545 15.1119 1.72879 14.7554 1.61195C13.9506 1.34802 13.1179 1.23692 12.2756 1.1978C11.0131 1.13938 9.76584 1.23327 8.55444 1.61665C8.17842 1.73557 7.814 1.88423 7.51761 2.15807C7.40159 2.26552 7.40159 2.36097 7.51708 2.46894C7.73173 2.66923 7.98856 2.79703 8.25911 2.90187C9.34815 3.32384 10.4905 3.42347 11.5763 3.4485Z'
			fill={fill}
		/>
	</svg>
)