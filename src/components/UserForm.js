import { useState } from "react";

const UserForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    age: "",
    weight: "",
    height: "",
    gender: "",
    activityLevel: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Diet Plan Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="number"
          name="weight"
          placeholder="Weight (kg)"
          value={formData.weight}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="number"
          name="height"
          placeholder="Height (cm)"
          value={formData.height}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <select
          name="activityLevel"
          value={formData.activityLevel}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Activity Level</option>
          <option value="sedentary">Sedentary</option>
          <option value="light">Light Activity</option>
          <option value="moderate">Moderate Activity</option>
          <option value="active">Active</option>
          <option value="very_active">Very Active</option>
        </select>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Get Diet Plan
        </button>
      </form>
    </div>
  );
};

export default UserForm;
