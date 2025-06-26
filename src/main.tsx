import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { useEffect } from 'react'
import { useLocation, BrowserRouter } from 'react-router-dom'

function ScrollToHash() {
  const location = useLocation()
  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.replace('#', ''))
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [location])
  return null
}

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ScrollToHash />
    <App />
  </BrowserRouter>
);
