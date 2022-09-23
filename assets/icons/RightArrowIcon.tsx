import { FC } from 'react'
import { IconProps } from '../../interfaces'

export const RightArrowIcon: FC<IconProps> = ({
  size,
  fill = 'none',
  stroke = 'white',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 6 10'
      fill={fill}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M1 9L5 5L1 1'
        stroke={stroke}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
