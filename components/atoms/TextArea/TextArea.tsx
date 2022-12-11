import { FC, ReactElement, TextareaHTMLAttributes } from 'react'

interface InputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string
  placeholderColor?: string

  labelInput?: ReactElement
}

export const TextArea: FC<InputProps> = ({
  className = '',
  placeholderColor = 'placeholder-neutral-400',

  labelInput,

  ...attributes
}) => (
  <>
    <div
      className={`text-sm flex items-center px-2 py-2.5 rounded-xl ${className}`}
    >
      <textarea
        className={`ml-[0.375rem] ${placeholderColor} bg-transparent flex-auto caret-primary-600 h-28 focus:outline-none`}
        {...attributes}
      ></textarea>
    </div>
    {labelInput && labelInput}
  </>
)
