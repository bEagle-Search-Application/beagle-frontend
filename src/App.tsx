import { Badge } from './components/atoms/Badge'
import { AlertCircleIcon } from './assets'

function App() {
	return (
		<div className='App text-center'>
			<h1 className='text-3xl font-bold underline'>Hello world!</h1>
			<Badge content='Badge Tag' size='small' />
			<Badge
				content='Badge Tag'
				size='medium'
				leftIcon={<AlertCircleIcon size={14} />}
				rightIcon={<AlertCircleIcon size={14} />}
			/>
			<Badge content='Badge Tag' size='large' bgColor='bg-primary-500' />
		</div>
	)
}

export default App
