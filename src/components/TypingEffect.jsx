import React, { useState, useEffect } from 'react';

const TypingEffect = () => {
  const text = "Your Journey to Health Starts Here"; // Text to type
  const [displayText, setDisplayText] = useState(""); // For displaying the animated text
  const [index, setIndex] = useState(0); // Current character index

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, 100); // Typing speed in milliseconds

      return () => clearTimeout(timeout); // Cleanup timeout
    }
  }, [index, text]);

  return (
    <h1 className="text-4xl font-bold text-blue-600 text-center">
      {displayText}
      <span className="animate-blink">|</span> {/* Blinking cursor */}
    </h1>
  );
};

export default TypingEffect;
