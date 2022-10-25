import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAppDispatch, useTypedSelector } from '../../redux/hooks/store'
import { useProfileMutation } from '../../redux/services/auth.service'
import { setFirstName } from '../../redux/slices/auth.slice'

const Profile = () => {
  const dispatch = useAppDispatch(),
    navigate = useNavigate(),
    { state } = useLocation(),
    { token } = useTypedSelector((state) => state.auth),
    [profile, { data, status, error, isSuccess, isError }] = useProfileMutation()

  if (!token) navigate('/sign-in')

  let firstName, lastName

  useEffect(() => {
    profile()
  }, [profile, state])

  if (isError) {
    if ((error as any).data.message === 'User not Verified') {
      console.log(status)
      console.log(error)
    }
  }
  if (isSuccess) {
    ;({ firstName, lastName } = data['body'])
    dispatch(setFirstName({ firstName: firstName }))
  }

  return (
    <React.Fragment>
      {/** *********** User Page ******************/}
      <main className='main bg-dark'>
        <div className='header'>
          <h1>
            Welcome back
            <br />
            {firstName + ' ' + lastName + '!'}
          </h1>
          <button className='edit-button'>Edit Name</button>
        </div>
        <h2 className='sr-only'>Accounts</h2>
        <section className='account'>
          <div className='account-content-wrapper'>
            <h3 className='account-title'>Argent Bank Checking (x8349)</h3>
            <p className='account-amount'>$2,082.79</p>
            <p className='account-amount-description'>Available Balance</p>
          </div>
          <div className='account-content-wrapper cta'>
            <button className='transaction-button'>View transactions</button>
          </div>
        </section>
        <section className='account'>
          <div className='account-content-wrapper'>
            <h3 className='account-title'>Argent Bank Savings (x6712)</h3>
            <p className='account-amount'>$10,928.42</p>
            <p className='account-amount-description'>Available Balance</p>
          </div>
          <div className='account-content-wrapper cta'>
            <button className='transaction-button'>View transactions</button>
          </div>
        </section>
        <section className='account'>
          <div className='account-content-wrapper'>
            <h3 className='account-title'>Argent Bank Credit Card (x8349)</h3>
            <p className='account-amount'>$184.30</p>
            <p className='account-amount-description'>Current Balance</p>
          </div>
          <div className='account-content-wrapper cta'>
            <button className='transaction-button'>View transactions</button>
          </div>
        </section>
      </main>
    </React.Fragment>
  )
}

export default Profile
