type LogoMarkProps = {
  className?: string
}

export function LogoMark({ className = '' }: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 48 52"
      fill="none"
      stroke="currentColor"
      strokeWidth="5"
      aria-hidden="true"
      className={className}
    >
      <rect x="4" y="16" width="20" height="32" rx="10" />
      <rect x="21" y="4" width="20" height="32" rx="10" />
    </svg>
  )
}

type LogoProps = {
  className?: string
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <span
      role="img"
      aria-label="Code Connect"
      className={`inline-flex items-center gap-1.5 ${className}`}
    >
      <LogoMark className="h-8 w-8 text-accent-green" />
      <span aria-hidden="true" className="flex flex-col font-mono text-xl leading-none text-white">
        <span>code</span>
        <span>connect</span>
      </span>
    </span>
  )
}
