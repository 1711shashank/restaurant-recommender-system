import React from 'react'
import './RestaurantsByLocation.css'
import SearchByLocation from '../Images/search-location.svg'


const RestaurantsByLocation = () => {
  return (
    <div className='RestaurantsByLocation'>
      <div className='RestaurantsByLocation-top'>
        <input class="input-container search-bar" type="text" placeholder='Search By Location' required="" />
        <button type="button" class="login-button  search-button">Search</button>
      </div>
      <div className='RestaurantsByLocation-bottom'>
                <img src={SearchByLocation} alt='' className='search-img'/>
            </div>
    </div>
  )
}

export default RestaurantsByLocation