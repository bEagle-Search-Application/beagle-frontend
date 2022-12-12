import { MainLayout } from '../../layouts'
import { Button, Input, TextArea } from '../../components'
import { DownArrowIcon, LeftIcon, PencilIcon } from '../../assets'

const ChangePasswordPage = () => {
  return (
    <MainLayout isSidebarMain={false}>
      <div className='ml-8 mt-10 mb-10'>
        <div className='max-w-xl'>
          <div className='flex flex-col gap-10'>
            <div>
              <Button
                size='small'
                content='Volver'
                leftIcon={<LeftIcon size={16} stroke='#4B5563' />}
              />
            </div>
            {/* TITULO CONFIGURACIONES */}
            <div className='flex flex-col gap-2'>
              <h2 className='text-neutral-900 text-4xl font-bold'>
                Configuraciones
              </h2>
              <div className='flex gap-1 text-sm'>
                <span className='text-neutral-400'>Configuraciones</span>
                <span className='text-neutral-400'> / </span>
                <span className='text-neutral-600'>Contraseña</span>
              </div>
            </div>
            {/* FORM */}
            <form className='flex flex-col gap-10'>
              {/* INFORMACIÓN BÁSICA */}
              <div className='flex flex-col gap-4'>
                <h3 className='uppercase text-[1rem] leading-[1.25rem] font-bold tracking-[1px] text-neutral-600'>
                  Información basica
                </h3>
                <div className='flex flex-col gap-5'>
                  <div className='flex flex-col gap-1'>
                    <span className='text-neutral-600 text-sm font-bold'>
                      Antigua contraseña
                    </span>
                    <Input
                      className='bg-neutral-100 w-full'
                      placeholder='Escribe tu antigua contraseña aquí'
                    />
                  </div>
                  <div className='flex flex-col gap-1'>
                    <span className='text-neutral-600 text-sm font-bold'>
                      Nueva contraseña
                    </span>
                    <Input
                      className='bg-neutral-100'
                      placeholder='Escribe tu nueva contraseña aquí'
                    />
                  </div>
                  <div className='flex flex-col gap-1'>
                    <span className='text-neutral-600 text-sm font-bold'>
                      Repetir nueva contraseña
                    </span>
                    <Input
                      className='bg-neutral-100'
                      placeholder='Escribe otra vez tu nueva contraseña aquí'
                    />
                  </div>
                </div>
              </div>
              {/* BOTONES VOLVER y GUARDAR CAMBIOS */}
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
                  content='Guardar Cambios'
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default ChangePasswordPage
