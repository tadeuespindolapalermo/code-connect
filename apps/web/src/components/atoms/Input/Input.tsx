import type { InputHTMLAttributes } from 'react'

export type InputProps = InputHTMLAttributes<HTMLInputElement>

export function Input({ className = '', type = 'text', ...props }: InputProps) {
  return (
    <input
      type={type}
      className={`w-full rounded bg-input-bg px-4 py-2.5 text-sm text-input-text outline-none placeholder:text-input-text/70 focus-visible:ring-2 focus-visible:ring-accent-green ${className}`}
      {...props}
    />
  )
}
