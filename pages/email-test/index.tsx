import { GiftIcon, LogoCustomIcon } from '../../assets'
import { Button } from '../../components'

const EmailPage = () => {
  return (
    <div className='w-screen h-screen text-white'>
      <div className='h-1/2 bg-gradient-to-r from-primary-300 to-primary-100'>
        {/* LOGO */}
        <header className='pt-[3.6rem] flex justify-center'>
          <LogoCustomIcon />
        </header>

        {/* Box content */}
        <main className='mt-[3.65rem] mx-auto p-8 max-w-[28.25rem] bg-neutral-50 rounded-2xl text-center shadow-[2px_25px_50px_-3px_rgba(0,0,0,0.2)]'>
          <div className='flex flex-col gap-8 text-black'>
            <h4 className='text-neutral-500 text-[1.75rem] leading-8 font-bold'>
              Thank you for joining bEagle!
            </h4>
            <div className='flex-1 h-[1px] border-t-[1px] border-t-neutral-300'></div>
            <h3 className='text-neutral-900 text-[2rem] leading-[2.25rem] font-bold'>
              Please, confirm your email to start publishing 👇
            </h3>
            <div className='whitespace-normal'>
              <p>
                Once you confirm your email you can publish either items,
                missing people or pets! If the button doesn&apos;t work, click
                the link below.
              </p>
              <div>
                <a
                  href='/{link}'
                  className='block mt-2 text-sm text-secondary-500 break-all'
                >
                  https://www.beagle.io/file/vdoa1M58Cy9HqQ6xk5TgSP/%F0%9F%90%B6-bEagle?node-id=1207%3A37365
                </a>
              </div>
            </div>

            <div>
              <Button
                size='medium'
                className='mx-auto text-white bg-primary-500 hover:bg-primary-700 active:bg-primary-900'
                content='Confirm email'
              />
            </div>
          </div>
        </main>

        <footer className='mt-[4.56rem] flex flex-col items-center justify-center'>
          <div className='flex gap-4'>
            <Button
              size='medium'
              className='text-neutral-600 items-center hover:text-neutral-700 active:text-neutral-800'
              content='Donate'
              rightIcon={<GiftIcon size={16} stroke='currentColor' />}
            />
            <Button
              size='medium'
              className='text-neutral-600 items-center hover:text-neutral-700 active:text-neutral-800'
              content='Terminos y condiciones'
            />
          </div>

          <div className='max-w-[24.25rem] flex'>
            <span className='text-xs text-center text-neutral-500'>
              You are receiving this email because you have registered on
              www.beagle.io. If you think this is a mistake, please report it{' '}
              <span className='underline-offset-0'>here</span>.
            </span>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default EmailPage
