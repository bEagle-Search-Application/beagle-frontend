import { FC } from 'react'

interface PopUp {
  title: string
  content: string
}

export const PopUp: FC<PopUp> = ({ title, content }) => {
  return (
    <div className='max-w-xs flex'>
      <div className='flex-1 overflow-hidden inline-block'>
        <div className='relative top-7 h-[72px] bg-white rotate rotate-45 origin-bottom-right self-center  shadow-[0px_5px_10px_-2px_rgba(0,0,0,0.15)]'></div>
      </div>
      <div className='flex-[6] p-6 flex flex-col gap-2 bg-white shadow-[2px_15px_20px_2px_rgba(0,0,0,0.15)]'>
        <h6 className='text-neutral-600 text-[20px] leading-6 font-bold'>
          {title}
        </h6>
        <span className='text-neutral-400'>{content}</span>
      </div>
    </div>
  )
}
