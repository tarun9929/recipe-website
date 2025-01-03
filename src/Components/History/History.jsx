import React, { useEffect } from 'react'
import { useSelector } from "react-redux";
import meals from '../../MealApi/MealApi';
import { Box, FoodList, Stack, Typography , EmptyPage } from '../index';


function History() {
  const ids = useSelector((state) => state.api.history);
  const [history , setHistory] = React.useState([])

  useEffect(() => {
    console.log(ids.length)
    if(ids.length > 0) {
      meals.getMealById(ids)
      .then((data) => {
        setHistory(data);
      })
      .catch((error) => {
        console.log(error);
      })
    }
  })

  if(!ids.length) {
    return <EmptyPage />
  } else {
    return <FoodList food={history} />
  }
}

export default History
