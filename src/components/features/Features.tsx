import React from 'react'
import { allFeatures } from '../../utils/localDatas'
import FeaturesItem from './FeaturesItem'

const Features = () => {
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
