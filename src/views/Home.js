import { useState } from "react";
import UserForm from "../components/UserForm";
import { getMealPlan } from "../controllers/DietController";
import axios from "axios";

const Home = () => {
  const [meals, setMeals] = useState([]);
  const [dailyCalories, setDailyCalories] = useState(null);
  const [loading, setLoading] = useState(false); // Add loading state

  const handleFormSubmit = async (formData) => {
    const { weight, height, age, gender, activityLevel } = formData;

    // Calculate BMR
    let bmr =
      gender === "male"
        ? 10 * weight + 6.25 * height - 5 * age + 5
        : 10 * weight + 6.25 * height - 5 * age - 161;

    // Adjust BMR based on activity level
    const activityFactors = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      very_active: 1.9,
    };
    const dailyCalories = Math.round(bmr * activityFactors[activityLevel]);

    setDailyCalories(dailyCalories);
    setLoading(true);

    // Fetch meals from TheMealDB API
    let query =
      dailyCalories < 1800
        ? "salad"
        : dailyCalories < 2200
        ? "vegetable"
        : dailyCalories < 2600
        ? "pasta"
        : dailyCalories < 3000
        ? "beef"
        : "fish";

    await getMealPlan(query, setMeals);
    setLoading(false);

    // Save meal plan to MongoDB
    if (meals.length > 0) {
      for (const meal of meals) {
        const mealData = {
          name: meal.strMeal,
          calories: dailyCalories,
          ingredients: meal.strIngredient ? meal.strIngredient.split(",") : [],
        };

        // Send meal data to backend
        try {
          await axios.post("http://localhost:5000/save-meal", mealData);
          console.log("Meal saved:", meal.name);
        } catch (error) {
          console.error("Error saving meal:", error);
        }
      }
    }
    
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <UserForm onSubmit={handleFormSubmit} />

      {dailyCalories && (
        <div className="mt-6 p-4 bg-white shadow-md rounded-md text-center">
          <h2 className="text-xl font-bold">Your Daily Caloric Need:</h2>
          <p className="text-2xl font-semibold text-blue-600">
            {dailyCalories} kcal
          </p>
        </div>
      )}

      {/* Loading Spinner */}
      <div className="mt-6">
        {loading ? (
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
          </div>
        ) : meals.length > 0 ? (
          <div>
            <h2 className="text-2xl font-bold mb-4">Recommended Meals</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {meals.map((meal) => (
                <li
                  key={meal.idMeal}
                  className="bg-white p-4 rounded shadow-md"
                >
                  <h3 className="text-lg font-bold">{meal.strMeal}</h3>
                  <img
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                    className="w-full h-40 object-cover rounded mt-2"
                  />
                  <div className="mt-2 flex justify-between items-center">
                    <a
                      href={meal.strYoutube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      Watch Recipe
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>No meals found. Try again!</p>
        )}
      </div>
    </div>
  );
};

export default Home;
