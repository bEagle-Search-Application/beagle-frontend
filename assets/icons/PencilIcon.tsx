import { FC } from 'react'
import { IconProps } from '../../interfaces'

export const PencilIcon: FC<IconProps> = ({
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
      d='M10.9994 6.66671L8.3327 4.00004M0.666016 14.3334L2.92226 14.0827C3.19792 14.0521 3.33575 14.0367 3.46458 13.995C3.57888 13.958 3.68765 13.9058 3.78794 13.8396C3.90099 13.7651 3.99905 13.667 4.19517 13.4709L12.9994 4.66671C13.7357 3.93033 13.7357 2.73642 12.9994 2.00004C12.263 1.26366 11.0691 1.26366 10.3327 2.00004L1.5285 10.8042C1.33238 11.0003 1.23432 11.0984 1.15977 11.2114C1.09364 11.3117 1.04136 11.4205 1.00436 11.5348C0.962653 11.6636 0.947338 11.8015 0.916709 12.0771L0.666016 14.3334Z'
      stroke={stroke}
      strokeWidth='1.33333'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
