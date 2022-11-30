import React, { useEffect } from 'react'
import { Link, useLocation, useLoaderData } from 'react-router-dom'
import { useAppDispatch } from '../../redux/hooks/store'
import { useProfileMutation } from '../../redux/services/auth.service'
import { setFirstName } from '../../redux/slices/auth.slice'
import { allAccounts } from '../../utils/localDatas'
import Account from '../../components/account/Account'

const Profile = () => {
  const dispatch = useAppDispatch(),
    { state } = useLocation(),
    // Get profile Info
    [profile, { data, status, error, isSuccess, isError }] = useProfileMutation()

  let firstName, lastName
  async () => profile()
  useEffect(() => {
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
  }, [isSuccess, isError])
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
        {allAccounts.map((account, index) => (
          <Account
            key={account.id + '-' + index}
            id={account.id}
            name={account.name}
            balance={account.balance}
            currency={account.currency}
            description={account.description}
            accountPage={true}
          ></Account>
        ))}
      </main>
    </React.Fragment>
  )
}

export default Profile
