import moment from 'moment'
import React, { useState } from 'react'
import { thousandsSeparator } from '../../utils/formatter'

const Transaction = (props: { transaction: Transaction; balance }) => {
  const { createdAt: date, amount, currency, description, type, category, note } = props.transaction

  const [isCollapsed, setIsCollapsed] = useState(false)

  /** *********** Collapse Animation ******************/
  const transactionCollapse = (e) => {
    e.preventDefault()
    setIsCollapsed(!isCollapsed)
  }

  return (
    <React.Fragment>
      {/** *********** Transaction ******************/}
      <article className='transaction' onClick={transactionCollapse}>
        <i className={`fas fa-chevron-down chevron ${isCollapsed ? 'chevron-rotate' : 'chevron-unrotate'}`}></i>
        <div className='transaction_wrapper'>
          {/** *********** Top wrapper ******************/}
          {/** *********** Transaction date ******************/}
          <span className='col col-1'>{moment(date).format('MMMM Do YYYY')}</span>
          {/** *********** Transaction description ******************/}
          <span className='col col-2'>{description}</span>
          {/** *********** Transaction Amount ******************/}
          <span className='col col-3'>{currency + thousandsSeparator(amount)}</span>
          {/** *********** Transaction Balance ******************/}
          <span className='col col-4'>{currency + thousandsSeparator(props.balance)}</span>
          {/** *********** Bottom wrapper ******************/}
          {isCollapsed && (
            <div className='transaction_wrapper_bottom'>
              {/** *********** Transaction Type ******************/}
              <span>{'Transaction Type: ' + type + ' '}</span>
              {/** *********** Transaction Category ******************/}
              <span>
                {'Category: ' + category + ' '} <i className='fas fa-pen'></i>
              </span>
              {/** *********** Transaction Note ******************/}
              <span>
                {'Notes: ' + note} <i className='fas fa-pen'></i>
              </span>
            </div>
          )}
        </div>
      </article>
    </React.Fragment>
  )
}

// Transaction Interface
export interface Transaction {
  id: number
  accountId: number
  amount: number
  currency: string
  description: string
  type: string
  category: string
  note: string
  createdAt?: string
  updatedAt?: string
}

export default Transaction
