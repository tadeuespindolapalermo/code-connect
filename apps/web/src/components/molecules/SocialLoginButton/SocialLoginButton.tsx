import { Button } from '@/components/atoms'

export type SocialProvider = 'github' | 'gmail'

const providers: Record<SocialProvider, { label: string; icon: string }> = {
  github: { label: 'Github', icon: '/github.png' },
  gmail: { label: 'Gmail', icon: '/gmail.png' },
}

type SocialLoginButtonProps = {
  provider: SocialProvider
  onClick?: (provider: SocialProvider) => void
}

export function SocialLoginButton({ provider, onClick }: SocialLoginButtonProps) {
  const { label, icon } = providers[provider]

  return (
    <Button variant="ghost" className="flex-col text-xs" onClick={() => onClick?.(provider)}>
      <img src={icon} alt="" className="size-8 object-contain" />
      {label}
    </Button>
  )
}
