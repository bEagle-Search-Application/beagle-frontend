import { Card } from '../../molecules'

export const GridCard = () => (
  <div className='flex flex-wrap gap-8 justify-between xl:justify-start desktop:justify-between desktop:gap-x-3 desktop:gap-y-8'>
    {/* TODO: Dinamizar el agrupamiento y usar algún "map" para mostrar las cards */}
    <Card title='Cartera de cuero marrón rojizo con mucho valor dentro.' />
    <Card title='Cartera de cuero marrón rojizo con mucho valor dentro.' />
    <Card title='Cartera de cuero marrón rojizo con mucho valor dentro.' />
    <Card title='Cartera de cuero marrón rojizo con mucho valor dentro.' />
    <Card title='Cartera de cuero marrón rojizo con mucho valor dentro.' />
    <Card title='Cartera de cuero marrón rojizo con mucho valor dentro.' />
  </div>
)
