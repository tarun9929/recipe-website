import React from 'react'
import { useEffect, useState } from 'react'
import { Button, CircularProgress, ColorPaletter, Container, FoodList } from '../index';
import PropTypes from 'prop-types'
import meals from '../../MealApi/MealApi';

function Recipes({ useHook, numberOfMeals }) {

    const [food, setFood, loading, setLoading] = useHook(numberOfMeals);

    function handleMoreContent() {
        setLoading(true)
        meals.getNumberOfMeals(numberOfMeals)
            .then((data) => {
                // console.log([...food, ...data])
                setFood([...food, ...data]);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            })
    }

    return (
        <>
            {
                !loading ?
                    (
                        <>
                            <FoodList
                                food={food}
                            />
                            <ColorPaletter children={
                                <Button
                                    sx={{
                                        margin: 'auto',
                                        display: 'block',
                                        my: 3,
                                        background: 'primary.main'
                                    }}
                                    variant='contained'
                                    onClick={handleMoreContent}
                                >More</Button>
                            } />
                        </>
                    ) :
                    <Container sx={{
                        my: 10,
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        <ColorPaletter children={
                            <CircularProgress size="3rem" sx={{ color: 'primary.main' }} />
                        }
                        />
                    </Container>

            }


        </>
    )
}

Recipes.propTypes = {
    useHook: PropTypes.func.isRequired,
    numberOfMeals: PropTypes.number.isRequired
};

export default Recipes
