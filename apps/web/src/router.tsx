import { createBrowserRouter, Navigate } from 'react-router'
import { LoginPage } from '@/components/pages'

export const router = createBrowserRouter([
  { path: '/login', element: <LoginPage /> },
  { path: '*', element: <Navigate to="/login" replace /> },
])
