import React from 'react';
import './Header.css';
import Slider from './Slider';
import { Link } from 'react-router-dom';



const header = () => {
  return (
    <div className='Header'>
        <div className='left_part'>
            <h1>Social Media Dashboard</h1>
            <span>Total Followers: 23,004</span>
        </div>
        <div className='middle-part'>
          <Link to={'/add-new-card'}>
            Add New Card Page
          </Link>
        </div>
        <div className='right_part'>
            <span className='dark-mode'>Dark Mode</span>
            <Slider />
        </div>
    </div>
  )
}

export default header