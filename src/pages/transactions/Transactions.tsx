import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAppDispatch, useTypedSelector } from '../../redux/hooks/store'
import { useProfileMutation } from '../../redux/services/auth.service'
import { setFirstName } from '../../redux/slices/auth.slice'
import { allAccounts, allTransactions, getLocalToken } from '../../utils/localDatas'
import Account from '../../components/account/Account'
import Transaction from '../../components/transaction/Transaction'
import { IAccount } from '../../redux/services/transaction.service'

const Transactions = () => {
  const dispatch = useAppDispatch(),
    navigate = useNavigate(),
    token = getLocalToken(),
    { accountId } = useTypedSelector((state) => state.auth),
    selectedAccount: IAccount | undefined = allAccounts.find((account) => account.id === accountId)

  let newBalance = selectedAccount.balance
  console.log(newBalance)
  // If not connected, navigate to the signIn page
  if (!token) navigate('/sign-in')

  return (
    <React.Fragment>
      {/** *********** Profile Page ******************/}
      <section className='main bg-dark'>
        <div className='header'>
          {/** *********** Account ******************/}
          {selectedAccount && (
            <Account
              id={selectedAccount.id}
              name={selectedAccount.name}
              balance={selectedAccount.balance}
              currency={selectedAccount.currency}
              description={selectedAccount.description}
              accountPage={false}
            ></Account>
          )}
        </div>
        {/** ***********  Transactions Table  ******************/}
        <main className='transactions_table'>
          <header className='table_header'>
            <th className='col-1'>DATE</th>
            <th className='col-2'>DESCRIPTION</th>
            <th className='col-3'>AMOUNT</th>
            <th className='col-4'>BALANCE</th>
          </header>
          <div className='table_wrapper'>
            {/** *********** Transactions details ******************/}
            {/**  date, amount, currency, description, balance, type, category, note */}
            {allTransactions.map((transaction, index) => {
              if(transaction.accountId == accountId)newBalance -= transaction.amount
              console.log(newBalance)
              return (
                transaction.accountId == accountId && (
                  <Transaction
                    key={transaction.id + '-' + index}
                    transaction={transaction}
                    balance={newBalance}
                  ></Transaction>
                )
              )
            })}
          </div>
        </main>
      </section>
    </React.Fragment>
  )
}

export default Transactions
