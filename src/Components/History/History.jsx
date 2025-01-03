import React, { useEffect } from 'react'
import { useSelector } from "react-redux";
import meals from '../../MealApi/MealApi';
import { Typography } from '../index';
import Empty from '../../../images/empty.png'

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
    return <>
      <img src={Empty} style={{width: '100%' , height: '88vh'}} alt="" />
    </>
  } 
}

export default History
