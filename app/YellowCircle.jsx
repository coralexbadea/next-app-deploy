"use client"; // This is a client component 👈🏽

import { useState } from 'react';

export default function YellowCircles() {
  const [clickedIndex, setClickedIndex] = useState(null);

  const handleClick = (index) => {
    setClickedIndex(index);
  };

  return (
    <div className="circle-container">
      {[...Array(10)].map((_, index) => (
        <div
          key={index}
          className={`circle ${clickedIndex === index ? 'green' : 'yellow'}`}
          onClick={() => handleClick(index)}
        ></div>
      ))}
    </div>
  );
}
