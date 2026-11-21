import type { ReactNode } from 'react'
import { LogoMark } from '@/components/atoms'

type AuthTemplateProps = {
  banner: ReactNode
  children: ReactNode
}

export function AuthTemplate({ banner, children }: AuthTemplateProps) {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-page-bg px-4 py-12">
      <LogoMark className="pointer-events-none absolute -top-6 left-[7%] w-[22rem] text-watermark" />
      <LogoMark className="pointer-events-none absolute -bottom-6 right-[7%] w-[22rem] text-watermark" />

      <main className="relative grid w-full max-w-[62rem] gap-16 rounded-[2rem] bg-card-bg p-8 md:grid-cols-[minmax(0,26rem)_minmax(0,20rem)] md:px-[4.75rem] md:py-14">
        <div className="hidden md:block">{banner}</div>
        <div className="flex flex-col justify-center">{children}</div>
      </main>
    </div>
  )
}
