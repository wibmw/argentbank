import { Link, useNavigate } from 'react-router-dom'
import { useAppDispatch, useTypedSelector } from '../../../redux/hooks/store'
import { setToken } from '../../../redux/slices/auth.slice'
import { getLocalToken } from '../../../utils/localDatas'
import Cookies from 'universal-cookie'
import argentBankLogo from '../../../assets/img/argentBankLogo.png'

const Header = () => {
  const dispatch = useAppDispatch(),
    navigate = useNavigate(),
    cookie = new Cookies(),
    { firstName } = useTypedSelector((state) => state.auth),
    token = getLocalToken()

  // Logout function
  const logout = () => {
    dispatch(setToken({ token: null }))
    cookie.remove('token', { path: '/' })
    navigate('/sign-in')
  }

  return (
    <>
      {/** *********** Header Section ******************/}
      <header id=''>
        {/** *********** Nav Section ******************/}
        <nav className='main-nav'>
          <Link to={'/'} className='main-nav-logo'>
            <img className='main-nav-logo-image' src={argentBankLogo} alt='Argent Bank Logo' />
            <h1 className='sr-only'>Argent Bank</h1>
          </Link>
          <div>
            {token ? (
              // If token, show connected Nav
              <>
                <Link to={'/profile'} className='main-nav-item'>
                  <i className='fas fa-user-circle'></i>
                  {firstName + '   '}
                </Link>
                <Link to={'/'} className='main-nav-item' onClick={logout}>
                  <i className='fas fa-sign-out-alt'></i>
                  Sign Out
                </Link>
              </>
            ) : (
              // Else show signIn Nav
              <>
                <Link to={'/sign-in'} className='main-nav-item'>
                  <i className='fas fa-user-circle'></i>
                  Sign In
                </Link>
              </>
            )}
          </div>
        </nav>
      </header>
    </>
  )
}
export default Header
