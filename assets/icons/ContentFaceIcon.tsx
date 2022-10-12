import { FC } from 'react'
import { IconProps } from '../../interfaces'

export const ContentFaceIcon: FC<IconProps> = ({
  size,
  fill = 'none',
  stroke = 'white',
}) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 22 22'
    fill={fill}
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M7 13C7 13 8.5 15 11 15C13.5 15 15 13 15 13M16 8.24C15.605 8.725 15.065 9 14.5 9C13.935 9 13.41 8.725 13 8.24M9 8.24C8.605 8.725 8.065 9 7.5 9C6.935 9 6.41 8.725 6 8.24M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z'
      stroke={stroke}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
