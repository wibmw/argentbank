import React from 'react'
import { useTypedSelector } from '../../redux/hooks/store'
import { useLoginMutation } from '../../redux/services/auth.service'

const Profile = () => {
    const { token } = useTypedSelector((state) => state.auth)
  const [login, { data, status, isLoading, error }] = useLoginMutation()
    console.log(token)
  return (
    <React.Fragment>
      {/** *********** Profile Page ******************/}
      <section>
        <button disabled={isLoading}>Make an authenticated request</button>
        {data ? (
          <>
            Data:
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </>
        ) : error ? (
          <>
            Error: <pre>{JSON.stringify(error, null, 2)}</pre>
          </>
        ) : null}
      </section>
    </React.Fragment>
  )
}

export default Profile
