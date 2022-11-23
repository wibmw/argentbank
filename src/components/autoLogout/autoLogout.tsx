import { useEffect, useRef, useState } from 'react'
import { getLocalToken } from '../../utils/localDatas'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../redux/hooks/store'
import { Cookies } from 'react-cookie'
import { setToken } from '../../redux/slices/auth.slice'

/* export const logout = () => {
  const dispatch = useAppDispatch(),
    navigate = useNavigate(),
    cookie = new Cookies()

  dispatch(setToken({ token: null }))
  cookie.remove('token', { path: '/' })
  navigate('/sign-in')
}

export default function AutoLogout() {
  const [isLoggedOut, setIsLoggedOut] = useState(false)
  const timerId = useRef(null)

  useEffect(() => {
    const autoLogout = () => {
      if (document.visibilityState !== 'hidden') {
        const token = getLocalToken()
        if (!token) {
          logout()
        }

        // clear existing timer
        window.clearTimeout(timerId.current)
      }
    }

    document.addEventListener('visibilitychange', autoLogout)

    return () => document.removeEventListener('visibilitychange', autoLogout)
  }, [])
}
*/
