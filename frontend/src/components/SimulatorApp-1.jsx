import React, { useState } from "react";
import TriNSimulator from "./TriNSimulator";

// Import image mappings
const marbleImages = {
    marble1: require('../assets/images/select-buttons/CREAM.webp'),
    marble2: require('../assets/images/select-buttons/LIN1.webp'),
    marble3: require('../assets/images/select-buttons/LIN2.webp'),
  };
  
  const backgroundImages = {
    background1: require('../assets/images/backgrounds/2-M1-CREAM-KW.webp'),
    background2: require('../assets/images/backgrounds/17-M1-CRISTAL TRANSPARENT-KB5.webp'),
    background3: require('../assets/images/backgrounds/20-M1-BLACK-KN.webp'),
  };
  
  const SimulatorApp = () => {
    const [selectedMarble, setSelectedMarble] = useState(null);
    const [selectedBackground, setSelectedBackground] = useState(null);
  
    const handleMarbleSelect = (id) => {
      setSelectedMarble(id);
    };
  
    const handleBackgroundSelect = (id) => {
      setSelectedBackground(id);
    };
  
    return (
      <div className="simulator-app">
        <div className="marble-selection">
          <h3>Select Marbles</h3>
          <div className="button-group">
            {Object.keys(marbleImages).map((key) => (
              <button
                key={key}
                className={`btn marble-btn ${selectedMarble === key ? 'selected' : ''}`}
                onClick={() => handleMarbleSelect(key)}
              >
                <img src={marbleImages[key]} alt={key} />
              </button>
            ))}
          </div>
        </div>
  
        <div className="background-selection">
          <h3>Select Background</h3>
          <div className="button-group">
            {Object.keys(backgroundImages).map((key) => (
              <button
                key={key}
                className={`btn background-btn ${selectedBackground === key ? 'selected' : ''}`}
                onClick={() => handleBackgroundSelect(key)}
              >
                <img src={backgroundImages[key]} alt={key} />
              </button>
            ))}
          </div>
        </div>
  
        {/* Simulation Area */}
        <div className="simulation-area">
          <h3>Simulation</h3>
          <div className="simulation-tile" style={{ position: 'relative', width: '300px', height: '300px' }}>
            {/* Background Layer */}
            {selectedBackground && (
              <img
                src={backgroundImages[selectedBackground]}
                alt="Selected Background"
                className="background-layer"
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            )}
  
            {/* Marble Layer */}
            {selectedMarble && (
              <img
                src={marbleImages[selectedMarble]}
                alt="Selected Marble"
                className="marble-layer"
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  opacity: 0.7, // Adjust transparency to blend with the background
                }}
              />
            )}
          </div>
        </div>
      </div>
    );
  };
  
  export default SimulatorApp;
