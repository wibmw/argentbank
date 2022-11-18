import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Credentials from '../../components/forms/Credentials'
import { useAppDispatch, useTypedSelector } from '../../redux/hooks/store'
import { useLoginMutation } from '../../redux/services/auth.service'
import { setToken } from '../../redux/slices/auth.slice'
import { getLocalToken, setLocalToken } from '../../utils/localDatas'

const SignIn = () => {
  const dispatch = useAppDispatch(),
    checkbox = useRef(null),
    navigate = useNavigate(),
    token = getLocalToken(),
    // Get token info
    [login, { data, status, error, isSuccess, isError }] = useLoginMutation()

  // If connected, navigate to the profile page
  if (token) navigate('/profile')

  if (isSuccess) {
    // If success get token
    const tokenResponse = data['body']['token']
    dispatch(setToken({ token: tokenResponse }))
    setLocalToken(tokenResponse, checkbox.current.checked)
    navigate('/profile')
  } else if (isError) {
    // Else show error message in console
    console.log(status)
    console.log(error)
  }

  // Check and stock  form's data
  const formState = useTypedSelector((state) => state.auth.credentialsForm),
    isValid = () => {
      return formState && formState.isEmailValid && formState.isPasswordValid
    },
    connect = () => {
      if (isValid()) login(formState)
    }

  return (
    <React.Fragment>
      {/** *********** Sign In Page ******************/}
      <main className='main bg-dark'>
        <section className='form-content'>
          <i className='fa fa-user-circle form-icon'></i>
          <h1>Sign In</h1>
          <form>
            {/** *********** Form ******************/}
            <Credentials />
            <div className='input-remember'>
              <input ref={checkbox} type='checkbox' id='remember-me' />
              <label htmlFor='remember-me'>Remember me</label>
            </div>
            {/** *********** Button ******************/}
            <div
              className='form-button'
              onClick={async () => {
                await connect()
              }}
            >
              Sign In
            </div>
            {/** *********** Error ******************/}
            {isError ? <p data-error='true'> {error['data']['message']} </p> : null}
            <br />
            {/** *********** Navigate to new account page ******************/}
            <Link to={'/sign-up'}>Create a new account</Link>
          </form>
        </section>
      </main>
    </React.Fragment>
  )
}

export default SignIn
