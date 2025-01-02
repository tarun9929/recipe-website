import React, { useEffect, useRef } from 'react'
import meals from '../../MealApi/MealApi'
import { useSelector } from 'react-redux'
import { FoodList, Typography } from '../index';

function Likes() {
    const mealsData = useSelector((state) => state.api.likes);
    const [likeData , setLikedData] = React.useState([]);


    useEffect(() => {
        const res = meals.getMealById(mealsData)
        res.then((data) => {
            setLikedData(data);
        })
    })


    if(likeData.length) {
        return <FoodList food={likeData} />
    }
    else {
        return <Typography
            component={'h1'}
        >
            NO LIKE YET

        </Typography>
    }
}

export default Likes
