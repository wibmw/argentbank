import { Link } from 'react-router-dom'
import { useAppDispatch } from '../../redux/hooks/store'
import { setActiveAccount } from '../../redux/slices/auth.slice'
import { thousandsSeparator } from '../../utils/formatter'

const Account = (props: {
  id: number
  name: string
  balance: number
  currency: string
  description: string
  accountPage: boolean
}) => {
  const { id, name, balance, currency, description, accountPage } = props,
    dispatch = useAppDispatch()

  return (
    <>
      {/** *********** Account Informations ******************/}
      <section className={accountPage ? 'account' : 'account account-header'}>
        <div>
          {/** *********** Account Name ******************/}
          <h3 className='account-title'>{name}</h3>
          {/** *********** Account Balance ******************/}
          <p className='account-amount'>{currency + thousandsSeparator(balance)}</p>
          <p className='account-amount-description'>{description}</p>
        </div>
        {accountPage && (
          <div
            className='account-content-wrapper cta'
            onClick={() => {
              dispatch(setActiveAccount({ id }))
            }}
          >
            {/** *********** Link to Transactions details ******************/}

            <Link to={'/transactions'}>
              <button className='transaction-button'>View transactions</button>
            </Link>
          </div>
        )}
      </section>
    </>
  )
}

export default Account
