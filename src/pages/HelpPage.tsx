import { DownArrowIcon, ImageIcon, LeftIcon, SearchIcon } from '../assets'
import { Button, Input } from '../components'
import { MainLayout } from '../layouts'

export const HelpPage = () => (
	<MainLayout>
		<div className='ml-[6px] mt-[30px] mb-6'>
			<div className='max-w-[678px]'>
				<div className='flex flex-col gap-[29px]'>
					<div>
						<Button
							size='small'
							content='Volver'
							leftIcon={<LeftIcon size={16} stroke='#4B5563' />}
						/>
					</div>
					<div className='p-[10px]'>
						<h2 className='text-neutral-900 text-4xl font-bold'>
							Centro de ayuda
						</h2>
						<div className='mt-[6px]'>
							<span className='text-neutral-400 text-sm'>
								Aquí puedes dejarnos tu duda o problema y nos encargaremos de
								solucionarlo tan pronto como sea posible.
							</span>
						</div>
					</div>
					<form>
						<div className='px-4 flex flex-col gap-4'>
							<div>
								<span className='text-neutral-600 text-sm font-bold'>
									Nombre de usuario
								</span>
								<Input className='bg-neutral-100' placeholder='pepeargento' />
							</div>
							<div>
								<span className='text-neutral-600 text-sm font-bold'>
									Email
								</span>
								<Input
									className='bg-neutral-100'
									placeholder='pepeargento@gmail.com'
								/>
							</div>
							<div>
								<span className='text-neutral-600 text-sm font-bold'>
									Motivo
								</span>
								<Input
									className='mt-4 border-[1px] border-neutral-300 border-solid'
									leftIcon={<SearchIcon size={16} stroke='#4B5563' />}
									rightIcon={<DownArrowIcon size={12} stroke='#4B5563' />}
								/>
							</div>
							<div className='flex flex-col gap-4'>
								<div className='text-sm font-bold flex justify-between'>
									<span className='text-neutral-600'>
										Describe tu inquietud
									</span>
									<span className='text-neutral-400'>0/ 1000</span>
								</div>
								{/* TODO: Color del texto al escribir */}
								<textarea
									className='bg-neutral-100 resize-none outline-none p-4 rounded-xl h-52 overflow-hidden placeholder:text-xs placeholder:text-center placeholder:leading-[176px]'
									rows={4}
									placeholder='Hasta 1000'
								/>
								<div className='w-full h-52 rounded-xl cursor-pointer border-[2px] border-neutral-400 border-dashed'>
									<div className='h-full flex flex-col justify-center items-center gap-[13px]'>
										<ImageIcon size={24} stroke='#6B7280' />
										<p className='text-xs text-center text-neutral-400'>
											Arrastra aquí
											<br />o
										</p>
										{/* TODO: Color active y hover */}
										{/* TODO: Agregar input file y vincularlo con useRef */}
										<Button
											className='bg-neutral-500 hover:bg-neutral-700 active:bg-neutral-900 text-white'
											size='small'
											content='Selecciona desde tu dispositivo'
										/>
									</div>
								</div>
							</div>
						</div>

						<div className='mt-[40px] flex justify-between'>
							<div>
								{/* TODO: Preguntar el color del hover y active */}
								<Button
									size='small'
									content='Volver'
									leftIcon={<LeftIcon size={16} stroke='#4B5563' />}
								/>
							</div>
							<Button
								className='bg-primary-500 hover:bg-primary-700 active:bg-primary-900 text-white'
								size='medium'
								content='Enviar'
							/>
						</div>
					</form>
				</div>
			</div>
		</div>
	</MainLayout>
)
