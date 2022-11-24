import { useEffect, useRef, useState } from 'react'
import { Cookies } from 'react-cookie'
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../redux/hooks/store'
import { setToken } from '../../redux/slices/auth.slice'
import { getLocalToken } from '../../utils/localDatas'

const AuthLayout = () => {
  const location = useLocation(),
    token = getLocalToken(),
    timerId = useRef(null),
    dispatch = useAppDispatch(),
    navigate = useNavigate(),
    cookie = new Cookies()

  useEffect(() => {
    const autoLogout = () => {
      if (document.visibilityState !== 'hidden') {
        const token = getLocalToken()
        if (!token) {
          dispatch(setToken({ token: null }))
          cookie.remove('token', { path: '/' })
          navigate('/sign-in')
        }

        // clear existing timer
        window.clearTimeout(timerId.current)
      }
    }

    document.addEventListener('visibilitychange', autoLogout)

    return () => document.removeEventListener('visibilitychange', autoLogout)
  }, [])

  return token ? (
    <Outlet />
  ) : (
    <Navigate
      to='/sign-in'
      replace
      state={{ from: location }} // pass current location to redirect back
    />
  )
}

export default AuthLayout
