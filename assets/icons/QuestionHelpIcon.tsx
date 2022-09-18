import { FC } from 'react'
import { IconProps } from '../../interfaces'

export const QuestionHelpIcon: FC<IconProps> = ({
  size,
  fill = 'none',
  stroke = 'white',
}) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 16 16'
    fill={fill}
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M6.06001 6.00016C6.21675 5.55461 6.52611 5.1789 6.93331 4.93958C7.34052 4.70027 7.81927 4.61279 8.28479 4.69264C8.75032 4.77249 9.17255 5.01451 9.47673 5.37585C9.7809 5.73718 9.94738 6.19451 9.94668 6.66683C9.94668 8.00016 7.94668 8.66683 7.94668 8.66683M8.00001 11.3335H8.00668M14.6667 8.00016C14.6667 11.6821 11.6819 14.6668 8.00001 14.6668C4.31811 14.6668 1.33334 11.6821 1.33334 8.00016C1.33334 4.31826 4.31811 1.3335 8.00001 1.3335C11.6819 1.3335 14.6667 4.31826 14.6667 8.00016Z'
      stroke={stroke}
      strokeWidth='1.33333'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
