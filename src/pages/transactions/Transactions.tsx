import React from 'react'
import { useTypedSelector } from '../../redux/hooks/store'
import { allAccounts, allTransactions } from '../../utils/localDatas'
import Account from '../../components/account/Account'
import Transaction from '../../components/transaction/Transaction'
import { IAccount } from '../../redux/services/transaction.service'

const Transactions = () => {
  const { accountId } = useTypedSelector((state) => state.auth),
    selectedAccount: IAccount | undefined = allAccounts.find((account) => account.id === accountId)

  let newBalance = selectedAccount.balance

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
          <div className='table_header'>
            <span className='col-1'>DATE</span>
            <span className='col-2'>DESCRIPTION</span>
            <span className='col-3'>AMOUNT</span>
            <span className='col-4'>BALANCE</span>
          </div>
          <div className='table_wrapper'>
            {/** *********** Transactions details ******************/}
            {/**  date, amount, currency, description, balance, type, category, note */}
            {allTransactions.map((transaction, index) => {
              if (transaction.accountId == accountId) newBalance -= transaction.amount
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
