import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/static/header/Header'
import Home from './pages/home/Home'
import Error from './pages/error/Error'
import SignIn from './pages/sign_in/SignIn'

import Footer from './components/static/footer/Footer'
import Profile from './pages/profile/Profile'
import User from './pages/user/User'

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          {}
          {/** *********** Error Page ******************/}
          <Route path={'*'} element={<Error />} />
          {/** *********** Homepage without params ******************/}
          <Route path={'/'} element={<Home />} />
          {/** *********** Sign In Page ******************/}
          <Route path={'/sign-in'} element={<SignIn />} />
          {/** *********** Profile Page ******************/}
          <Route path={'/user'} element={<User />} />
          {/** *********** Profile Page ******************/}
          <Route path={'/profile'} element={<Profile />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
