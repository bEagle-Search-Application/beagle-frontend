import { Card } from '../../molecules'

export const GridCard = () => (
	<div className='grid gap-4 lg:grid-cols-2 desktop:grid-cols-3 ultrawide:grid-cols-4'>
		{/* TODO: Dinamizar el agrupamiento y usar algún "map" para mostrar las cards */}
		<Card title='Cartera de cuero marrón rojizo con mucho valor dentro' />
		<Card title='Cartera de cuero marrón rojizo con mucho valor dentro' />
		<Card title='Cartera de cuero marrón rojizo con mucho valor dentro' />
		<Card title='Cartera de cuero marrón rojizo con mucho valor dentro' />
		<Card title='Cartera de cuero marrón rojizo con mucho valor dentro' />
		<Card title='Cartera de cuero marrón rojizo con mucho valor dentro' />
	</div>
)
