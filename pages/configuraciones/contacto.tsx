import {
  AddCircleIcon,
  EllipseIcon,
  LeftIcon,
  MapIcon,
  PhoneIcon,
  StarIcon,
  UserIcon,
} from '../../assets'
import { Button, Input } from '../../components'
import { MainLayout } from '../../layouts'

const ContactPage = () => {
  return (
    <MainLayout isSidebarMain={false}>
      <div className='ml-7 mt-10 mb-10'>
        <div className='max-w-[45rem]'>
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
                <span className='text-neutral-600'>Contacto</span>
              </div>
            </div>
            {/* FORM */}
            <form className='flex flex-col gap-10'>
              {/* TARJETAS DE CONTACTO */}
              <div className='flex flex-col gap-10'>
                <h3 className='uppercase text-[1rem] leading-[1.25rem] font-bold tracking-[1px] text-neutral-600'>
                  Tarjetas de contacto
                </h3>
                <div className='flex items-stretch gap-4'>
                  {/* PRIMERA TARJETA */}
                  <div className='flex-1'>
                    <div className='bg-neutral-100 py-[1.375rem] px-[1.6875rem] rounded-lg flex items-center gap-[1.375rem]'>
                      <img
                        className='w-[5.125rem] h-[5.125rem] rounded-full object-cover'
                        src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
                        alt='Foto de perfil de USUARIO'
                      />
                      <div className='flex flex-col gap-4 text-xs text-neutral-600'>
                        <div className='flex items-center gap-3'>
                          <MapIcon size={16} stroke='#4B5563' />
                          <span className='text-left'>
                            {/* // TODO: Dinamizar la dirección */}
                            Via loppolo 17, Ragusa, 97100 (+5km)
                          </span>
                        </div>
                        <div className='flex items-center gap-3'>
                          <UserIcon size={16} stroke='#4B5563' />
                          <div className='flex items-center gap-2'>
                            {/* // TODO: Dinamizar el nombre y apellido */}
                            <span>Nombre Apellido</span>
                            <EllipseIcon
                              size={4}
                              fill='#4B5563'
                              stroke='#4B5563'
                            />
                            <div className='flex items-center gap-1'>
                              <StarIcon
                                size={12}
                                fill='#FCD34D'
                                stroke='#4B5563'
                              />
                              {/* // TODO: Dinamizar el rating */}
                              <span className='text-xs font-bold'>(1.0)</span>
                            </div>
                          </div>
                        </div>
                        <div className='flex items-center gap-3'>
                          <PhoneIcon size={16} stroke='#4B5563' />
                          {/* // TODO: Dinamizar la fecha */}
                          <span>+39 3457465843</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* SEGUNDA TARJETA */}
                  <div className='flex-1'>
                    <div className='bg-neutral-100 py-[1.375rem] px-[1.6875rem] rounded-lg flex items-center gap-[1.375rem]'>
                      <img
                        className='w-[5.125rem] h-[5.125rem] rounded-full object-cover'
                        src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
                        alt='Foto de perfil de USUARIO'
                      />
                      <div className='flex flex-col gap-4 text-xs text-neutral-600'>
                        <div className='flex items-center gap-3'>
                          <MapIcon size={16} stroke='#4B5563' />
                          <span className='text-left'>
                            {/* // TODO: Dinamizar la dirección */}
                            Via loppolo 17, Ragusa, 97100 (+5km)
                          </span>
                        </div>
                        <div className='flex items-center gap-3'>
                          <UserIcon size={16} stroke='#4B5563' />
                          <div className='flex items-center gap-2'>
                            {/* // TODO: Dinamizar el nombre y apellido */}
                            <span>Nombre Apellido</span>
                            <EllipseIcon
                              size={4}
                              fill='#4B5563'
                              stroke='#4B5563'
                            />
                            <div className='flex items-center gap-1'>
                              <StarIcon
                                size={12}
                                fill='#FCD34D'
                                stroke='#4B5563'
                              />
                              {/* // TODO: Dinamizar el rating */}
                              <span className='text-xs font-bold'>(1.0)</span>
                            </div>
                          </div>
                        </div>
                        <div className='flex items-center gap-3'>
                          <PhoneIcon size={16} stroke='#4B5563' />
                          {/* // TODO: Dinamizar la fecha */}
                          <span>+39 3457465843</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* TARJETA DE CONTACTO 3 */}
              <div className='flex flex-col gap-5'>
                <h3 className='uppercase text-[1rem] leading-[1.25rem] font-bold tracking-[1px] text-neutral-600'>
                  Tarjeta de contacto 3
                </h3>
                <div className='flex flex-col gap-5'>
                  <div className='flex flex-col gap-1'>
                    <span className='text-neutral-600 text-sm font-bold'>
                      Título
                    </span>
                    <Input
                      className='bg-neutral-100 w-full'
                      placeholder='Tarjeta de contacto 1'
                    />
                  </div>
                  <div className='flex flex-col gap-1'>
                    <span className='text-neutral-600 text-sm font-bold'>
                      Dirección
                    </span>
                    <Input
                      className='bg-neutral-100'
                      placeholder='Escribe tu dirección'
                    />
                  </div>
                  <Button
                    size='medium'
                    className='text-neutral-400 hover:outline hover:outline-neutral-400 hover:outline-[1px]'
                    content='Agregar una nueva tarjeta de contacto'
                    leftIcon={<AddCircleIcon size={16} stroke='currentColor' />}
                  />
                </div>
              </div>
              {/* TARJETA DE CONTACTO 3 */}
              <div className='flex flex-col gap-5'>
                <h3 className='uppercase text-[1rem] leading-[1.25rem] font-bold tracking-[1px] text-neutral-600'>
                  Tarjeta de contacto 3
                </h3>
                <div className='flex flex-col gap-5'>
                  <div className='flex flex-col gap-1'>
                    <span className='text-neutral-600 text-sm font-bold'>
                      Título
                    </span>
                    <Input
                      className='bg-neutral-100 w-full'
                      placeholder='Tarjeta de contacto 1'
                    />
                  </div>
                  <div className='flex flex-col gap-1'>
                    <span className='text-neutral-600 text-sm font-bold'>
                      Dirección
                    </span>
                    <Input
                      className='bg-neutral-100'
                      placeholder='Escribe tu dirección'
                    />
                  </div>
                  <Button
                    size='medium'
                    className='text-neutral-400 hover:outline hover:outline-neutral-400 hover:outline-[1px]'
                    content='Agregar una nueva tarjeta de contacto'
                    leftIcon={<AddCircleIcon size={16} stroke='currentColor' />}
                  />
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

export default ContactPage
