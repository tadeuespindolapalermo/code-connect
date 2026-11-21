import { Input, type InputProps } from '@/components/atoms'

export type FormFieldProps = InputProps & {
  id: string
  label: string
}

export function FormField({ id, label, ...inputProps }: FormFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-lg text-text-primary">
        {label}
      </label>
      <Input id={id} {...inputProps} />
    </div>
  )
}
