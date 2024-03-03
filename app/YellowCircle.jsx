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
      <style jsx>{`
        .circle-container {
          display: flex;
          flex-wrap: wrap;
        }
        .circle {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          margin: 10px;
          background-color: yellow;
          cursor: pointer;
        }
        .green {
          background-color: green;
        }
      `}</style>
    </div>
  );
}
