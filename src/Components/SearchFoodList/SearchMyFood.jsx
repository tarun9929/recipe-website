import React, { useEffect } from 'react'
import { Container, ColorPaletter, CircularProgress , FoodList, Error} from '../index'
import meals from '../../MealApi/MealApi';
import { useParams } from 'react-router-dom';
import ErrorImg from '../../../images/Error.png'

function SearchMyFood() {
    const [food, setFood] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    const params = useParams().id;

    useEffect(() => {
        meals.getMealByName(params)
            .then((data) => {
                if(data.meals) {
                    setFood([data]);
                    setLoading(false);
                } else {
                    setFood([])
                    setLoading(false);
                }
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

    if(food.length != 0){
        return (
            <>
                <FoodList
                    food={food}
                />
            </>
        )
    } else {
        return <Error errorImage={ErrorImg} error={'recipe not found'} />
    }
}

export default SearchMyFood
