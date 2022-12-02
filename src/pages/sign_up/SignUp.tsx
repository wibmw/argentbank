import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Credentials from '../../components/forms/Credentials'
import Names from '../../components/forms/Names'
import { useTypedSelector } from '../../redux/hooks/store'
import { ISignupRequest, useSignupMutation } from '../../redux/services/auth.service'
import { getLocalToken } from '../../utils/localDatas'

const SignUp = () => {
  const [signUp, { status, error, isSuccess, isError }] = useSignupMutation(),
    navigate = useNavigate(),
    [token, setLocalToken] = useState()

  useEffect(() => {
    setLocalToken(getLocalToken())

    // If connected, navigate to the profile page
    if (token) navigate('/profile')

    // If success navigate to signIn page
    if (isSuccess) navigate('/sign-in')
    // Else show error message in console
    else if (isError) {
      console.log(status)
      console.log(error)
    }
  }, [token, isSuccess, isError])

  let formState: ISignupRequest
  const { firstName, lastName, isFirstNameValid, isLastNameValid } = useTypedSelector((state) => state.auth.namesForm),
    { email, password, isEmailValid, isPasswordValid } = useTypedSelector((state) => state.auth.credentialsForm),
    // Check and stock form's data
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
    // if datas are valid, signUp
    createAccount = () => {
      if (checkAccountInfos()) signUp(formState)
    }

  return (
    <>
      {/** *********** Sign Up Page ******************/}
      <main className='main bg-dark'>
        <section className='form-content'>
          <i className='fa fa-user-circle form-icon'></i>
          <h1>Sign Up</h1>
          <form>
            {/** *********** Form ******************/}
            <Names />
            <Credentials />
            {/** *********** Button ******************/}
            <div
              className='form-button'
              onClick={async () => {
                await createAccount()
              }}
            >
              Create your account
            </div>
            {/** *********** Error ******************/}
            {isError ? <p data-error='true'> {error['data']['message']} </p> : null}
          </form>
        </section>
      </main>
    </>
  )
}

export default SignUp
