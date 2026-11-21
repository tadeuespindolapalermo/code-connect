import { useState, type FormEvent } from 'react'
import { Button, Divider, Icon, TextLink } from '@/components/atoms'
import {
  FormField,
  RememberMeRow,
  SocialLoginButton,
  type SocialProvider,
} from '@/components/molecules'

export type LoginCredentials = {
  username: string
  password: string
  rememberMe: boolean
}

type LoginFormProps = {
  onSubmit?: (credentials: LoginCredentials) => void
  onSocialLogin?: (provider: SocialProvider) => void
  statusMessage?: string
}

export function LoginForm({ onSubmit, onSocialLogin, statusMessage }: LoginFormProps) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [error, setError] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const trimmedUsername = username.trim()
    if (!trimmedUsername) {
      setError('Informe seu email ou usuário.')
      return
    }
    setError('')
    onSubmit?.({ username: trimmedUsername, password, rememberMe })
  }

  return (
    <section aria-labelledby="login-title" className="flex flex-col gap-8">
      <header className="flex flex-col gap-6">
        <h1 id="login-title" className="text-3xl font-semibold text-text-primary">
          Login
        </h1>
        <p className="text-xl text-text-primary">Boas-vindas! Faça seu login.</p>
      </header>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <FormField
          id="username"
          name="username"
          label="Email ou usuário"
          placeholder="usuario123"
          autoComplete="username"
          required
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <div className="flex flex-col gap-2">
          <FormField
            id="password"
            name="password"
            label="Senha"
            type="password"
            placeholder="******"
            autoComplete="current-password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <RememberMeRow
            checked={rememberMe}
            onChange={setRememberMe}
            forgotPasswordTo="/esqueci-senha"
          />
        </div>
        {error && (
          <p role="alert" className="text-sm text-red-400">
            {error}
          </p>
        )}
        <Button type="submit" className="mt-4">
          Login
          <Icon name="arrow-right" className="size-4" />
        </Button>
      </form>

      {statusMessage && (
        <p role="status" className="text-center text-sm text-text-primary">
          {statusMessage}
        </p>
      )}

      <div className="flex flex-col gap-2">
        <Divider text="ou entre com outras contas" />
        <div className="flex justify-center gap-6">
          <SocialLoginButton provider="github" onClick={onSocialLogin} />
          <SocialLoginButton provider="gmail" onClick={onSocialLogin} />
        </div>
      </div>

      <footer className="flex flex-col items-center gap-2">
        <p className="text-sm text-text-primary">Ainda não tem conta?</p>
        <TextLink to="/signup" variant="accent">
          Crie seu cadastro!
          <Icon name="clipboard" />
        </TextLink>
      </footer>
    </section>
  )
}
