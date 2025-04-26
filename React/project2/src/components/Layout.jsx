import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
      <Header/>
      <main style={{minHeight:"90vh"}}>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export default Layout
