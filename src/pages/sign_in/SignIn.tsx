import React, { useState, useEffect, ChangeEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { RootState } from '../../redux/store'

import { useLoginMutation, useProfileMutation, LoginRequest } from '../../redux/services/auth.service'

const SignIn = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [formState, setFormState] = useState<LoginRequest>({
    email: '',
    password: '',
  })

  const handleChange = ({ target: { name, value } }: ChangeEvent<HTMLInputElement>) =>
    setFormState((prev) => ({ ...prev, [name]: value }))

  const [login, { data, status }] = useLoginMutation()

  const tryToLogin = async () => {
    try {
      await login(formState)
      console.log(data)
      navigate('/profile')
    } catch (err: any) {
      console.log(data.token)
      console.log('error')
    }
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
            <button className='sign-in-button' onClick={tryToLogin}>
              Sign In
            </button>
          </form>
        </section>
      </main>
    </React.Fragment>
  )
}
export default SignIn
