import React, { useState, ChangeEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useTypedSelector } from '../../redux/hooks/store'
import { useLoginMutation, LoginRequest } from '../../redux/services/auth.service'
import { setToken } from '../../redux/slices/auth.slice'
import { getLocalToken, setLocalToken } from '../../utils/localData'

const SignIn = () => {
  const dispatch = useAppDispatch(),
    navigate = useNavigate(),
    token = getLocalToken(), // useTypedSelector((state) => state.auth),
    [login, { data, error, isSuccess, isError }] = useLoginMutation(),
    [formState, setFormState] = useState<LoginRequest>({
      email: '',
      password: '',
    }),
    handleChange = ({ target: { name, value } }: ChangeEvent<HTMLInputElement>) =>
      setFormState((prev) => ({ ...prev, [name]: value }))

  if (token) navigate('/profile')

  if (isError) {
    if ((error as any).data.message === 'User not Verified') {
      console.log(error)
    }
  }
  if (isSuccess) {
    const tokenResponse = data['body']['token']
    dispatch(setToken({ token: tokenResponse }))
    setLocalToken(tokenResponse)
    navigate('/profile')
  }

  return (
    <React.Fragment>
      {/** *********** Sign In Page ******************/}
      <main className='main bg-dark'>
        <section className='sign-in-content'>
          <i className='fa fa-user-circle sign-in-icon'></i>
          <h1>Sign In</h1>
          <form>
            <div className='input-wrapper'>
              <label htmlFor='email'>Username</label>
              <input type='text' id='email' name='email' onChange={handleChange} />
            </div>
            <div className='input-wrapper'>
              <label htmlFor='password'>Password</label>
              <input type='password' id='password' name='password' onChange={handleChange} />
            </div>
            <div className='input-remember'>
              <input type='checkbox' id='remember-me' />
              <label htmlFor='remember-me'>Remember me</label>
            </div>
            <div
              className='sign-in-button'
              onClick={async () => {
                await login(formState)
              }}
            >
              Sign In
            </div>
          </form>
        </section>
      </main>
    </React.Fragment>
  )
}

export default SignIn
