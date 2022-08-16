import { Badge } from '../../atoms'

export const SingleCard = () => (
	<div className='max-w-[363px] relative'>
		{/* TODO: Volver responsive */}
		<div className='bg-gradient-to-b from-transparent via-transparent to-black rounded-xl'>
			<div className='relative -z-10'>
				{/* TODO: Arreglar el alto de la img */}
				<div className='absolute top-[26px] left-[26px]'>
					<Badge
						className='text-white bg-secondary-600'
						size='small-overline'
						content='BUSCADO'
					/>
				</div>
				<img
					className='max-h-[414px] h-[414px] object-cover rounded-xl'
					src='https://images.unsplash.com/photo-1605733513597-a8f8341084e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=929&q=80'
					alt='Imagen del objeto perdido'
				/>
			</div>
			<div className='text-white p-[26px] absolute -translate-y-full'>
				<div>
					<h3 className='text-[32px] leading-9 font-bold'>Bolso beige</h3>
					<span className='text-[18px] leading-7'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit
					</span>
				</div>
			</div>
		</div>
	</div>
)
