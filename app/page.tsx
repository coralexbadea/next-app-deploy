import { SetStateAction, useState } from 'react';

export default function YellowCirclesPage() {
  // State to track which circle is clicked
  const [clickedIndex, setClickedIndex] = useState(null);

  // Function to handle circle click
  const handleClick = (index:any) => {
    setClickedIndex(index);
  };

  return (
    <div>
      <h1>Yellow Circles Page</h1>
      <div className="circle-container">
        {[...Array(10)].map((_, index) => (
          <div
            key={index}
            className={`circle ${clickedIndex === index ? 'green' : 'yellow'}`}
            onClick={() => handleClick(index)}
          ></div>
        ))}
      </div>
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
