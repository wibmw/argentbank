import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../../redux/hooks/store'
import { INames, useProfileMutation } from '../../redux/services/auth.service'
import { setFirstName } from '../../redux/slices/auth.slice'
import { allAccounts } from '../../utils/localDatas'
import Account from '../../components/account/Account'

const Profile = () => {
  const dispatch = useAppDispatch(),
    // Get User Names
    [names, setNames] = useState<INames>({ firstName: 'test', lastName: '' }),
    // Get Profile Info
    [profile, { data, status, error, isSuccess, isError }] = useProfileMutation()

  useEffect(() => {
    profile()
    if (isSuccess) {
      // If success get datas
      const { firstName, lastName } = data['body']
      dispatch(setFirstName({ firstName: firstName }))
      setNames({ firstName, lastName })
    } else if (isError) {
      // Else show error message in console
      console.log(status)
      if ((error as any).data.message === 'User not Verified') {
        console.log('User not Verified')
      }
      console.log(error)
    }
  }, [isSuccess, isError, names])

  return (
    <>
      {/** *********** Profile Page ******************/}
      <main className='main bg-dark'>
        <div className='header'>
          <h1>
            Welcome back
            <br />
            {/** *********** Display name ******************/}
            {names.firstName + ' ' + names.lastName + ' !'}
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
    </>
  )
}

export default Profile
