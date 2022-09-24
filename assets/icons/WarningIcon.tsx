import { FC } from 'react'
import { IconProps } from '../../interfaces'

export const WarningIcon: FC<IconProps> = ({
  size,
  fill = 'none',
  stroke = 'white',
}) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 24 21'
    fill={fill}
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M11.9993 8.00023V12.0002M11.9993 16.0002H12.0093M10.6146 2.89195L2.3897 17.0986C1.93349 17.8866 1.70539 18.2806 1.7391 18.6039C1.76851 18.886 1.91628 19.1423 2.14564 19.309C2.4086 19.5002 2.86386 19.5002 3.77438 19.5002H20.2242C21.1347 19.5002 21.5899 19.5002 21.8529 19.309C22.0823 19.1423 22.23 18.886 22.2594 18.6039C22.2931 18.2806 22.065 17.8866 21.6088 17.0986L13.3839 2.89195C12.9294 2.10679 12.7021 1.71421 12.4056 1.58235C12.1469 1.46734 11.8516 1.46734 11.593 1.58235C11.2964 1.71421 11.0692 2.10679 10.6146 2.89195Z'
      stroke={stroke}
      strokeWidth='2.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
