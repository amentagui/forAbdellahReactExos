import React from 'react'
import './Profile.css'
import profileimg from './images/image-jeremy.png'
const Profile = ({fn}) => {
 
  return (
 
      <div className='tracking-timeframes'>
        <div className='profile-identity'>
          <img  src = {profileimg} alt="jeremy"/>
          <p>Report For</p>
          <h1>Jeremy<br/>
          Robson</h1>
        </div>
        <ul>
          <li className='daily' onClick={(e)=>{fn(e)}}>Daily</li>
          <li className='weekly' onClick={(e)=>{fn(e)}}>Weekly</li>
          <li className='monthly' onClick={(e)=>{fn(e)}}>Monthly</li>
        </ul>
      </div>

  )
}

export default Profile