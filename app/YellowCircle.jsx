"use client"; // This is a client component 👈🏽

import { useState } from 'react';

export default function YellowCircles() {
  const [clickedIndex, setClickedIndex] = useState(null);

  const handleClick = (index) => {
    setClickedIndex(index);
  };

  return (
    <div> :) </div>
  );
}
