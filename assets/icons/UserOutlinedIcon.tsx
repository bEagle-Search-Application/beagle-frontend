import { FC } from 'react'
import { IconProps } from '../../interfaces'

export const UserOutlinedIcon: FC<IconProps> = ({
  size,
  fill = 'none',
  stroke = 'white',
}) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 14 14'
    fill={fill}
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M6.99998 9C4.8866 9 3.00718 10.0204 1.81064 11.604C1.55312 11.9448 1.42436 12.1152 1.42857 12.3455C1.43182 12.5235 1.54356 12.7479 1.68356 12.8578C1.86477 13 2.11589 13 2.61814 13H11.3818C11.8841 13 12.1352 13 12.3164 12.8578C12.4564 12.7479 12.5681 12.5235 12.5714 12.3455C12.5756 12.1152 12.4468 11.9448 12.1893 11.604C10.9928 10.0204 9.11337 9 6.99998 9Z'
      stroke={stroke}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M6.99998 7C8.65684 7 9.99998 5.65685 9.99998 4C9.99998 2.34315 8.65684 1 6.99998 1C5.34313 1 3.99998 2.34315 3.99998 4C3.99998 5.65685 5.34313 7 6.99998 7Z'
      stroke={stroke}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
