import React from 'react';
import TypingEffect from './TypingEffect';
import food from '../assests/food.png';  // Path to your uploaded food image
import { useNavigate } from 'react-router-dom';

const Hero = () => {

  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/diet-plan');
  };
  return (
    <section className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-r from-blue-100 to-gray-50">
      {/* Left side content: Text and typing effect */}
      <div className="text-center text-black w-full md:w-1/2">
        <TypingEffect />

        {/* Subheading */}
        <p className="mt-4 text-lg">
          Take the first step toward a healthier, happier you. Explore personalized recommendations for fitness and nutrition.
        </p>

        {/* Call to Action Button */}
        <button className="mt-6 px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md" onClick={handleClick}>
          Get Started
        </button>
      </div>

      {/* Right side content: Image of food */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={food}  // Path to your uploaded food image
          alt="Healthy Food"
          className="object-contain w-full h-full max-w-md"
        />

      </div>
    </section>
  );
};

export default Hero;
