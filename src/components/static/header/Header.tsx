import React from 'react'
import { Link } from 'react-router-dom'
import argentBankLogo from '../../../assets/img/argentBankLogo.png'

const Header = () => {
  return (
    <React.Fragment>
      {/** *********** Header Section ******************/}
      <header id=''>
        <nav className='main-nav'>
          <Link to={'/'} className='main-nav-logo'>
            <img className='main-nav-logo-image' src={argentBankLogo} alt='Argent Bank Logo' />
            <h1 className='sr-only'>Argent Bank</h1>
          </Link>
          <div>
            <Link to={'/sign-in'} className='main-nav-item'>
              <i className='fa fa-user-circle'></i>
              Sign In
            </Link>
          </div>
        </nav>
      </header>
    </React.Fragment>
  )
}
export default Header
