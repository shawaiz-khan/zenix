import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './contexts/theme-context.tsx'
import { ToastContainerWrapper } from './components/index.ts'

/* 
This code snippet is using the `createRoot` function from `react-dom/client` to create a root for
the React application. The `createRoot` function is used to create a root for concurrent React
applications. 
*/
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
      <ToastContainerWrapper />
    </ThemeProvider>
  </StrictMode>,
)