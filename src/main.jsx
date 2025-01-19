import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import Project from './pages/Project/index.jsx';
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
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} future={{ v7_startTransition: true, v7_relativeSplatPath: true, }} />
  </StrictMode>,
)
