import Cookies from 'universal-cookie'
import { expiresDate } from './formatter'

// Return the stocked token from cookies
export const getLocalToken = () => {
  const cookie = new Cookies()
  return cookie.get('token')
}

// Put the new token in cookies
export const setLocalToken = (token: string, rememberMe: boolean) => {
  const cookie = new Cookies(),
    options = { path: '/', expires: expiresDate(rememberMe ? 395 * 24 : 0.5) }
  cookie.set('token', token, options)
}

// Features Datas
export const allFeatures = [
  {
    icon: 'Cat',
    title: 'You are our #1 priority',
    content: `Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than
        5 minutes.`,
  },
  {
    icon: 'Money',
    title: 'More savings means higher rates',
    content: 'The more you save with us, the higher your interest rate will be!',
  },
  {
    icon: 'Security',
    title: 'Security you can trust',
    content: 'We use top of the line encryption to make sure your data and money is always safe.',
  },
]

// Accounts Datas
export const allAccounts = [
  {
    id: 1,
    userId: 1,
    name: 'Argent Bank Checking (x8349)',
    balance: 2082.79,
    currency: '$',
    description: 'Available Balance',
  },
  {
    id: 2,
    userId: 1,
    name: 'Argent Bank Savings (x6712)',
    balance: 10928.42,
    currency: '$',
    description: 'Available Balance',
  },
  {
    id: 3,
    userId: 1,
    name: 'Argent Bank Credit Card (x8349)',
    balance: 184.3,
    currency: '$',
    description: 'Current Balance',
  },
]

// Transactions Datas
export const allTransactions = [
  {
    id: 1,
    accountId: 1,
    description: 'Golden Sun Bakery',
    amount: 5,
    currency: '$',
    type: 'Restaurant',
    category: 'Food',
    note: 'Breakfast',
    createdAt: '2022-11-11T10:20:30Z',
    updatedAt: '2022-11-11T10:20:30Z',
  },
  {
    id: 2,
    accountId: 1,
    description: 'Air France',
    amount: 10,
    currency: '$',
    type: 'Travel',
    category: 'Fly',
    note: 'Paris - Montpellier',
    createdAt: '2022-11-12T10:20:30Z',
    updatedAt: '2022-11-12T10:20:30Z',
  },
  {
    id: 3,
    accountId: 1,
    description: 'High-Tech Store',
    amount: 200,
    currency: '$',
    type: 'Electronic',
    category: 'Phone',
    note: 'Samsung S200',
    createdAt: '2022-11-13T10:20:30Z',
    updatedAt: '2022-11-13T10:20:30Z',
  },
  {
    id: 4,
    accountId: 2,
    description: 'Golden Sun Bakery',
    amount: 5,
    currency: '$',
    type: 'Restaurant',
    category: 'Food',
    note: 'Breakfast',
    createdAt: '2022-12-11T10:20:30Z',
    updatedAt: '2022-12-11T10:20:30Z',
  },
  {
    id: 5,
    accountId: 2,
    description: 'Air France',
    amount: 10,
    currency: '$',
    type: 'Travel',
    category: 'Fly',
    note: 'Paris - Montpellier',
    createdAt: '2022-12-14T10:20:30Z',
    updatedAt: '2022-12-14T10:20:30Z',
  },
  {
    id: 6,
    accountId: 2,
    description: 'High-Tech Store',
    amount: 200,
    currency: '$',
    type: 'Electronic',
    category: 'Phone',
    note: 'Samsung S200',
    createdAt: '2022-12-17T10:20:30Z',
    updatedAt: '2022-12-17T10:20:30Z',
  },
  {
    id: 7,
    accountId: 3,
    description: 'Golden Sun Bakery',
    amount: 5,
    currency: '$',
    type: 'Restaurant',
    category: 'Food',
    note: 'Breakfast',
    createdAt: '2022-10-16T10:20:30Z',
    updatedAt: '2022-10-16T10:20:30Z',
  },
  {
    id: 8,
    accountId: 3,
    description: 'Air France',
    amount: 10,
    currency: '$',
    type: 'Travel',
    category: 'Fly',
    note: 'Paris - Montpellier',
    createdAt: '2022-10-11T10:20:30Z',
    updatedAt: '2022-10-11T10:20:30Z',
  },
  {
    id: 9,
    accountId: 3,
    description: 'High-Tech Store',
    amount: 200,
    currency: '$',
    type: 'Electronic',
    category: 'Phone',
    note: 'Samsung S200',
    createdAt: '2022-10-01T10:20:30Z',
    updatedAt: '2022-10-01T10:20:30Z',
  },
]
