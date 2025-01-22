const blogData = [
  {
    id: 1,
    title: "5 Simple Steps to Start Your Fitness Journey",
    content:
      "Starting your fitness journey can feel overwhelming. Begin with small goals like walking for 30 minutes daily. Gradually incorporate strength training and focus on building consistency over time.",
    author: "Jane Doe",
    category: "Fitness Tips",
    image: "https://plus.unsplash.com/premium_photo-1664908231436-13004eb76ac2?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Why Rest Days Are Critical for Muscle Growth",
    content:
      "Rest days allow your muscles to recover and grow stronger. Overtraining can lead to injuries, so listen to your body and prioritize rest for sustainable progress.",
    author: "John Smith",
    category: "Fitness Tips",
    image: "https://plus.unsplash.com/premium_photo-1683133545768-44f5cca73afa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "The Importance of Proper Warm-Up Exercises",
    content:
      "A proper warm-up improves blood flow to your muscles and prepares your body for intense workouts. Include dynamic stretches and light cardio for an effective warm-up.",
    author: "Emily Davis",
    category: "Fitness Tips",
    image: "https://plus.unsplash.com/premium_photo-1664109999481-92084fb559d5?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "Tracking Progress: How to Stay Motivated",
    content:
      "Use fitness apps or journals to track your progress. Celebrate small wins and set realistic milestones to stay motivated on your fitness journey.",
    author: "Mike Lee",
    category: "Fitness Tips",
    image: "https://plus.unsplash.com/premium_photo-1712762001147-7f3d8bff3002?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    title: "Full-Body Workout for Beginners",
    content:
      "This beginner-friendly workout includes push-ups, squats, and planks. Perform each exercise for 3 sets of 10 reps, gradually increasing intensity as you build strength.",
    author: "Anna Wilson",
    category: "Workouts",
    image: "https://plus.unsplash.com/premium_photo-1664299208816-ef56887db111?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBlcnNvbiUyMGRvaW5nJTIwc3F1YXRzJTIwaW4lMjBhJTIwZ3ltLmpwZ3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 6,
    title: "Top 5 Cardio Workouts to Burn Calories",
    content:
      "Cardio exercises like running, cycling, jump rope, and HIIT are effective for burning calories. Start with 20-30 minutes, and gradually increase the duration.",
    author: "David Chen",
    category: "Workouts",
    image: "https://plus.unsplash.com/premium_photo-1726812137381-40c536b99fa8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29uJTIwcnVubmluZyUyMG9uJTIwYSUyMHRyZWFkbWlsbC5qcGd8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 7,
    title: "Strength Training: Building a Solid Foundation",
    content:
      "Focus on compound exercises like deadlifts, bench presses, and squats. These moves work multiple muscle groups, providing a strong foundation for strength training.",
    author: "Sophia Lopez",
    category: "Workouts",
    image: "https://images.unsplash.com/photo-1526405294019-7f3f7c8c7867?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFyYmVsbCUyMHdlaWdodGxpZnRpbmclMjBpbiUyMGElMjBneW0uanBnfGVufDB8fDB8fHww",
  },
  {
    id: 8,
    title: "How to Create a Personalized Workout Plan",
    content:
      "Design a workout plan based on your fitness level and goals. Include a mix of cardio, strength training, and flexibility exercises for a balanced routine.",
    author: "James Brown",
    category: "Workouts",
    image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bm90ZWJvb2slMjB3aXRoJTIwd29ya291dCUyMHBsYW5zLmpwZ3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 9,
    title: "10 Superfoods to Boost Your Energy",
    content:
      "Incorporate foods like quinoa, chia seeds, spinach, and blueberries into your diet. These nutrient-dense options provide lasting energy and improve overall health.",
    author: "Laura Green",
    category: "Healthy Eating",
    image: "https://plus.unsplash.com/premium_photo-1681084014276-3e082d3004e9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3VwZXJmb29kcyUyMGJvd2wlMjBvbiUyMGElMjB0YWJsZS5qcGd8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 10,
    title: "Meal Prepping: A Guide for Busy People",
    content:
      "Save time and eat healthier by prepping meals in advance. Choose simple recipes, and store them in portioned containers for the week.",
    author: "Tom Harris",
    category: "Healthy Eating",
    image: "https://plus.unsplash.com/premium_photo-1701109396171-0f9800f1aaed?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWVhbCUyMHByZXAlMjBjb250YWluZXJzJTIwb24lMjBjb3VudGVyLmpwZ3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 11,
    title: "Hydration Tips for Optimal Health",
    content:
      "Drinking enough water is crucial for digestion, energy, and skin health. Aim for 8-10 glasses daily and adjust based on your activity level.",
    author: "Rachel Kim",
    category: "Healthy Eating",
    image: "https://plus.unsplash.com/premium_photo-1721158536490-c3923c0d0b76?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGdsYXNzJTIwb2YlMjB3YXRlciUyMG9uJTIwZGVzay5qcGd8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 12,
    title: "Understanding Macronutrients: Protein, Carbs, and Fats",
    content:
      "Learn to balance macronutrients for a well-rounded diet. Proteins repair muscles, carbs provide energy, and healthy fats support brain function.",
    author: "Chris White",
    category: "Healthy Eating",
    image: "https://media.istockphoto.com/id/171329297/photo/fruit-and-vegetable-snack.webp?a=1&b=1&s=612x612&w=0&k=20&c=DY44XMVk9SqCEFsMsvPsAAwf3jD35JjrekO5XPPfvsk=",
  },
];

export default blogData;
