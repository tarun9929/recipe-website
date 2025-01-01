import React from 'react'
import { useEffect, useState } from 'react'
import { Button, CircularProgress, ColorPaletter, Container, FoodList } from '../index';
import PropTypes from 'prop-types'
import meals from '../../MealApi/MealApi';
import {setData} from '../../features/apiDataSlice';
import { useDispatch, useSelector } from 'react-redux';

function Recipes({ useHook, numberOfMeals }) {

    useHook(numberOfMeals);

    const dispatch = useDispatch();

    const loading = useSelector((state) => state.api.isLoading);
    const food = useSelector((state) => state.api.data);

    function handleMoreContent() {
        dispatch(setData({
            data: [],
            isLoading: true
        }))
        meals.getNumberOfMeals(numberOfMeals)
            .then((data) => {
                // console.log([...food, ...data])
                console.log(data)
                dispatch(setData({
                    data,
                    isLoading: false
                }))
            })
            .catch((error) => {
                console.log(error);
                dispatch(setData({
                    isLoading: false,
                    error
                }))
            })
    }

    return (
        <>

            <>
                <FoodList
                    food={food}
                />
                
            </>

            {
                loading ? 
                <Container sx={{
                    my: 10,
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <ColorPaletter children={
                        <CircularProgress size="3rem" sx={{ color: 'primary.main' }} />
                    }
                    />
                </Container>:
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
            }
            


        </>
    )
}

Recipes.propTypes = {
    useHook: PropTypes.func.isRequired,
    numberOfMeals: PropTypes.number.isRequired
};

export default Recipes
