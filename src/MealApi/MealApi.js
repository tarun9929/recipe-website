// Deprecated

class Meal {
    MealList;

    constructor () {
        this.MealList = [];
    }

    async getMealByName(name) {
        try {
            return (await fetch(`https://themealdb.com/api/json/v1/1/search.php?s=${name}`)).json();
        } catch (error) {
            throw error;
        }
    }

    async getRandomMeal() {
        try {
            return (await fetch('https://themealdb.com/api/json/v1/1/random.php')).json();
        } catch (error) {
            throw error;
        }
    }

    async getNumberOfMeals(number) {
        console.log(number)
        let i = 0;
        try {
            while(i < number) {
                const meal = await (await fetch('https://themealdb.com/api/json/v1/1/random.php')).json();
                this.MealList.push(meal);
                i++;
            }
            return this.MealList;
        } catch (error) {
            throw error;
        }
    }

    async getListByMainIngredient(ingredient) {
        try {
            const ingr = ingredient.split(' ').join('_');
            return (await fetch(`www.themealdb.com/api/json/v1/1/filter.php?i=${ingr}`)).json();
        } catch (error) {
            throw error;
        }
    }

    async getListByCategory(Catagory) {
        let CatagoryName = Catagory.split(' ').join('_');
        try {
            return (await fetch(`www.themealdb.com/api/json/v1/1/filter.php?c=${CatagoryName}`)).json();
        } catch (error) {
            throw error;
        }
    }

    async getListByArea(Area) {
        try {
            return (await fetch(`www.themealdb.com/api/json/v1/1/filter.php?a=${Area}`)).json();
        } catch (error) {
            throw error;
        }
    }

    async getMealById(ids) {
        let response = [];
        let i = 0;

        while(i < ids.length){
            try {
                const result = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${ids[i]}`);

                response.push(await result.json())
            } catch (error) {
                throw error;
            }

            i++;

        }
        return response;
    }
}   

const meals = new Meal();

export default meals;