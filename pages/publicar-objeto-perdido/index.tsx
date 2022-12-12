import { MainLayout } from '../../layouts'
import { Badge, Button, Input, wrapperPrivateRoute } from '../../components'
import {
  AddCircleIcon,
  CancelIcon,
  DogFaceIcon,
  DownArrowIcon,
  EllipseIcon,
  FrowningFaceIcon,
  ImageIcon,
  LeftIcon,
  MapIcon,
  PhoneIcon,
  PolygonsIcon,
  SearchIcon,
  SmileyFaceIcon,
  StarIcon,
  UserIcon,
} from '../../assets'

const PostLostObject = () => (
  <MainLayout>
    <div className='my-10'>
      <div className='max-w-3xl'>
        <div className='flex flex-col gap-10'>
          <div>
            <Button
              size='small'
              content='Volver'
              leftIcon={<LeftIcon size={16} stroke='#4B5563' />}
            />
          </div>
          {/* TITULO - PUBLICAR UN ANUNCIO */}
          <h4 className='text-[1.75rem] text-neutral-900 leading-8 font-semibold'>
            Publicar un anuncio
          </h4>

          {/* FORM */}
          <form className='px-4'>
            {/* PASO 1 */}
            <div className='flex flex-col gap-4'>
              <span className='text-[1rem] text-neutral-600 leading-4 tracking-[1px] font-bold'>
                PASO 1: CAMPO OBLIGATORIO
              </span>
              {/* TITULO */}
              <div className='flex flex-col gap-1'>
                <span className='text-neutral-600 text-sm font-bold'>
                  Título
                </span>
                <Input
                  className='bg-neutral-100 placeholder:text-neutral-400 w-full'
                  placeholder='Perro labrador negro...'
                />
              </div>
              {/* QUÉ PASÓ */}
              <div className='flex flex-col gap-1'>
                <span className='text-neutral-600 text-sm font-bold'>
                  ¿Qué pasó?
                </span>
                <div className='flex gap-4'>
                  <div>
                    <Button
                      size='small'
                      className='text-primary-500 border-[1px] border-solid border-primary-500'
                      content='Encontraste'
                      leftIcon={<SmileyFaceIcon size={20} stroke='#9B8EE7' />}
                    />
                  </div>
                  <div>
                    <Button
                      size='small'
                      className='text-primary-500 border-[1px] border-solid border-primary-500'
                      content='Perdiste'
                      leftIcon={<FrowningFaceIcon size={20} stroke='#9B8EE7' />}
                    />
                  </div>
                </div>
              </div>
              {/* QUÉ PERDISTE */}
              <div className='flex flex-col gap-1'>
                <span className='text-neutral-600 text-sm font-bold'>
                  {/* TODO: Corregir o dinamizar perdiste/encontraste */}
                  ¿Qué perdiste?
                </span>
                <div className='flex gap-4'>
                  <div>
                    <Button
                      size='small'
                      className='text-primary-500 border-[1px] border-solid border-primary-500'
                      content='Mascota'
                      leftIcon={<DogFaceIcon size={20} fill='#9B8EE7' />}
                    />
                  </div>
                  <div>
                    <Button
                      size='small'
                      className='text-primary-500 border-[1px] border-solid border-primary-500'
                      content='Objeto'
                      leftIcon={<PolygonsIcon size={20} fill='#9B8EE7' />}
                    />
                  </div>
                  <div>
                    <Button
                      size='small'
                      className='text-primary-500 border-[1px] border-solid border-primary-500'
                      content='Persona'
                      leftIcon={<UserIcon size={20} stroke='#9B8EE7' />}
                    />
                  </div>
                </div>
              </div>
              {/* DONDE LO VISTE POR ÚLTIMA VEZ */}
              <div className='flex flex-col gap-1'>
                <span className='text-neutral-600 text-sm font-bold'>
                  ¿Dónde lo viste por última vez?
                </span>
                <Input
                  className='bg-neutral-100 w-full'
                  placeholder='España, Madrid...'
                />
                {/* TODO: Integración con google maps y mostrar la línea de km */}
              </div>
              {/* CONTACTO */}
              <div className='flex flex-col gap-1'>
                <span className='text-neutral-600 text-sm font-bold'>
                  Contacto
                </span>
                <div className='flex items-stretch gap-4'>
                  <div className='ml-2 flex-1'>
                    <div className='bg-neutral-100 p-[1.375rem] rounded-lg flex items-center gap-[1.375rem]'>
                      <img
                        className='w-[4.125rem] h-[4.125rem] rounded-full object-cover'
                        src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
                        alt='Foto de perfil de USUARIO'
                      />
                      <div className='flex flex-col gap-4 text-sm max-w-[14.25rem] text-neutral-600'>
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
                                size={16}
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
                  <div className='self-center'>
                    <span className='text-neutral-600 text-sm font-bold'>
                      o
                    </span>
                  </div>
                  <div className='flex-1 flex flex-col items-center justify-center gap-3 rounded-xl border-[2px] border-neutral-400 border-dashed'>
                    <span className='text-neutral-500 text-sm font-bold'>
                      Crear nueva tarjeta
                    </span>
                    <AddCircleIcon size={24} stroke='#6B7280' />
                  </div>
                </div>
              </div>
            </div>
            {/* PASO 2 */}
            <div className='mt-10'>
              <span className='text-[1rem] text-neutral-600 leading-4 tracking-[1px] font-bold'>
                PASO 2: CAMPO OPCIONAL
              </span>
              <div className='p-4 mt-2 flex flex-col gap-4'>
                <div className='flex flex-col gap-1'>
                  <span className='text-neutral-600 text-sm font-bold'>
                    Fotografías
                  </span>
                  <div className='mx-2 w-full h-48 rounded-xl cursor-pointer border-[2px] border-neutral-400 border-dashed'>
                    <div className='h-full flex flex-col justify-center items-center gap-[0.8125rem]'>
                      <ImageIcon size={24} stroke='#6B7280' />
                      <p className='text-xs text-center text-neutral-400'>
                        Arrastra aquí
                        <br />o
                      </p>
                      {/* TODO: Agregar input file y vincularlo con useRef */}
                      <Button
                        className='bg-neutral-600 hover:bg-neutral-700 active:bg-neutral-800 text-white'
                        size='small'
                        content='Selecciona desde tu dispositivo'
                      />
                    </div>
                  </div>
                </div>
                <div className='flex flex-col gap-1'>
                  <span className='text-neutral-600 text-sm font-bold'>
                    Descripción
                  </span>
                  <Input
                    className='bg-neutral-100'
                    placeholder='El perro lleva un collar gris...'
                  />
                </div>
                <div className='flex flex-col gap-1'>
                  <span className='text-neutral-600 text-sm font-bold'>
                    Recompensa
                  </span>
                  <div className='px-2 box-content max-w-[8.875rem] rounded-lg border-[1px] border-solid border-neutral-400'>
                    <div className='flex justify-center items-center'>
                      <input
                        className='mr-1 text-xs text-end placeholder:text-start'
                        placeholder='EUR'
                      />
                      <div className='flex flex-col items-center justify-center'>
                        <div className='rotate-180'>
                          <DownArrowIcon size={5} stroke='#4B5563' />
                        </div>
                        <DownArrowIcon size={5} stroke='#4B5563' />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col gap-1'>
                  <span className='text-neutral-600 text-sm font-bold'>
                    Etiquetas
                  </span>
                  <div className='max-w-sm h-10 px-2 bg-neutral-100 rounded-xl flex items-center'>
                    <div className='flex-1 flex items-center gap-3'>
                      <SearchIcon size={18} stroke='#4B5563' />
                      <Badge
                        className='bg-neutral-200 text-white'
                        content='Labrador'
                        size='small'
                      />
                    </div>
                    <CancelIcon size={12} stroke='#4B5563' />
                  </div>
                </div>
              </div>
            </div>
          </form>

          <div className='flex items-center justify-between'>
            <Button
              size='small'
              content='Volver'
              leftIcon={<LeftIcon size={16} stroke='#4B5563' />}
            />
            <Button
              className='bg-primary-500 text-white hover:bg-primary-700 active:bg-primary-900'
              size='medium'
              content='Publicar'
            />
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
)

export default wrapperPrivateRoute(PostLostObject)
