import { LeftIcon, DownArrowIcon } from '../../assets'
import { Button, Input, wrapperPrivateRoute, TextArea } from '../../components'
import { MainLayout } from '../../layouts'

const SettingsPage = () => (
  <MainLayout isSidebarMain={false}>
    <div className='ml-7 mt-10 mb-10'>
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
              <span className='text-neutral-600'> Editar perfil</span>
            </div>
          </div>
          {/* Upload Photo */}
          <div className='flex items-center gap-10'>
            <div className='relative'>
              <img
                className='w-[120px] h-[120px] rounded-full object-cover'
                src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
                alt='Persona que lo encontró'
              />
              <div className='absolute w-7 h-7 rounded-full bg-red-500 bottom-1 right-2 drop-shadow-xl shadow-black'></div>
            </div>
            <Button
              className='text-white bg-primary-500 hover:bg-primary-700 active:bg-primary-900'
              size='medium'
              content='Subir una foto'
            />
            <Button
              className='text-red-500 active:bg-primary-900 -ml-5 hover:text-red-700'
              size='medium'
              content='Eliminar'
            />
          </div>
          <form>
            <h3 className='uppercase text-xl mb-3 text-neutral-600'>
              Información basica
            </h3>
            <div className='flex flex-col gap-4'>
              <div>
                <span className='text-neutral-600 text-sm font-bold'>
                  Nombre
                </span>
                <Input
                  className='bg-neutral-100 w-full'
                  placeholder='Escribe tu Nombre'
                />
              </div>
              <div>
                <span className='text-neutral-600 text-sm font-bold'>
                  Apellido
                </span>
                <Input
                  className='bg-neutral-100'
                  placeholder='Escribe tu Apellido'
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
              <div>
                <span className='text-neutral-600 text-sm font-bold uppercase'>
                  Bio
                </span>
                <TextArea
                  className='bg-neutral-100'
                  placeholder='Escribe una descripción que te ayude a ganar la confianza de los demás.'
                />
              </div>
              <div>
                <span className='text-neutral-600 text-sm font-bold uppercase'>
                  Reseñas
                </span>
                <div className='flex items-center gap-4'>
                  <span className='text-neutral-800 text-sm font-bold'>
                    Mostrar reseñas en perfil
                  </span>
                  <label className='inline-flex relative items-center mr-5 cursor-pointer'>
                    <input
                      type='checkbox'
                      value=''
                      className='sr-only peer'
                      checked
                    />
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-500"></div>
                  </label>
                </div>
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
                content='Guardar Cambios'
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </MainLayout>
)

export default wrapperPrivateRoute(SettingsPage)
