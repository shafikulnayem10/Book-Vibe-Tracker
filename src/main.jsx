import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from './Layout/MainLayout/MainLayout.jsx'
import HomePage from './pages/HomePage/HomePage.jsx'
import BooksPage from './pages/BooksPage/BooksPage.jsx'
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx'
import BookDetails from './pages/BookDetails/BookDetails.jsx'
import BookProvider from './context/BookContext.jsx'
import { ToastContainer } from 'react-toastify'

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
       },
      {
        path: "/bookDetails/:bookId",
        element: <BookDetails></BookDetails>,
        loader : () => fetch("/booksData.json").then(res => res.json()),
      },

    ],
    errorElement:<ErrorPage></ErrorPage>
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </BookProvider>
  </StrictMode>,
)
