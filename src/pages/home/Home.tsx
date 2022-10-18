import React from 'react'
import Hero from '../../components/hero/Hero'
import Features from '../../components/features/Features'

const Home = () => {
  return (
    <React.Fragment>
      {/** *********** Home Page ******************/}
      <section id=''>
        <Hero />
        <Features />
      </section>
    </React.Fragment>
  )
}
export default Home
