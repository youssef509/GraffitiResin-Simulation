import React, { useState } from 'react';

const TileSelector = () => {
  // State for selected marbles and backgrounds
  const [selectedMarble, setSelectedMarble] = useState(null);
  const [selectedBackground, setSelectedBackground] = useState(null);

  // Handle marble selection
  const handleMarbleSelect = (id) => {
    setSelectedMarble(id);
  };

  // Handle background selection
  const handleBackgroundSelect = (id) => {
    setSelectedBackground(id);
  };

  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-md-6">
          <h5>Select Marbles</h5>
          <div className="d-flex flex-wrap marble-buttons">
            <button
              className={`btn marble-btn ${selectedMarble === 'marble1' ? 'selected' : ''}`}
              onClick={() => handleMarbleSelect('marble1')}
            >
              <img src="src/assets/images/marble1.jpg" alt="Marble 1" />
            </button>
            <button
              className={`btn marble-btn ${selectedMarble === 'marble2' ? 'selected' : ''}`}
              onClick={() => handleMarbleSelect('marble2')}
            >
              <img src="src/assets/images/marble2.jpg" alt="Marble 2" />
            </button>
            <button
              className={`btn marble-btn ${selectedMarble === 'marble3' ? 'selected' : ''}`}
              onClick={() => handleMarbleSelect('marble3')}
            >
              <img src="src/assets/images/marble3.jpg" alt="Marble 3" />
            </button>
          </div>
        </div>
        <div className="col-md-6">
          <h5>Select Background</h5>
          <div className="d-flex flex-wrap background-buttons">
            <button
              className={`btn background-btn ${selectedBackground === 'background1' ? 'selected' : ''}`}
              onClick={() => handleBackgroundSelect('background1')}
            >
              <img src="src/assets/images/background1.jpg" alt="Background 1" />
            </button>
            <button
              className={`btn background-btn ${selectedBackground === 'background2' ? 'selected' : ''}`}
              onClick={() => handleBackgroundSelect('background2')}
            >
              <img src="src/assets/images/background2.jpg" alt="Background 2" />
            </button>
            <button
              className={`btn background-btn ${selectedBackground === 'background3' ? 'selected' : ''}`}
              onClick={() => handleBackgroundSelect('background3')}
            >
              <img src="src/assets/images/background3.jpg" alt="Background 3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TileSelector;
