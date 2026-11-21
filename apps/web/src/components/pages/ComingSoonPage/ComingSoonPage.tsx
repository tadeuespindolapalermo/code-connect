import { AuthBanner, ComingSoonNotice } from '@/components/organisms'
import { AuthTemplate } from '@/components/templates'

type ComingSoonPageProps = {
  title: string
}

export function ComingSoonPage({ title }: ComingSoonPageProps) {
  return (
    <AuthTemplate
      banner={
        <AuthBanner
          src="/banner-login.png"
          alt="Mulher sorrindo enquanto programa em um ambiente com telas iluminadas em verde"
        />
      }
    >
      <ComingSoonNotice title={title} />
    </AuthTemplate>
  )
}
