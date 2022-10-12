import { DownArrowIcon, ImageIcon, LeftIcon, SearchIcon } from '../../assets'
import { Button, Input } from '../../components'
import { MainLayout } from '../../layouts'

const HelpPage = () => (
  <MainLayout>
    <div className='ml-[0.375rem] mt-[1.875rem] mb-6'>
      <div className='max-w-[42.375rem]'>
        <div className='flex flex-col gap-[1.8125rem]'>
          <div className='text-neutral-600 hover:text-neutral-700 active:text-neutral-800'>
            <Button
              size='small'
              content='Volver'
              leftIcon={<LeftIcon size={16} stroke='currentColor' />}
            />
          </div>
          <div className='p-[0.625rem]'>
            <h2 className='text-neutral-900 text-4xl font-bold'>
              Centro de ayuda
            </h2>
            <div className='mt-[0.375rem]'>
              <span className='text-neutral-400 text-sm'>
                Aquí puedes dejarnos tu duda o problema y nos encargaremos de
                solucionarlo tan pronto como sea posible.
              </span>
            </div>
          </div>
          <form>
            <div className='px-4 flex flex-col gap-4'>
              <div>
                <span className='text-neutral-600 text-sm font-bold'>
                  Nombre de usuario
                </span>
                <Input
                  className='bg-neutral-100 max-w-sm'
                  placeholder='pepeargento'
                />
              </div>
              <div>
                <span className='text-neutral-600 text-sm font-bold'>
                  Email
                </span>
                <Input
                  className='bg-neutral-100 max-w-sm'
                  placeholder='pepeargento@gmail.com'
                />
              </div>
              <div>
                <span className='text-neutral-600 text-sm font-bold'>
                  Motivo
                </span>
                <Input
                  className='mt-4 border-[1px] border-neutral-300 border-solid'
                  leftIcon={<SearchIcon size={16} stroke='#4B5563' />}
                  rightIcon={<DownArrowIcon size={12} stroke='#4B5563' />}
                />
              </div>
              <div className='flex flex-col gap-4'>
                <div className='text-sm font-bold flex justify-between'>
                  <span className='text-neutral-600'>
                    Describe tu inquietud
                  </span>
                  <span className='text-neutral-400'>0/ 1000</span>
                </div>
                {/* TODO: Color del texto al escribir */}
                <textarea
                  className='bg-neutral-100 resize-none outline-none p-4 rounded-xl h-52 overflow-hidden placeholder:text-xs placeholder:text-center placeholder:leading-[11rem]'
                  rows={4}
                  placeholder='Hasta 1000'
                />
                <div className='w-full h-52 rounded-xl cursor-pointer border-[2px] border-neutral-400 border-dashed'>
                  <div className='h-full flex flex-col justify-center items-center gap-[0.8125rem]'>
                    <ImageIcon size={24} stroke='#6B7280' />
                    <p className='text-xs text-center text-neutral-400'>
                      Arrastra aquí
                      <br />o
                    </p>
                    {/* TODO: Agregar input file y vincularlo con useRef */}
                    <Button
                      className='text-white bg-neutral-600 hover:bg-neutral-700 active:bg-neutral-800'
                      size='small'
                      content='Selecciona desde tu dispositivo'
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className='mt-[2.5rem] flex justify-between items-center'>
              <div className='text-neutral-600 hover:text-neutral-700 active:text-neutral-800'>
                <Button
                  size='small'
                  content='Volver'
                  leftIcon={<LeftIcon size={16} stroke='currentColor' />}
                />
              </div>
              <Button
                className='bg-primary-500 hover:bg-primary-700 active:bg-primary-900 text-white'
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

export default HelpPage
