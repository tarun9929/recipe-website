import React from 'react'
import { Stack , MenuCard} from '../index'
import { useNavigate } from 'react-router-dom'

function FoodList({food , styles}) {
    const navigate = useNavigate();

    function handleShowContent(target) {
        // console.log(target.meals[0].idMeal)
        navigate(`/recipes/content/${target.meals[0].idMeal}` , {state: target.meals})
    }
    return (
        <Stack
            direction={'row'}
            flexWrap={'wrap'}
            sx={{
                justifyContent: 'center',
                ...styles
            }}
        >
            {
                food.map((element, key) => {
                    return <MenuCard
                        key={key}
                        name={element.meals[0].strCategory}
                        content={element.meals[0].strInstructions}
                        image={element.meals[0].strMealThumb}
                        styles={{
                            my: 3,
                            mx: 4
                        }}
                        onClickHandlar={() => handleShowContent(element)}
                    />
                })
            }
        </Stack>
    )
}

export default FoodList
