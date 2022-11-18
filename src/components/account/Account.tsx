import React from 'react'
import { Link } from 'react-router-dom'
import { thousandsSeparator } from '../../utils/formatter'

const Account = (props: { id: number; name: string; balance: number; currency: string; description: string }) => {
  const { id, name, balance, currency, description } = props
  return (
    <React.Fragment>
      {/** *********** Account ******************/}
      <section className='account'>
        <div className='account-content-wrapper'>
          {/** *********** Account Name ******************/}
          <h3 className='account-title'>{name}</h3>
          {/** *********** Account Balance ******************/}
          <p className='account-amount'>{currency + thousandsSeparator(balance)}</p>
          <p className='account-amount-description'>{description}</p>
        </div>
        <div className='account-content-wrapper cta'>
          {/** *********** Button to Transactions details ******************/}
          <Link to={'/transactions'} className='main-nav-item'>
            <button className='transaction-button'>View transactions</button>
          </Link>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Account
