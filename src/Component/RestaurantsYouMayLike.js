import React from 'react'
import './RestaurantsYouMayLike.css'

const RestaurantsYouMayLike = () => {

    const RestaurantsImg = [
        {
            id: 1,
            src: require('../Images/burger-king.avif'),
            name: 'Burger king'
        },
        {
            id: 2,
            src: require('../Images/starbucks.webp'),
            name: 'Starbucks'

        },
        {
            id: 3,
            src: require('../Images/mcdonalds.png'),
            name: 'Mcdonalds'
        },
        {
            id: 4,
            src: require('../Images/Kwality-Walls.avif'),
            name: 'Kwality Walls'

        },
        {
            id: 5,
            src: require('../Images/arsalan.avif'),
            name: 'Arsalan'
        },
        {
            id: 6,
            src: require('../Images/costa-coffee.webp'),
            name: 'Costa Coffee'
        },
        {
            id: 7,
            src: require('../Images/dominos-pizza.avif'),
            name: 'Dominos Pizza'
        },
        {
            id: 8,
            src: require('../Images/wow-momos.avif'),
            name: 'Wow Momos'
        },
        {
            id: 9,
            src: require('../Images/pizza-hut.avif'),
            name: 'Pizza Hut'
        },
        {
            id: 10,
            src: require('../Images/kfc.avif'),
            name: 'KFC'
        },
        

    ];


    const shuffledRestaurants = RestaurantsImg.sort(() => 0.5 - Math.random());
    const randomRestaurants = shuffledRestaurants.slice(0, 5);


    return (
        <>
            <>
                <div className='restaurantsYouMayLike'>
                    <p>Restaurants you may like</p>
                    <div className='restaurants-container'>
                        {randomRestaurants.map((restaurant) => (
                            <div className='restaurants-card' key={restaurant.id}>
                                <img src={restaurant.src} alt='' />
                                <p> {restaurant.name} </p>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        </>
    )
}

export default RestaurantsYouMayLike