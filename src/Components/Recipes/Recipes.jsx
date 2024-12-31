import React from 'react'
import { useEffect, useState } from 'react'
import meals from '../../MealApi/MealApi'
import {MenuCard, Stack} from '../index';

function Recipes() {
    const [food, setFood] = useState([]);

    useEffect(() => {
        meals.getNumberOfMeals(10)
        .then((data) => {
            setFood(data);
            console.log(data)
            console.log(data[0].meals[0].strMealThumb);
        })
        .catch((error) => {
            console.log(error);
        })
    } , [])
    return (
        <>  
            <Stack
                direction={'row'}
                flexWrap={'wrap'}
                sx={{
                    justifyContent: 'center'
                }}
            >
                {
                    food.map((element , key) => {
                        return <MenuCard 
                            key={key}
                            name={element.meals[0].strCategory}
                            content={element.meals[0].strInstructions}
                            image={element.meals[0].strMealThumb}
                            styles={{
                                my:3,
                                mx:4
                            }}
                    /> 
                    })
                }
            </Stack>
        </>
    )
}

export default Recipes
