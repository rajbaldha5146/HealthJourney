export const fetchMealPlan = async (query) => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
      const data = await response.json();
      return data.meals; // Returns an array of meals
    } catch (error) {
      console.error("Error fetching meals:", error);
      return null;
    }
  };
  