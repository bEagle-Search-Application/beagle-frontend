import { FC } from 'react'
import { Input } from './components'
import { IconProps } from './interfaces'

export const AlertCircleIcon: FC<IconProps> = ({
	size,
	fill = 'none',
	stroke = 'white',
}) => (
	<svg
		width={size}
		height={size}
		fill={fill}
		viewBox='0 0 24 24'
		xmlns='http://www.w3.org/2000/svg'
	>
		<path
			d='M12 8V12M12 16H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z'
			stroke={stroke}
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
)

function App() {
	return (
		<div className='App text-center bg-sky-400'>
			<h1 className='text-3xl font-bold underline'>Hello world!</h1>
			<Input
				placeholder='Escribe tu email aquí'
				leftIcon={<AlertCircleIcon size={24} />}
				rightIcon={<AlertCircleIcon size={24} />}
				className='text-neutral-600'
			/>
		</div>
	)
}

export default App
