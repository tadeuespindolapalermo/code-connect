import type { ReactNode } from 'react'

type IconName = 'arrow-right' | 'clipboard'

type IconProps = {
  name: IconName
  className?: string
}

const paths: Record<IconName, ReactNode> = {
  'arrow-right': (
    <path
      d="M4 10h12m-5-5 5 5-5 5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  clipboard: (
    <path
      fillRule="evenodd"
      d="M7 2.5A1.5 1.5 0 0 1 8.5 1h3A1.5 1.5 0 0 1 13 2.5V3h1.5A1.5 1.5 0 0 1 16 4.5v13a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 4 17.5v-13A1.5 1.5 0 0 1 5.5 3H7v-.5ZM8.5 2.5h3v1.5h-3V2.5ZM7 8.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5A.75.75 0 0 1 7 8.25Zm0 3a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Zm0 3a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Z"
      fill="currentColor"
    />
  ),
}

export function Icon({ name, className = 'size-5' }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" data-icon={name} className={className}>
      {paths[name]}
    </svg>
  )
}
