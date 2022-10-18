import React from 'react'
import FeaturesItem from './FeaturesItem'



const Features = () => {
  const allFeatures = [
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

  return (
    <React.Fragment>
      {/** *********** Features Section ******************/}
      <section className='features'>
        <h2 className='sr-only'>Features</h2>
        {allFeatures.map((feature, index) => (
          <FeaturesItem
            key={`${feature.icon}-${index}`}
            imgName={feature.icon}
            title={feature.title}
            content={feature.content}
          />
        ))}
      </section>
    </React.Fragment>
  )
}
export default Features
