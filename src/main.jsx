import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './app.css'

// lazy load views
const App = lazy(() => import('./App.jsx'))
const QRPage = lazy(() => import('./QRPage.jsx'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/qr',
    element: <QRPage />,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<p>Loading...</p>}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>
)
