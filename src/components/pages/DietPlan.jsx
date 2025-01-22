import React, { useState } from 'react';

const DietPlan = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    fitnessGoal: 'Weight Loss',
    dietPreference: 'Vegetarian',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Your diet plan request has been submitted!');
  };

  return (
    <div className="bg-gradient-to-r from-blue-100 to-gray-50 min-h-screen w-full">
      <div className="pt-20 container mx-auto px-4 w-10/12 h-60 ">
        {/* Added pt-20 to avoid header overlap */}
        <h2 className="text-2xl font-bold mb-6">Create Your Diet Plan</h2>
        <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-md shadow-md">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full border border-gray-300 p-2 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="age">
              Age
            </label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Enter your age"
              className="w-full border border-gray-300 p-2 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="fitnessGoal">
              Fitness Goal
            </label>
            <select
              id="fitnessGoal"
              name="fitnessGoal"
              value={formData.fitnessGoal}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md"
            >
              <option value="Weight Loss">Weight Loss</option>
              <option value="Muscle Gain">Muscle Gain</option>
              <option value="General Fitness">General Fitness</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="dietPreference">
              Diet Preference
            </label>
            <select
              id="dietPreference"
              name="dietPreference"
              value={formData.dietPreference}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md"
            >
              <option value="Vegetarian">Vegetarian</option>
              <option value="Non-Vegetarian">Non-Vegetarian</option>
              <option value="Vegan">Vegan</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default DietPlan;
