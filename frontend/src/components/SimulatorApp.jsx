import React, { useState } from "react";
import SimulatorType from "./SimulatorType";
import MarbleSelector from "./MarbleSelector";
import BackgroundSelector from "./BackgroundSelector";
import SimulatorDisplay from "./SimulatorDisplay";
import "../assets/styles/index.css";

const SimulatorApp = () => {
  const [simulatorType, setSimulatorType] = useState("Strips"); // Default simulator type
  const [selectedMarbles, setSelectedMarbles] = useState([]); // Array to track marble selections (up to 3 clicks)
  const [background, setBackground] = useState(null); // Selected background

  const handleSimulatorTypeChange = (type) => {
    setSimulatorType(type);
    setSelectedMarbles([]); // Reset marbles when simulator type changes
    setBackground(null); // Reset background
  };

  const handleMarbleSelection = (marbleId) => {
    // Add marble selection logic (up to 3 clicks)
    if (selectedMarbles.length < 3) {
      setSelectedMarbles((prev) => [...prev, marbleId]);
    }
  };

  return (
    <div className="simulator-app">
      <h1>Tile Simulator</h1>
      {/* Simulator Type Selector */}
      <SimulatorType selectedType={simulatorType} onChange={handleSimulatorTypeChange} />

      {/* Marble Selector */}
      <MarbleSelector onMarbleSelect={handleMarbleSelection} selectedMarbles={selectedMarbles} />

      {/* Background Selector */}
      <BackgroundSelector onBackgroundSelect={setBackground} selectedBackground={background} />

      {/* Simulation Display */}
      <SimulatorDisplay
        simulatorType={simulatorType}
        selectedMarbles={selectedMarbles}
        background={background}
      />
    </div>
  );
};

export default SimulatorApp;
