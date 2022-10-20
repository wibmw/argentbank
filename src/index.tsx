import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/static/header/Header'
import Home from './pages/home/Home'
import Error from './pages/error/Error'
import SignIn from './pages/sign_in/SignIn'

import './style/style.css'
import Footer from './components/static/footer/Footer'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import Profile from './pages/profile/Profile'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    {' '}
    <Router>
      <Provider store={store}>
        <Header />
        <Routes>
          {/** *********** Error Page ******************/}
          <Route path={'*'} element={<Error />} />
          {/** *********** Homepage without params ******************/}
          <Route path={'/'} element={<Home />} />
          {/** *********** Sign In Page ******************/}
          <Route path={'/sign-in'} element={<SignIn />} />
          {/** *********** Profile Page ******************/}
          <Route path={'/profile'} element={<Profile />} />
        </Routes>
        <Footer />
      </Provider>
    </Router>
  </React.StrictMode>,
)
