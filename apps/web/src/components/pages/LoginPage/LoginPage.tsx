import { useState } from 'react'
import { AuthBanner, LoginForm } from '@/components/organisms'
import { AuthTemplate } from '@/components/templates'

const LOGIN_UNAVAILABLE = 'O login ainda não está disponível. Tente novamente em breve.'
const SOCIAL_UNAVAILABLE: Record<string, string> = {
  github: 'O login com Github ainda não está disponível.',
  gmail: 'O login com Gmail ainda não está disponível.',
}

export function LoginPage() {
  const [statusMessage, setStatusMessage] = useState('')

  return (
    <AuthTemplate
      banner={
        <AuthBanner
          src="/banner-login.png"
          alt="Mulher sorrindo enquanto programa em um ambiente com telas iluminadas em verde"
        />
      }
    >
      <LoginForm
        statusMessage={statusMessage}
        onSubmit={() => setStatusMessage(LOGIN_UNAVAILABLE)}
        onSocialLogin={(provider) =>
          setStatusMessage(SOCIAL_UNAVAILABLE[provider] ?? LOGIN_UNAVAILABLE)
        }
      />
    </AuthTemplate>
  )
}
