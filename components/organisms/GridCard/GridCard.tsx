import { Card } from '../../molecules'

export const GridCard = () => (
  // <div className='grid gap-4 grid-flow-col auto-cols-[minmax(22.6875rem,_28.125rem)] grid-rows-2'>
  <div className='grid gap-4 grid-cols-[repeat(auto-fit,minmax(22.6875rem,_1fr))]'>
    {/* TODO: Dinamizar el agrupamiento y usar algún "map" para mostrar las cards */}
    <Card title='Cartera de cuero marrón rojizo con mucho valor dentro' />
    <Card title='Cartera de cuero marrón rojizo con mucho valor dentro' />
    <Card title='Cartera de cuero marrón rojizo con mucho valor dentro' />
    <Card title='Cartera de cuero marrón rojizo con mucho valor dentro' />
    <Card title='Cartera de cuero marrón rojizo con mucho valor dentro' />
    <Card title='Cartera de cuero marrón rojizo con mucho valor dentro' />
  </div>
)
