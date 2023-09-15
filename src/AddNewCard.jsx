import React , {useState} from 'react'
import {useNavigate } from 'react-router-dom';
import {data} from './data';

function AddNewCard() {
  const [numOfFollowers, setNumOfFollowers] = useState(0);
  const [followers, setFollowers] = useState('FOLLOWERS');
  const [today, setToday] = useState(0);
  const [profile, setProfile] = useState('@nathanf');

  const navigate = useNavigate();

  function addNewCardHandler() {
    data.push({
      icon: 'Icon',
      profile: profile,
      numOfFollowers: Number(numOfFollowers),
      followers: followers,
      today: today
    })

    navigate('/', {replace: true})
  }
  return (
    <div className='container'>
      <input 
        type="text"
        value={numOfFollowers} 
        onChange={(e) => setNumOfFollowers(e.target.value)} 
        placeholder='enter number of Follewers'
      />
      <input 
        type="text" 
        value={followers} 
        onChange={(e) => setFollowers(e.target.value)}
        placeholder='enter Followers'/>
      <input 
        type="text" 
        value={today} 
        placeholder='enter your name'
        onChange={(e) => setToday(e.target.value)}
      />
      <input 
        type="text" 
        value={profile} 
        placeholder='enter your name'
        onChange={(e) => setProfile(e.target.value)}
      />
      <button onClick={addNewCardHandler}>
        Add New Card
      </button>
    </div>
  )
}

export default AddNewCard