import { AuthBanner, LoginForm } from '@/components/organisms'
import { AuthTemplate } from '@/components/templates'

export function LoginPage() {
  return (
    <AuthTemplate
      banner={
        <AuthBanner
          src="/banner-login.png"
          alt="Mulher sorrindo enquanto programa em um ambiente com telas iluminadas em verde"
        />
      }
    >
      <LoginForm />
    </AuthTemplate>
  )
}
