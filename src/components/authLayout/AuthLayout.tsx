import { useEffect, useRef } from 'react'
import { Cookies } from 'react-cookie'
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../redux/hooks/store'
import { setToken } from '../../redux/slices/auth.slice'
import { getLocalToken } from '../../utils/localDatas'

const AuthLayout = () => {
  const location = useLocation(),
    dispatch = useAppDispatch(),
    navigate = useNavigate(),
    token = getLocalToken(),
    timerId = useRef(null),
    cookie = new Cookies()

  useEffect(() => {
    // AutoLogout when user is inactive more than the session token timeout.
    const autoLogout = () => {
      // If the windows is not active
      if (document.visibilityState !== 'hidden') {
        const token = getLocalToken()
        // If no token then logout
        if (!token) {
          dispatch(setToken({ token: null }))
          cookie.remove('token', { path: '/' })
          navigate('/sign-in')
        }

        // Clear existing timer
        window.clearTimeout(timerId.current)
      }
    }
    // EventListener on the window visibility change
    document.addEventListener('visibilitychange', autoLogout)

    return () => document.removeEventListener('visibilitychange', autoLogout)
  }, [])

  return token ? (
    // If the token is good Then display the page
    <Outlet />
  ) : (
    // If the token is not good Then navigate to signIn page
    <Navigate
      to='/sign-in'
      replace
      state={{ from: location }} // pass current location to redirect back
    />
  )
}

export default AuthLayout
