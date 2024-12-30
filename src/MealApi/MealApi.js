class Meal {
    MealList;

    constructor () {
        this.MealList = [];
    }

    async getMealByName(name) {
        try {
            return (await fetch(`www.themealdb.com/api/json/v1/1/search.php?s=${name}`)).json();
        } catch (error) {
            throw error;
        }
    }

    async getRandomMeal() {
        try {
            return (await fetch('www.themealdb.com/api/json/v1/1/random.php')).json();
        } catch (error) {
            throw error;
        }
    }

    async getNumberOfMeals(number) {
        let i = 0;
        try {
            while(i < number) {
                const meal = await (await fetch('www.themealdb.com/api/json/v1/1/random.php')).json();
                this.MealList.push(meal);
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
}   

const meals = new Meal();

export default meals;