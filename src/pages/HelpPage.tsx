import { DownArrowIcon, LeftIcon, SearchIcon } from '../assets'
import { Button, Input } from '../components'
import { MainLayout } from '../layouts'

export const HelpPage = () => (
	<MainLayout>
		<div>
			<div>
				<Button
					size='small'
					content='Volver'
					leftIcon={<LeftIcon size={16} stroke='#4B5563' />}
				/>
			</div>
			<div>
				<h2 className='text-neutral-900 text-4xl font-bold'>Centro de ayuda</h2>
				<div className='mt-[10px]'>
					<span className='text-neutral-400 text-sm'>
						Aquí puedes dejarnos tu duda o problema y nos encargaremos de
						solucionarlo tan pronto como sea posible.
					</span>
				</div>
			</div>
			<form className='flex flex-col gap-4'>
				<div>
					<span className='text-neutral-600 text-sm font-bold'>
						Nombre de usuario
					</span>
					<Input className='bg-neutral-100' placeholder='pepeargento' />
				</div>
				<div>
					<span className='text-neutral-600 text-sm font-bold'>Email</span>
					<Input
						className='bg-neutral-100'
						placeholder='pepeargento@gmail.com'
					/>
				</div>
				<div>
					<span className='text-neutral-600 text-sm font-bold'>Motivo</span>
					<Input
						className='mt-4 border-[1px] border-neutral-300 border-solid'
						leftIcon={<SearchIcon size={16} stroke='#4B5563' />}
						rightIcon={<DownArrowIcon size={12} stroke='#4B5563' />}
					/>
				</div>
			</form>
		</div>
	</MainLayout>
)
