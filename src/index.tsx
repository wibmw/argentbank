import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/static/header/Header'
import Home from './pages/home/Home'
import Error from './pages/error/Error'
import SignIn from './pages/sign_in/SignIn'

import './style/style.css'
import Footer from './components/static/footer/Footer'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    {' '}
    <Router>
      <Header />
      <Routes>
        {/** *********** Error Page ******************/}
        <Route path={'*'} element={<Error />} />
        {/** *********** Homepage without params ******************/}
        <Route path={'/'} element={<Home />} />
        {/** *********** Sign In Page ******************/}
        <Route path={'/sign-in'} element={<SignIn />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
)
