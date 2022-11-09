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
    token = getLocalToken(), // useTypedSelector((state) => state.auth),
    [login, { data, status, error, isSuccess, isError }] = useLoginMutation()

  if (token) navigate('/profile')

  if (isSuccess) {
    console.log('success')
    const tokenResponse = data['body']['token']
    dispatch(setToken({ token: tokenResponse }))
    setLocalToken(tokenResponse, checkbox.current.checked)
    navigate('/profile')
  } else if (isError) {
    console.log(status)
    console.log(error)
  }

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
            <Credentials />
            <div className='input-remember'>
              <input ref={checkbox} type='checkbox' id='remember-me' />
              <label htmlFor='remember-me'>Remember me</label>
            </div>
            <div
              className='form-button'
              onClick={async () => {
                await connect()
              }}
            >
              Sign In
            </div>
            {isError ? <p data-error='true'> {error['data']['message']} </p> : null}
            <br />
            <Link to={'/sign-up'}>Create a new account</Link>
          </form>
        </section>
      </main>
    </React.Fragment>
  )
}

export default SignIn
