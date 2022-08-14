import { Card } from '../../molecules'

export const GridCard = () => (
	<div className='grid grid-cols-3 gap-5'>
		{/* TODO: Dinamizar el agrupamiento y usar algún "map" para mostrar las cards */}
		<Card title='Cartera de cuero marrón rojizo con mucho valor dentro' />
		<Card title='Cartera de cuero marrón rojizo con mucho valor dentro' />
		<Card title='Cartera de cuero marrón rojizo con mucho valor dentro' />
	</div>
)
