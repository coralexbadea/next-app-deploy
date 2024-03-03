"use client"; // This is a client component 👈🏽

import dynamic from 'next/dynamic';

// Load the component dynamically so it's only rendered on the client-side
const DynamicYellowCircles = dynamic(() => import('./YellowCircle'), {
  ssr: false,
});

export default function YellowCirclesPage() {
  return (
    <div>
      <h1>Yellow Circles Page</h1>
      <DynamicYellowCircles />
    </div>
  );
}
