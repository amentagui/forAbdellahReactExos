import React, { useEffect, useState } from 'react'
import './ThemeCard.css'
// import img1 from './images/icon-work.svg'
const ThemeCard = ({theme,timeframe}) => {
  const [timeprefix,setPrefix]=useState("")
  useEffect(()=>{
    switch (timeframe) {
      case "daily":
        setPrefix("Yesterday - ")
        break;
      case "weekly":
        setPrefix("Last Week - ")
        break;
      default:
        setPrefix("Last Month - ")
        break;
    }
  },[timeframe])
  return (
   
    <div className='card-container'>
     <div className='card-back' style={{backgroundColor: theme.backColor}}>
      <img src={require(`${theme.image}`)} alt=''/>
     </div>
     <div className='card-wrap'>
        <div className='theme-container'>
          <h5 className='theme'>{theme.title}</h5>
          <span>...</span>
        </div>
        <h1 className='current-duration'>{theme.timeframes[timeframe].current} hrs</h1>
        <h6 className='previous-duration'>{timeprefix} {theme.timeframes[timeframe].previous} hrs</h6>
     </div>
    </div>
  )
}

export default ThemeCard