import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router-dom'
import { createRoutesFromElements, Route } from 'react-router-dom'
import App from './App.jsx'
import { About, Cart, Buy, Waitlist, Home } from './components/index.js'
import { CartProvider } from './context/CartContext.jsx'
import { Toaster } from 'react-hot-toast';

const router = createBrowserRouter(
  createRoutesFromElements(
    
  <Route path='/' element={<App />}>
    <Route index element={<Home />} />
    <Route path='about' element={<About />} />
    <Route path='waitlist' element={<Waitlist />} />
    <Route path='cart' element={<Cart />} />
    <Route path='buy' element={<Buy />} />
  </Route>

  )
);





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <Toaster position="top-center" />
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>,
)
