import Cookies from 'universal-cookie'
import { expiresDate } from './formatter'

export const getLocalToken = () => {
  const cookie = new Cookies()
  return cookie.get('token')
}

export const setLocalToken = (token: string, rememberMe: boolean) => {
  const cookie = new Cookies(),
    options = { path: '/', expires: expiresDate(rememberMe ? 395 * 24 : 0.5) }
  cookie.set('token', token, options)
}

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

export const allTransactions = [
  {
    title: 'Argent Bank Checking (x8349)',
    amount: 2082.79,
    description: 'Available Balance',
  },
  {
    title: 'Argent Bank Savings (x6712)',
    amount: 10928.42,
    description: 'Available Balance',
  },
  {
    title: 'Argent Bank Credit Card (x8349)',
    amount: 184.3,
    description: 'Current Balance',
  },
]
