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
import PagesToReadPage from './pages/PagesToReadPage/PagesToReadPage.jsx'

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
        path: "/bookDetails/:bookId",
        element: <BookDetails></BookDetails>,
        loader : () => fetch("/booksData.json").then(res => res.json()),
      },
     {
        path: "/pages-to-read",
        element: <PagesToReadPage></PagesToReadPage>
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
