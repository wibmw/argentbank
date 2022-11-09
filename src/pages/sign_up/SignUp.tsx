import React from 'react'
import { useNavigate } from 'react-router-dom'
import Credentials from '../../components/forms/Credentials'
import Names from '../../components/forms/Names'
import { useTypedSelector } from '../../redux/hooks/store'
import { SignupRequest, useSignupMutation } from '../../redux/services/auth.service'
import { getLocalToken } from '../../utils/localDatas'

const SignUp = () => {
  const [signUp, { status, error, isSuccess, isError }] = useSignupMutation(),
    navigate = useNavigate(),
    token = getLocalToken()

  if (token) navigate('/profile')

  if (isSuccess) navigate('/sign-in')
  else if (isError) {
    console.log(status)
    console.log(error)
  }

  let formState: SignupRequest
  const { firstName, lastName, isFirstNameValid, isLastNameValid } = useTypedSelector((state) => state.auth.namesForm),
    { email, password, isEmailValid, isPasswordValid } = useTypedSelector((state) => state.auth.credentialsForm),
    checkAccountInfos = () => {
      const isValid = isFirstNameValid && isLastNameValid && isEmailValid && isPasswordValid
      if (isValid)
        formState = {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
        }
      return isValid
    },
    createAccount = () => {
      if (checkAccountInfos()) signUp(formState)
    }

  return (
    <React.Fragment>
      {/** *********** Sign Up Page ******************/}
      <main className='main bg-dark'>
        <section className='form-content'>
          <i className='fa fa-user-circle form-icon'></i>
          <h1>Sign Up</h1>
          <form>
            <Names />
            <Credentials />
            <div
              className='form-button'
              onClick={async () => {
                await createAccount()
              }}
            >
              Create your account
            </div>
            {isError ? <p data-error='true'> {error['data']['message']} </p> : null}
          </form>
        </section>
      </main>
    </React.Fragment>
  )
}

export default SignUp
