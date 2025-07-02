import { StrictMode, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
const Project = lazy(() => import('@/pages/Project/index.jsx'));
const NotFound = lazy(() => import('@/pages/NotFound/index.jsx'));
import LoaderWrapper from "@/components/LoaderWrapper/index.jsx";
import './reset.scss'
import './global.scss'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/:slug",
    element: <Project />,
  },
  {
    path: "/not-found",
    element: <NotFound />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoaderWrapper>
      <RouterProvider router={router} future={{ v7_startTransition: true, v7_relativeSplatPath: true, }} />
    </LoaderWrapper>
  </StrictMode>,
)
