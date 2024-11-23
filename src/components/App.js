import React, { useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import tourData from "./data"; // Import your predefined tours

const App = () => {
  const [loading, setLoading] = useState(false); // No need for loading state
  const [tours, setTours] = useState(tourData); // Initialize with predefined data

  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  if (tours.length === 0)
    return (
      <div>
        <h2>No tours left</h2>
        <button onClick={() => setTours(tourData)}>Refresh</button> {/* Reset to predefined data */}
      </div>
    );

  return <Tours tours={tours} removeTour={removeTour} />;
};

export default App;

