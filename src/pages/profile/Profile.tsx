import React from 'react'
import { useProfileMutation } from '../../redux/services/auth.service'

const Profile = () => {
  const [attemptAccess, { data, error, isLoading }] = useProfileMutation()

  return (
    <React.Fragment>
      {/** *********** Profile Page ******************/}
      <section>
        <button onClick={() => attemptAccess()} disabled={isLoading}>
          Make an authenticated request
        </button>
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
