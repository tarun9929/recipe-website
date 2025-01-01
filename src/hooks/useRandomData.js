import { useEffect } from "react";
import meals from "../MealApi/MealApi";
import { useDispatch , useSelector } from "react-redux";
import { setData } from "../features/apiDataSlice";

function useRandomData(numberOfMeals) {

    const dispatch = useDispatch();

    const initData = useSelector((state) => state.api.data)

    useEffect(() => {
      if(!initData.length){
        meals.getNumberOfMeals(numberOfMeals)
              .then((data) => {
                dispatch(setData({
                  data,
                  isLoading: false
                }));
              })
              .catch((error) => {
                console.log(error);
                dispatch(setData(
                  {
                    data: [],
                    isLoading: false,
                    error
                  }
                ))
              })
      }
    } , [])
}

export default useRandomData;