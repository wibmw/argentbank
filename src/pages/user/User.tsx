import React from 'react'
import { useNavigate } from 'react-router-dom'
import Names from '../../components/forms/Names'
import { useTypedSelector } from '../../redux/hooks/store'
import { useUpdateProfileMutation } from '../../redux/services/auth.service'
import { getLocalToken } from '../../utils/localDatas'

const User = () => {
  // const { token } = useTypedSelector((state) => state.auth)
  const token = getLocalToken(),
    [updateProfile, { status, error, isSuccess, isError }] = useUpdateProfileMutation(),
    navigate = useNavigate()

  if (!token) navigate('/sign-in')

  if (isSuccess) navigate('/profile')
  else if (isError) {
    console.log(status)
    if ((error as any).data.message === 'User not Verified') {
      console.log('User not Verified')
    }
    console.log(error)
  }

  const formState = useTypedSelector((state) => state.auth.namesForm),
    isValid = () => {
      return formState && formState.isFirstNameValid && formState.isLastNameValid
    },
    update = () => {
      if (isValid()) updateProfile(formState)
    }

  return (
    <React.Fragment>
      {/** *********** User Page ******************/}
      <main className='main bg-dark'>
        <section className='form-content'>
          <i className='fa fa-user-circle form-icon'></i>
          <h1>Profile</h1>
          <form>
            <Names />
            <div
              className='form-button'
              onClick={async () => {
                await update()
              }}
            >
              Update your profile
            </div>
          </form>
        </section>
      </main>
    </React.Fragment>
  )
}

export default User
