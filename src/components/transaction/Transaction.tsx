import moment from 'moment'
import React, { useState } from 'react'
import { thousandsSeparator } from '../../utils/formatter'

const Transaction = (props: { transaction: Transaction; balance }) => {
  const { createdAt: date, amount, currency, description, type, category, note } = props.transaction

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
        <svg className={isCollapsed ? 'chevron chevron-rotate' : 'chevron chevron-unrotate'} width='25' height='15'>
          <path
            d='M2.6635 0.859489L0.530579 3.00462L12.4605 14.9233L24.3904 2.99257L22.2575 0.859489L12.4605 10.6572L2.6635 0.859489Z'
            fill='grey'
          />
        </svg>
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
              <span>{'Transaction Type: ' + type}</span>
              {/** *********** Transaction Category ******************/}
              <span>
                {'Category: ' + category}{' '}
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' className='pen'>
                  <path d='M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z' />
                </svg>
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
