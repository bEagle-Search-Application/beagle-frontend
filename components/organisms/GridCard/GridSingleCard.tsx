import { SingleCard } from '../../molecules'

export const GridSingleCard = () => (
	<div className='grid gap-4 lg:grid-cols-2 desktop:grid-cols-3 ultrawide:grid-cols-4'>
		{/* TODO: Dinamizar el agrupamiento y usar algún "map" para mostrar las cards */}
		<SingleCard
			title='Bolso Beige'
			description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
		/>
		<SingleCard
			title='Bolso Beige'
			description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
		/>
		<SingleCard
			title='Bolso Beige'
			description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
		/>
		<SingleCard
			title='Bolso Beige'
			description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
		/>
		<SingleCard
			title='Bolso Beige'
			description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
		/>
		<SingleCard
			title='Bolso Beige'
			description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
		/>
		<SingleCard
			title='Bolso Beige'
			description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
		/>
		<SingleCard
			title='Bolso Beige'
			description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
		/>
		<SingleCard
			title='Bolso Beige'
			description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
		/>
	</div>
)
