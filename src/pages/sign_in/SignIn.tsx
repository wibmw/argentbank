import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const SignIn = () => {
  return (
    <React.Fragment>
      {/** *********** Sign In Page ******************/}
      <main className='main bg-dark'>
        <section className='sign-in-content'>
          <i className='fa fa-user-circle sign-in-icon'></i>
          <h1>Sign In</h1>
          <form>
            <div className='input-wrapper'>
              <label htmlFor='username'>Username</label>
              <input type='text' id='username' />
            </div>
            <div className='input-wrapper'>
              <label htmlFor='password'>Password</label>
              <input type='password' id='password' />
            </div>
            <div className='input-remember'>
              <input type='checkbox' id='remember-me' />
              <label htmlFor='remember-me'>Remember me</label>
            </div>
            {/** PLACEHOLDER DUE TO STATIC SITE */}
            <a href='./user.html' className='sign-in-button'>
              Sign In
            </a>
            {/** SHOULD BE THE BUTTON BELOW */}
            {/** <!-- <button class="sign-in-button">Sign In</button> --> */}
          </form>
        </section>
      </main>
    </React.Fragment>
  )
}
export default SignIn
