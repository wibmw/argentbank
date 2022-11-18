import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/static/header/Header'
import Home from './pages/home/Home'
import Error from './pages/error/Error'
import SignIn from './pages/sign_in/SignIn'

import Footer from './components/static/footer/Footer'
import Profile from './pages/profile/Profile'
import User from './pages/user/User'
import SignUp from './pages/sign_up/SignUp'
import Transactions from './pages/transactions/Transactions'

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
          {/** *********** Sign Up Page ******************/}
          <Route path={'/sign-up'} element={<SignUp />} />
          {/** *********** User Page ******************/}
          <Route path={'/user'} element={<User />} />
          {/** *********** Accounts Page ******************/}
          <Route path={'/profile'} element={<Profile />} />
          {/** *********** Transactions Page ******************/}
          <Route path={'/transactions'} element={<Transactions />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
