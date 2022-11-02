import React, { ChangeEvent, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useTypedSelector } from '../../redux/hooks/store'
import { ProfileNames, useUpdateProfileMutation } from '../../redux/services/auth.service'
import { getLocalToken } from '../../utils/localData'

const User = () => {
  // const { token } = useTypedSelector((state) => state.auth)
  const token = getLocalToken()
  const [updateProfile, { data, status, error, isSuccess, isError }] = useUpdateProfileMutation()
  const navigate = useNavigate()

  console.log(status)
  console.log(token)
  if (isError) {
    if ((error as any).data.message === 'User not Verified') {
      console.log(status)
      console.log(error)
    }
  }
  if (isSuccess) {
    console.log(status)
    console.log(data)
    navigate('/profile')
  }

  const [formState, setFormState] = useState<ProfileNames>({
      firstName: '',
      lastName: '',
    }),
    handleChange = ({ target: { name, value } }: ChangeEvent<HTMLInputElement>) =>
      setFormState((prev) => ({ ...prev, [name]: value })),
    checkNames = () => {
      return true
    },
    update = () => {
      console.log(formState)
      if (checkNames) updateProfile(formState)
    }

  return (
    <React.Fragment>
      {/** *********** User Page ******************/}
      <main className='main bg-dark'>
        <section className='sign-in-content'>
          <i className='fa fa-user-circle sign-in-icon'></i>
          <h1>Profile</h1>
          <form>
            <div className='input-wrapper'>
              <label htmlFor='firstname'>Firstname</label>
              <input type='text' id='firstname' name='firstName' onChange={handleChange} />
            </div>
            <div className='input-wrapper'>
              <label htmlFor='lastname'>Lastname</label>
              <input type='lastname' id='lastname' name='lastName' onChange={handleChange} />
            </div>
            <div
              className='sign-in-button'
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
