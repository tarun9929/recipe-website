import React from 'react'
import { Stack , MenuCard} from '../index'

function FoodList({food , styles}) {
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
                    />
                })
            }
        </Stack>
    )
}

export default FoodList
