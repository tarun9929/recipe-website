import React from 'react'
import { useEffect, useState } from 'react'
import { CircularProgress, ColorPaletter, Container, FoodList } from '../index';
import PropTypes from 'prop-types'

function Recipes({useHook , numberOfMeals}) {

    const [food , setFood , loading , setLoading] = useHook(numberOfMeals);

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
            <FoodList 
                food={food} 
            />
            {/* <Stack
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
            </Stack> */}
        </>
    )
}

Recipes.propTypes = {
    useHook: PropTypes.func.isRequired,
    numberOfMeals: PropTypes.number.isRequired
};

export default Recipes
