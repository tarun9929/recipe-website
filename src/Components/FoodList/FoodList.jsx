import React, { useEffect } from 'react'
import { Stack , MenuCard} from '../index'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { removeLike, setLikes , setHistory } from '../../features/apiDataSlice';

function FoodList({food , styles}) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [isLiked , setIsLiked] = React.useState(false)

    function handleShowContent(target) {
        const id = target.meals[0].idMeal;
        dispatch(setHistory({
            history: id
        }))
        navigate(`/recipes/content/${id}` , {state: target.meals})
    }

    const prevData = useSelector((state) => state.api.likes)

    function handleLikes(target) {
        if(!prevData.includes(target.meals[0].idMeal)){
            dispatch(setLikes({
                likes: target.meals[0].idMeal
            }))
        }
        else {
            dispatch(removeLike({
                likes: target.meals[0].idMeal
            }));
        }
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
                        id={element.meals?.[0].idMeal}
                        name={element.meals?.[0].strCategory}
                        content={element.meals?.[0].strInstructions}
                        image={element.meals?.[0].strMealThumb}
                        styles={{
                            my: 3,
                            mx: 4
                        }}
                        onClickHandlar={() => handleShowContent(element)}
                        handleLikes={
                            () => {
                                handleLikes(element);
                            }
                        }
                    />
                })
            }
        </Stack>
    )
}

export default FoodList
