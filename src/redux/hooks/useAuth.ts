import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { setToken } from '../slices/auth.slice'

export const useAuth = () => {
  const token = useSelector(setToken)
  console.log('useAuth : ' + token)
  return useMemo(() => ({ token: token }), [token])
}
