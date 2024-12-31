import { useEffect , useState } from "react";
import meals from "../MealApi/MealApi";

function useRandomData(numberOfMeals) {
    const [food , setFood] = useState([]);
    const [loading , setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        meals.getNumberOfMeals(numberOfMeals)
              .then((data) => {
                setFood(data);
                setLoading(false);
              })
              .catch((error) => {
                console.log(error);
                setLoading(false);
              })
    } , [])

    return [food , setFood , loading , setLoading];
}

export default useRandomData;