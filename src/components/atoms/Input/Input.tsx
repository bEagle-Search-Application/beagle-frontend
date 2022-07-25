import { FC, InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	className?: string
}

export const Input: FC<InputProps> = ({ className, ...attributes }) => (
	<input type='text' className={className} {...attributes} />
)
