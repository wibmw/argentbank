import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../redux/hooks/store'
import { useProfileMutation } from '../../redux/services/auth.service'
import { setFirstName } from '../../redux/slices/auth.slice'
import { allTransactions, getLocalToken } from '../../utils/localDatas'
import Transaction from './Transaction'

const Profile = () => {
  const dispatch = useAppDispatch(),
    navigate = useNavigate(),
    { state } = useLocation(),
    token = getLocalToken(), //  useTypedSelector((state) => state.auth),
    [profile, { data, status, error, isSuccess, isError }] = useProfileMutation()

  if (!token) navigate('/sign-in')

  let firstName, lastName

  useEffect(() => {
    profile()
  }, [profile, state])

  if (isSuccess) {
    ;({ firstName, lastName } = data['body'])
    dispatch(setFirstName({ firstName: firstName }))
  } else if (isError) {
    console.log(status)
    if ((error as any).data.message === 'User not Verified') {
      console.log('User not Verified')
    }
    console.log(error)
  }

  return (
    <React.Fragment>
      {/** *********** Profile Page ******************/}
      <main className='main bg-dark'>
        <div className='header'>
          <h1>
            Welcome back
            <br />
            {firstName + ' ' + lastName + ' !'}
          </h1>
          <Link to={'/user'}>
            <button className='edit-button'>Edit Name</button>
          </Link>
        </div>
        <h2 className='sr-only'>Accounts</h2>
        {allTransactions.map((transaction, index) => (
          <Transaction
            key={'' + index}
            title={transaction.title}
            amount={transaction.amount}
            description={transaction.description}
          ></Transaction>
        ))}
      </main>
    </React.Fragment>
  )
}

export default Profile
