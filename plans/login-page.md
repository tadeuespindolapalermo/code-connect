# Plano: Página de Login — Code Connect

## Contexto

O app web (`apps/web`) ainda é o template starter do Vite — sem componentes, sem roteamento, sem Tailwind. Precisamos construir a página de login seguindo o mockup fornecido, usando Atomic Design e preparando a estrutura para reuso com a futura página de cadastro (mesmo layout, banner e formulário diferentes).

## 1. Dependências

```bash
pnpm web add react-router tailwindcss @tailwindcss/vite
```

- `tailwindcss` v4 + `@tailwindcss/vite` — CSS-first config, sem postcss separado
- `react-router` v7 — pacote único (substitui react-router-dom)

## 2. Configuração

**`vite.config.ts`** — adicionar plugin Tailwind + alias `@/` → `src/`

**`tsconfig.app.json`** — adicionar `baseUrl` + `paths` para o alias `@/*`

**`index.css`** — substituir por `@import "tailwindcss"` + `@theme` com tokens de cor:
- `page-bg: #0B0D10`, `card-bg: #1A1C23`, `card-border: #2A2D35`
- `input-bg: #2A2D35`, `input-border: #3A3D45`
- `text-primary: #FFFFFF`, `text-secondary: #9CA3AF`
- `accent-green: #4ADE80`, `accent-green-hover: #22C55E`

**`index.html`** — título para "Code Connect", lang `pt-BR`

**Deletar**: `App.css`, `src/assets/hero.png`, `src/assets/react.svg`, `src/assets/vite.svg`

## 3. Componentes (Atomic Design)

### Atoms (`src/components/atoms/`)

| Componente | Responsabilidade |
|---|---|
| **Input** | `<input>` estilizado (dark bg, rounded, placeholder cinza). Props: `id`, `type`, `placeholder`, + `InputHTMLAttributes` |
| **Button** | Variantes `primary` (verde, full-width) e `social` (bg escuro + borda). Props: `variant`, `children`, `fullWidth` |
| **Checkbox** | Input checkbox + label estilizado. Props: `label`, `id`, `checked`, `onChange` |
| **Divider** | Linha horizontal com texto central ("ou entre com outras contas"). Props: `text` |
| **Logo** | Favicon SVG inline + texto "code connect". Props: `size`, `showText` |

### Molecules (`src/components/molecules/`)

| Componente | Compõe |
|---|---|
| **FormField** | `<label>` + `<Input>`. Props: `label`, `id`, + props do Input |
| **SocialLoginButton** | `<Button variant="social">` + `<img>` do provider. Props: `provider: 'github' \| 'gmail'` |
| **RememberMeRow** | `<Checkbox label="Lembrar-me">` + link "Esqueci a senha". Layout flex justify-between |

### Organisms (`src/components/organisms/`)

| Componente | Compõe |
|---|---|
| **AuthBanner** | Imagem banner + `<Logo>` sobreposto no canto inferior esquerdo. Props: `bannerSrc`, `bannerAlt` — **reutilizado pela página de cadastro** com banner diferente |
| **LoginForm** | Título "Login", subtítulo, 2× `<FormField>`, `<RememberMeRow>`, `<Button primary>`, `<Divider>`, 2× `<SocialLoginButton>`, link de cadastro. Estado local para email/senha/rememberMe |

### Templates (`src/components/templates/`)

| Componente | Responsabilidade |
|---|---|
| **AuthTemplate** | Layout completo: fundo escuro com watermarks decorativas (favicon SVG grande, opacity baixa), card centralizado com duas colunas. Props: `banner: ReactNode`, `children: ReactNode` — **peça central de reuso** para login e cadastro |

### Pages (`src/components/pages/`)

| Componente | Conecta |
|---|---|
| **LoginPage** | `<AuthTemplate banner={<AuthBanner src="/banner-login.png">}><LoginForm /></AuthTemplate>` |

## 4. Roteamento (`src/router.tsx`)

```
/login  → LoginPage
/       → Navigate to /login (temporário)
*       → Navigate to /login
```

Usando `createBrowserRouter` do `react-router` v7.

**`App.tsx`** vira apenas `<RouterProvider router={router} />`.

## 5. Background decorativo

O AuthTemplate inclui dois elementos SVG do favicon (lightning bolt) posicionados absolutamente — um no canto superior esquerdo e outro no inferior direito — com `opacity-[0.03]` e `pointer-events-none`, replicando as watermarks do mockup.

## 6. Padrão de reuso para Cadastro

Quando a página de cadastro for implementada:
- Criar `SignupForm` (organism) com campos diferentes
- Criar `SignupPage` (page) passando `bannerSrc="/banner-signup.png"` e `<SignupForm>` ao mesmo `AuthTemplate`
- Adicionar rota `/signup` ao router
- Nenhuma alteração nos atoms, molecules ou template

## 7. Ordem de execução

1. Instalar dependências
2. Configurar vite.config.ts, tsconfig.app.json
3. Substituir index.css com Tailwind + theme
4. Deletar arquivos starter
5. Criar atoms (Input → Button → Checkbox → Divider → Logo)
6. Criar molecules (FormField → SocialLoginButton → RememberMeRow)
7. Criar organisms (AuthBanner → LoginForm)
8. Criar template (AuthTemplate)
9. Criar page (LoginPage)
10. Criar router.tsx
11. Substituir App.tsx
12. Atualizar index.html
13. `pnpm dev:web` e verificar no browser

## 8. Verificação

- `pnpm dev:web` — abrir `http://localhost:5173/login`
- Confirmar visualmente contra o mockup: layout, cores, espaçamentos, responsividade
- Verificar que `/` redireciona para `/login`
- `pnpm web lint` — sem erros de oxlint
- Verificar que `pnpm build` compila sem erros

## Arquivos críticos

- `apps/web/vite.config.ts`
- `apps/web/tsconfig.app.json`
- `apps/web/src/index.css`
- `apps/web/src/components/templates/AuthTemplate/AuthTemplate.tsx`
- `apps/web/src/components/organisms/LoginForm/LoginForm.tsx`
- `apps/web/src/components/organisms/AuthBanner/AuthBanner.tsx`
- `apps/web/src/components/pages/LoginPage/LoginPage.tsx`
- `apps/web/src/router.tsx`
- `apps/web/src/App.tsx`
