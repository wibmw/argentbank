import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Names from '../../components/forms/Names'
import { useTypedSelector } from '../../redux/hooks/store'
import { useUpdateProfileMutation } from '../../redux/services/auth.service'
import { getLocalToken } from '../../utils/localDatas'

const User = () => {
  // Update User info
  const [updateProfile, { status, error, isSuccess, isError }] = useUpdateProfileMutation(),
    navigate = useNavigate()

  useEffect(() => {
    // If success navigate to profile page
    if (isSuccess) navigate('/profile')
    // Else show error message in console
    else if (isError) {
      console.log(status)
      if ((error as any).data.message === 'User not Verified') {
        console.log('User not Verified')
      }
      console.log(error)
    }
  }, [isSuccess, isError])
  const formState = useTypedSelector((state) => state.auth.namesForm),
    // Check form's data
    isValid = () => {
      return formState && formState.isFirstNameValid && formState.isLastNameValid
    },
    // if datas are valid, update datas
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
            {/** *********** Form ******************/}
            <Names />
            {/** *********** Button ******************/}
            <div
              className='form-button'
              onClick={async () => {
                await update()
              }}
            >
              Update your profile
            </div>
            {/** *********** Error ******************/}
            {isError ? <p data-error='true'> {error['data']['message']} </p> : null}
          </form>
        </section>
      </main>
    </React.Fragment>
  )
}

export default User
