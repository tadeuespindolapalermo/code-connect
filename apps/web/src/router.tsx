import { createBrowserRouter, Navigate } from 'react-router'
import { ComingSoonPage, LoginPage } from '@/components/pages'

export const router = createBrowserRouter([
  { path: '/login', element: <LoginPage /> },
  { path: '/signup', element: <ComingSoonPage title="Cadastro" /> },
  { path: '/esqueci-senha', element: <ComingSoonPage title="Recuperar senha" /> },
  { path: '*', element: <Navigate to="/login" replace /> },
])
