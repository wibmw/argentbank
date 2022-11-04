import React from 'react'
import catIcon from '../../assets/img/icon-chat.png'
import moneyIcon from '../../assets/img/icon-money.png'
import securityIcon from '../../assets/img/icon-security.png'

const FeaturesItem = (props: { title: string; content: string; imgName: string }) => {
  const { title, content, imgName } = props
  const icon = () => {
    switch (imgName) {
      case 'Cat':
        return catIcon
      case 'Money':
        return moneyIcon
      case 'Security':
        return securityIcon
      default:
        return catIcon
    }
  }

  return (
    <React.Fragment>
      {/** *********** Feature's Item Section ******************/}
      <div className='feature-item'>
        <img src={icon()} alt={`${imgName} Icon`} className='feature-icon' />
        <h3 className='feature-item-title'>{title}</h3>
        <p>{content}</p>
      </div>
    </React.Fragment>
  )
}
export default FeaturesItem
