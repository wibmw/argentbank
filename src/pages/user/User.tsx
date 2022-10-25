import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useTypedSelector } from '../../redux/hooks/store'
import { useProfileMutation } from '../../redux/services/auth.service'

const User = () => {
  const { state } = useLocation()
  const { token } = useTypedSelector((state) => state.auth)
  const [profile, { data, status, error, isSuccess, isError }] = useProfileMutation()

  console.log(status)
  if (isError) {
    if ((error as any).data.message === 'User not Verified') {
      console.log(status)
      console.log(error)
    }
  }
  if (isSuccess) {
    console.log(status)
    console.log(data)
  }

  useEffect(() => {
    profile()
  }, [profile, state])

  return (
    <React.Fragment>
      {/** *********** Profile Page ******************/}
      <section>
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

export default User
