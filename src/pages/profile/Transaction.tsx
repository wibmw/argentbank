import React from 'react'
import { thousandsSeparator } from '../../utils/formatter'

const Transaction = (props: { title: string; amount: number; description: string }) => {
  const { title, amount, description } = props
  return (
    <React.Fragment>
      {/** *********** Transaction Page ******************/}
      <section className='account'>
        <div className='account-content-wrapper'>
          <h3 className='account-title'>{title}</h3>
          <p className='account-amount'>{'$ ' + thousandsSeparator(amount)}</p>
          <p className='account-amount-description'>{description}</p>
        </div>
        <div className='account-content-wrapper cta'>
          <button className='transaction-button'>View transactions</button>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Transaction
