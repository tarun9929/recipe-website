import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Stack, Container, Typography, Box } from '../index';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/FavoriteBorder';

function Content() {
    const location = useLocation();
    const data = location.state[0];

    const [like, setLike] = React.useState(false);

    const Ingredients = [
        data.strIngredient1,
        data.strIngredient2,
        data.strIngredient3,
        data.strIngredient4,
        data.strIngredient5,
        data.strIngredient6,
        data.strIngredient7,
        data.strIngredient8,
        data.strIngredient9,
        data.strIngredient10,
        data.strIngredient11,
        data.strIngredient12,
        data.strIngredient13,
        data.strIngredient14,
        data.strIngredient15,
        data.strIngredient16,
        data.strIngredient17,
        data.strIngredient18,
        data.strIngredient19,
        data.strIngredient20,
    ]

    const Measures = [
        data.strMeasure1,
        data.strMeasure2,
        data.strMeasure3,
        data.strMeasure4,
        data.strMeasure5,
        data.strMeasure6,
        data.strMeasure7,
        data.strMeasure8,
        data.strMeasure9,
        data.strMeasure10,
        data.strMeasure11,
        data.strMeasure12,
        data.strMeasure13,
        data.strMeasure14,
        data.strMeasure15,
        data.strMeasure16,
        data.strMeasure17,
        data.strMeasure18,
        data.strMeasure19,
        data.strMeasure20
    ]

    return (
        <>
            <Container
                sx={{
                    my: 3
                }}
            >
                <Box>
                    <img
                        src={data.strMealThumb}
                        alt=""
                        style={{
                            width: '100%'
                        }}
                        height={800}
                    />
                </Box>
                <Typography
                    variant='h6'
                    component={'h3'}
                    mt={6}
                >
                    Id :
                </Typography>
                <Typography
                    component={'span'}
                >
                    {data.idMeal}
                </Typography>
                <Typography
                    variant='h6'
                    component={'h3'}
                    mt={2}
                >
                    Area :
                </Typography>
                <Typography
                    component={'span'}
                >
                    {data.strArea}
                </Typography>
                <Typography
                    variant='h6'
                    component={'h3'}
                    mt={2}
                >
                    Category :
                </Typography>
                <Typography
                    component={'span'}
                >
                    {data.strCategory}
                </Typography>
                <Typography
                    variant='h6'
                    component={'h3'}
                    my={2}
                >
                    ingredients :
                </Typography>
                <Typography
                    component={'p'}
                    my={2}
                >
                    {Ingredients.map((element) => {
                        return element ? `${element} , ` : '';
                    })}
                </Typography>
                <Typography
                    variant='h6'
                    component={'h3'}
                    my={2}
                >
                    Measures :
                </Typography>
                <Typography
                    component={'div'}
                    my={2}
                >
                    {
                        Ingredients.map((element, index) => {
                            if (element) {
                                return <Typography
                                    component={'p'}
                                    key={index}
                                >
                                    {`${element} : ${Measures[index]}`}
                                </Typography>
                            }
                        })
                    }
                </Typography>
                <Typography
                    variant='h6'
                    component={'h3'}
                    my={3}
                >
                    Instructions :
                </Typography>
                <Typography
                    component={'p'}
                >
                    {data.strInstructions}
                </Typography>
            </Container>
        </>
    )
}

export default Content
