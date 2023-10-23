
import axios from 'axios';
import { API_URL } from '../constants/constant';

export const getRecipes = async (searchedQuery) => {
    try {
        let response = await axios.get(`${API_URL}&query=${searchedQuery}`);
        // console.log(response)
        return response.data;
    } catch (error) {
        console.log('Error while calling the api ', error.message);
        return error.response
    }
}

export const getRecipe = async (searchedQuery) => {
    try {
        // let response = await axios.get(`https://api.spoonacular.com/recipes/${searchedQuery}/card?apiKey=a9621954f1144cab9def2c8414248e15`);
        // let response = await axios.get(`https://api.spoonacular.com/recipes/${searchedQuery}/information?apiKey=a9621954f1144cab9def2c8414248e15&includeNutrition=false`);
        let response = await axios.get(`https://api.spoonacular.com/recipes/${searchedQuery}/information?apiKey=4ba55f97dac04adb9cec13875ac0603a&includeNutrition=false`);
        return response.data;
    } catch (error) {
        console.log('Error while calling the api ', error.message);
        return error.response
    }
}