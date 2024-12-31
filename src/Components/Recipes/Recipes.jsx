import React from 'react'
import { useEffect, useState } from 'react'
import meals from '../../MealApi/MealApi'
import { MenuCard, Stack, CircularProgress, ColorPaletter, Container } from '../index';

function Recipes() {
    const [food, setFood] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        meals.getNumberOfMeals(10)
            .then((data) => {
                setFood(data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            })
    }, [])

    if (loading) {
        return (
            <Container sx={{
                my: 30 ,
                display: 'flex',
                justifyContent: 'center'
            }}>
                <ColorPaletter children={
                    <CircularProgress size="3rem" sx={{ color: 'primary.main' }} />
                }
                />
            </Container>
        )
    }
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
        </>
    )
}

export default Recipes
