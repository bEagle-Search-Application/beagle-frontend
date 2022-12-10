import { LeftIcon, DownArrowIcon } from '../../assets'
import { Button, Input, wrapperPrivateRoute } from '../../components'
import { MainLayout } from '../../layouts'

const Settings = () => (
  <MainLayout isSidebarMain={false}>
    <div className='ml-7 mt-10'>
      <div className='max-w-xl'>
        <div className='flex flex-col gap-10'>
          <div>
            <Button
              size='small'
              content='Volver'
              leftIcon={<LeftIcon size={16} stroke='#4B5563' />}
            />
          </div>
          <div className=''>
            <h2 className='text-neutral-900 text-4xl font-bold'>
              Configuraciones
            </h2>
            <div className='mt-2 text-sm'>
              <span className='text-neutral-400'>Configuraciones /</span>
              <span className='text-neutral-600'> General</span>
            </div>
          </div>
          <form>
            <div className='flex flex-col gap-4'>
              <div>
                <span className='text-neutral-600 text-sm font-bold'>
                  Nombre de usuario
                </span>
                <Input
                  className='bg-neutral-100 w-full'
                  placeholder='pepeargento'
                />
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
                  Número de teléfono
                </span>
                <Input
                  className='border-[1px] border-neutral-300 border-solid'
                  leftIcon={
                    <div className='flex items-center gap-1'>
                      {/* TODO: Agregar las banderas dependiendo del país */}
                      🇲🇽
                      <DownArrowIcon size={12} stroke='#4B5563' />
                    </div>
                  }
                />
              </div>
            </div>
            <div className='mt-10 flex justify-between items-center'>
              <div className='text-neutral-600 hover:text-neutral-700 active:text-neutral-800'>
                <Button
                  size='small'
                  content='Volver'
                  leftIcon={<LeftIcon size={16} stroke='currentColor' />}
                />
              </div>
              <Button
                className='text-white bg-primary-500 hover:bg-primary-700 active:bg-primary-900'
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

export default wrapperPrivateRoute(Settings)
