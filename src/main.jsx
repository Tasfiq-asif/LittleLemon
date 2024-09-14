import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes.jsx'
import { ThemeProvider } from '@mui/material'
import theme from './theme/theme.js'
import { Toaster } from 'react-hot-toast'
import AuthProviders from './providers/AuthProviders.jsx'
import { CartProvider } from './providers/CartProvider.jsx'

const queryClient = new QueryClient

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <ThemeProvider theme={theme}>
          <AuthProviders>
            <Toaster />
            <RouterProvider router={router} />
          </AuthProviders>
        </ThemeProvider>
      </CartProvider>
    </QueryClientProvider>
  </StrictMode>
);
