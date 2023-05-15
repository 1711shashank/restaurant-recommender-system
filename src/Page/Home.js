import React from 'react'
import './Home.css'
import RestaurantsYouMayLike from '../Component/RestaurantsYouMayLike'
import RestaurantsByName from '../Component/RestaurantsByName'
import RestaurantsByLocation from '../Component/RestaurantsByLocation'

const Home = () => {

    const handalClick = () => {
        
    }


    return (
        <>
            <div className='home'>
                <div className='home-nav'>
                    <p>Where To ?</p>
                    <div>
                        <p className='nav-login-button' onClick={handalClick}> Log In</p>
                    </div>
                </div>
                <div className='home-body'>
                    <div className='home-body-top'>
                        <RestaurantsYouMayLike />
                    </div>
                    <div className='home-body-buttom'>
                        <RestaurantsByName />
                        <RestaurantsByLocation />
                    </div>

                </div>

            </div>
        </>
    )
}

export default Home