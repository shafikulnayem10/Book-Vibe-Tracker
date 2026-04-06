import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from './Layout/MainLayout/MainLayout.jsx'
import HomePage from './pages/HomePage/HomePage.jsx'
import BooksPage from './pages/BooksPage/BooksPage.jsx'
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx'

const router = createBrowserRouter([{
   path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      { 
        index: true,
        element: <HomePage></HomePage>
       },
       {
        path:"/books",
        element: <BooksPage></BooksPage>
       },
       {
        path:"/error",
        element: <ErrorPage></ErrorPage>
       }

    ],
    errorElement:<ErrorPage></ErrorPage>
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
