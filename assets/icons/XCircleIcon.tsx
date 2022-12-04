import { FC } from 'react'
import { IconProps } from '../../interfaces'

export const XCircleIcon: FC<IconProps> = ({ size, fill = 'none', stroke }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      fill={fill}
      viewBox='0 0 24 21'
      stroke={stroke}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
      />
    </svg>
  )
}
