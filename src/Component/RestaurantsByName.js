import React from 'react'
import './RestaurantsByName.css'
import SearchByName from '../Images/search-name.svg'

const RestaurantsByName = () => {
    return (
        <div className='RestaurantsByName'>
            <div className='RestaurantsByName-top'>
                <input class="input-container search-bar" type="text" placeholder='Search By Restaurant' required="" />
                <button type="button" class="login-button  search-button">Search</button>
            </div>
            <div className='RestaurantsByName-bottom'>
                <img src={SearchByName} alt='' className='search-img'/>
            </div>
        </div>
    )
}

export default RestaurantsByName