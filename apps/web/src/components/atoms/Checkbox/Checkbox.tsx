import type { InputHTMLAttributes } from 'react'

export type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  label: string
}

export function Checkbox({ label, className = '', ...props }: CheckboxProps) {
  return (
    <label
      className={`inline-flex cursor-pointer items-center gap-2 text-sm text-text-secondary ${className}`}
    >
      <span className="relative inline-flex">
        <input
          type="checkbox"
          className="peer size-5 cursor-pointer appearance-none rounded border border-accent-green outline-none focus-visible:ring-2 focus-visible:ring-accent-green"
          {...props}
        />
        <svg
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 m-auto hidden size-3.5 text-accent-green peer-checked:block"
        >
          <path d="m3 8.5 3.5 3.5L13 4.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      {label}
    </label>
  )
}
