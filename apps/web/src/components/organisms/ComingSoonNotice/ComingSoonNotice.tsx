import { Icon, TextLink } from '@/components/atoms'

type ComingSoonNoticeProps = {
  title: string
  backTo?: string
}

export function ComingSoonNotice({ title, backTo = '/login' }: ComingSoonNoticeProps) {
  return (
    <section aria-labelledby="coming-soon-title" className="flex flex-col gap-6">
      <h1 id="coming-soon-title" className="text-3xl font-semibold text-text-primary">
        {title}
      </h1>
      <p className="text-xl text-text-primary">Esta página estará disponível em breve.</p>
      <TextLink to={backTo} variant="accent">
        Voltar para o login
        <Icon name="arrow-right" className="size-4" />
      </TextLink>
    </section>
  )
}
