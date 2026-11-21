import { Link, type LinkProps } from 'react-router'

type TextLinkVariant = 'underline' | 'accent'

export type TextLinkProps = LinkProps & {
  variant?: TextLinkVariant
}

const variantClasses: Record<TextLinkVariant, string> = {
  underline: 'text-sm text-text-primary underline underline-offset-2 hover:text-accent-green',
  accent: 'text-lg text-accent-green hover:text-accent-green-hover',
}

export function TextLink({ variant = 'underline', className = '', ...props }: TextLinkProps) {
  return (
    <Link
      className={`inline-flex items-center gap-2 rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-green ${variantClasses[variant]} ${className}`}
      {...props}
    />
  )
}
