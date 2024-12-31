import React, { useEffect } from 'react'
import { Container, ColorPaletter, CircularProgress , FoodList} from '../index'
import meals from '../../MealApi/MealApi';
import { useParams } from 'react-router-dom';

function SearchMyFood() {
    const [food, setFood] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    const params = useParams().id;

    useEffect(() => {
        meals.getMealByName(params)
            .then((data) => {
                setFood([data]);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false)
            })
    })

    if (loading) {
        return (
            <Container sx={{
                my: 30,
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
        </>
    )
}

export default SearchMyFood
