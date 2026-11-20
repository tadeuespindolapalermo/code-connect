type DividerProps = {
  text?: string
}

export function Divider({ text }: DividerProps) {
  if (!text) {
    return <hr className="border-text-secondary" />
  }

  return (
    <div className="flex items-center gap-4 text-sm text-text-primary">
      <span aria-hidden="true" className="h-px flex-1 bg-text-secondary" />
      <span>{text}</span>
      <span aria-hidden="true" className="h-px flex-1 bg-text-secondary" />
    </div>
  )
}
