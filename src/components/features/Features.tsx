import { allFeatures } from '../../utils/localDatas'
import FeaturesItem from './FeaturesItem'

const Features = () => {
  return (
    <>
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
    </>
  )
}
export default Features
