import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import argentBankLogo from '../../../assets/img/argentBankLogo.png'
import { useAppDispatch, useTypedSelector } from '../../../redux/hooks/store'
import { setToken } from '../../../redux/slices/auth.slice'
import { getLocalToken } from '../../../utils/localDatas'

const Header = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const { firstName } = useTypedSelector((state) => state.auth),
    token = getLocalToken()
  // console.log(token)
  const logout = () => {
    dispatch(setToken({ token: null }))
    localStorage.removeItem('token')
    localStorage.clear
    navigate('/sign-in')
  }

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
            {token ? (
              <>
                <Link to={'/user'} className='main-nav-item'>
                  <i className='fa fa-user-circle'></i>
                  {firstName}
                </Link>
                <Link to={'/'} className='main-nav-item' onClick={logout}>
                  <i className='fa fa-sign-out'></i>
                  Sign Out
                </Link>
              </>
            ) : (
              <>
                <Link to={'/sign-in'} className='main-nav-item'>
                  <i className='fa fa-user-circle'></i>
                  Sign In
                </Link>
              </>
            )}
          </div>
        </nav>
      </header>
    </React.Fragment>
  )
}
export default Header
