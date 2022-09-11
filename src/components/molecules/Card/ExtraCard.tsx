// import React from 'react'

import { FC } from 'react'
import { StarIcon } from '../../../assets'
import { Badge } from '../../atoms'

interface Props {
	title: string
	description: string
	author: string
}

export const ExtraCard: FC<Props> = ({ title, description, author }) => (
	<div className='max-w-[346px] rounded-2xl bg-neutral-100 border-[1px] border-neutral-300'>
		<div className='p-8 flex flex-col justify-center items-center gap-8'>
			<div className='flex justify-center'>
				{/* TODO: Dinamizar el alt de la img */}
				<img
					src='https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
					alt='Img'
					className='max-w-[144px] h-[144px] rounded-full object-cover'
				/>
				<div className='absolute self-end'>
					{/* Dinamizar el content Buscado o Encontrado y el bg-color */}
					<Badge
						content='BUSCADO'
						size='small-overline'
						className='text-white bg-secondary-600 shadow-[2px_6px_20px_rgba(0,0,0,0.1)]'
					/>
				</div>
			</div>
			<div className='flex items-center gap-1'>
				{/* TODO: Dinamizar el rating, 5 es la puntuación máxima */}
				<StarIcon size={16} fill='#FCD34D' stroke='#4B5563' />
				<StarIcon size={16} fill='#FCD34D' stroke='#4B5563' />
				<StarIcon size={16} fill='#FCD34D' stroke='#4B5563' />
				<StarIcon size={16} fill='#FCD34D' stroke='#4B5563' />
				<StarIcon size={16} fill='#FCD34D' stroke='#4B5563' />
				<span className='text-neutral-600 text-xs font-bold'>(3.0)</span>
			</div>
			<div>
				<h6 className='text-neutral-900 text-[20px] leading-6 font-bold'>
					{title}
				</h6>
			</div>
			<div>
				<span className='text-neutral-600 text-center'>{description}</span>
			</div>
			<div className='text-xs'>
				{/* TODO: Dinamizar el "Hecho" o "Hecha" dependiendo del género */}
				<span className='text-neutral-400'>Hecha por </span>
				<span className='text-primary-500'>{author}</span>
			</div>
		</div>
	</div>
)
