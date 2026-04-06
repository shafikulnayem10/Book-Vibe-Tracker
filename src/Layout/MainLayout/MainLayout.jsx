import React from 'react'
import NavBar from '../../ui/NavBar/NavBar'
import { Outlet } from 'react-router'
import BookProvider from '../../context/BookContext'
 
export default function MainLayout() {
  return (
    <BookProvider>
      <div>
        <NavBar></NavBar>
        <Outlet></Outlet>
      </div>
    </BookProvider>
  )
}
