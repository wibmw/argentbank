import React, { useState } from 'react'
import { thousandsSeparator } from '../../utils/formatter'

const Transaction = (props: { transaction: Transaction }) => {
  const { updatedAt: date, amount, currency, description, balance, type, category, note } = props.transaction

  const [isCollapsed, setIsCollapsed] = useState(true)

  /** *********** Collapse Animation ******************/
  const transactionCollapse = (e) => {
    e.preventDefault()
    setIsCollapsed(!isCollapsed)
  }

  return (
    <React.Fragment>
      {/** *********** Transaction ******************/}
      <article className='transaction' onClick={transactionCollapse}>
        <i className={'fas fa-chevron-down ' + isCollapsed ? 'rotate-chevron' : 'unrotate-chevron'}></i>
        {/** *********** Top wrapper ******************/}
        <div className='transaction_top_wrapper'>
          {/** *********** Transaction date ******************/}
          <span>{date}</span>
          {/** *********** Transaction description ******************/}
          <span>{description}</span>
          {/** *********** Transaction Amount ******************/}
          <span>{currency + thousandsSeparator(amount)}</span>
          {/** *********** Transaction Balance ******************/}
          <span>{currency + thousandsSeparator(balance)}</span>
        </div>
        {/** *********** Bottom wrapper ******************/}
        {isCollapsed && (
          <div className='transaction_bottom_wrapper'>
            {/** *********** Transaction Type ******************/}
            <span>{'Transaction Type: ' + type}</span>
            {/** *********** Transaction Category ******************/}
            <span>
              {'Category: ' + category} <i className='fas fa-pen'></i>
            </span>
            {/** *********** Transaction Note ******************/}
            <span>
              {'Notes: ' + note} <i className='fas fa-pen'></i>
            </span>
          </div>
        )}
      </article>
    </React.Fragment>
  )
}

// Transaction Interface
export interface Transaction {
  id: number
  amount: number
  currency: string
  description: string
  balance: number
  type: string
  category: string
  note: string
  createdAt: string
  updatedAt: string
}

export default Transaction
