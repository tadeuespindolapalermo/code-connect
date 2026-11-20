import { Logo } from '@/components/atoms'

type AuthBannerProps = {
  src: string
  alt: string
}

export function AuthBanner({ src, alt }: AuthBannerProps) {
  return (
    <figure className="relative h-full overflow-hidden">
      <img src={src} alt={alt} className="h-full w-full object-cover" />
      <Logo className="absolute bottom-8 left-1/2 -translate-x-1/2" />
    </figure>
  )
}
