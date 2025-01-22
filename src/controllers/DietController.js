import { fetchMealPlan } from "../models/DietModel";

export const getMealPlan = async (query, setMeals) => {
  const meals = await fetchMealPlan(query);
  setMeals(meals || []); // Update state with fetched meals
};
