import { useState } from 'react';
import './App.css';
import ThemeCard from './ThemeCard';
import trackingData from './data.json'
import Profile from './Profile';
function App() {
  const [timefr,setTimefr]=useState("daily")
function changeTimeFrame(e){
    setTimefr(e.target.className)
     }
  return (
    <div className='main-track'>
        <Profile fn={changeTimeFrame}/>
        <div className='tracker-container'>
          {trackingData.map((el,i)=>{
            return <ThemeCard key={i} theme={el} timeframe={timefr}/>
          })}
        </div>
   </div>
  );
}

export default App;
