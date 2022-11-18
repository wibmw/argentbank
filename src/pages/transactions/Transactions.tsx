import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../redux/hooks/store'
import { useProfileMutation } from '../../redux/services/auth.service'
import { setFirstName } from '../../redux/slices/auth.slice'
import { allAccounts, getLocalToken } from '../../utils/localDatas'
import Account from '../../components/account/Account'

const Transactions = () => {
  const dispatch = useAppDispatch(),
    navigate = useNavigate(),
    { state } = useLocation(),
    token = getLocalToken(),
    // Get profile Info
    [profile, { data, status, error, isSuccess, isError }] = useProfileMutation()

  // If not connected, navigate to the signIn page
  if (!token) navigate('/sign-in')

  let firstName, lastName

  useEffect(() => {
    profile()
  }, [profile, state])

  if (isSuccess) {
    // If success get datas
    ;({ firstName, lastName } = data['body'])
    dispatch(setFirstName({ firstName: firstName }))
  } else if (isError) {
    // Else show error message in console
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
            {/** *********** Display name ******************/}
            {firstName + ' ' + lastName + ' !'}
          </h1>
          <Link to={'/user'}>
            {/** ***********  Edit Button  ******************/}
            <button className='edit-button'>Edit Name</button>
          </Link>
        </div>
        <h2 className='sr-only'>Accounts</h2>
        {/** *********** Display Accounts ******************/}
        {allAccounts.map((transaction, index) => (
          <Account
            key={transaction.id + '-' + index}
            id={transaction.id}
            name={transaction.name}
            balance={transaction.balance}
            currency={transaction.currency}
            description={transaction.description}
          ></Account>
        ))}
      </main>
    </React.Fragment>
  )
}

export default Transactions
