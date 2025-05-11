import React, { useState, useEffect } from 'react';

export const Typewriter = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    if (!text) return;
    let i = 0;
    const interval = setInterval(() => {
      const char = text[i];
      setDisplayedText(prev => prev + char);
      i++;

      if (i >= text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <h1 className="custom-text-bold animated-text">
      {displayedText}
      <span className="blinking-cursor">|</span>
    </h1>
  );
};

export default Typewriter;
