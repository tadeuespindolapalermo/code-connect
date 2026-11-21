import type { ChangeEvent } from 'react'
import { Checkbox, TextLink } from '@/components/atoms'

type RememberMeRowProps = {
  checked: boolean
  onChange: (checked: boolean) => void
  forgotPasswordTo: string
}

export function RememberMeRow({ checked, onChange, forgotPasswordTo }: RememberMeRowProps) {
  return (
    <div className="flex items-center justify-between">
      <Checkbox
        label="Lembrar-me"
        name="rememberMe"
        checked={checked}
        onChange={(event: ChangeEvent<HTMLInputElement>) => onChange(event.target.checked)}
      />
      <TextLink to={forgotPasswordTo}>Esqueci a senha</TextLink>
    </div>
  )
}
