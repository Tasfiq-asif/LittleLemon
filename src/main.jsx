import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes.jsx'
import { ThemeProvider } from '@mui/material'
import theme from './theme/theme.js'
import { Toaster } from 'react-hot-toast'
import AuthProviders from './providers/AuthProviders.jsx'
import { CartProvider } from './providers/CartProvider.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <ThemeProvider theme={theme}>
        <AuthProviders>
          <Toaster />
          <RouterProvider router={router} />
        </AuthProviders>
      </ThemeProvider>
    </CartProvider>
  </StrictMode>
);
