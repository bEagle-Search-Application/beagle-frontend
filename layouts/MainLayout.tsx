import { FC, ReactNode } from 'react'
import { Navbar, Sidebar } from '../components'

interface Props {
	children: ReactNode
}

export const MainLayout: FC<Props> = ({ children }) => (
	<div className='mx-auto'>
		<Navbar />
		<main className='flex'>
			<div className='max-w-[280px]'>
				<Sidebar />
			</div>
			{/* TODO: cambiar el text -left */}
			{/* TODO: hacer responsive */}
			<div className='w-full px-4 border-l border-solid border-neutral-300'>
				{children}
			</div>
		</main>
	</div>
)