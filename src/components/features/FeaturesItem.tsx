import React from 'react'
import catIcon from '../../assets/img/icon-chat.png'
import moneyIcon from '../../assets/img/icon-money.png'
import securityIcon from '../../assets/img/icon-security.png'

const FeaturesItem = (props: { title: string; content: string; imgName: string }) => {
  const icon = () => {
    switch (props.imgName) {
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
        <img src={icon()} alt={`${props.imgName} Icon`} className='feature-icon' />
        <h3 className='feature-item-title'>{props.title}</h3>
        <p>{props.content}</p>
      </div>
    </React.Fragment>
  )
}
export default FeaturesItem
