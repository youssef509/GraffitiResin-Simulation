import React from "react";
import marble1click1 from "../assets/images/Ractangle/Shapes/Shape 1/click1.png";
import marble1click2 from "../assets/images/Ractangle/Shapes/Shape 1/click2.png";
import marble1click3 from "../assets/images/Ractangle/Shapes/Shape 1/click3.png";
import bg1 from "../assets/images/Ractangle/Colors/1.jpg";
import bg2 from "../assets/images/Ractangle/Colors/2.jpg";
import bg3 from "../assets/images/Ractangle/Colors/3.jpg";

const SimulatorDisplay = ({ simulatorType, selectedMarbles, background }) => {
  const marbleImages = {
    marble1: [marble1click1, marble1click2, marble1click3],
    // Add other marble options if needed
    // marble2: [...],
    // marble3: [...],
  };

  const backgroundImages = {
    bg1: bg1,
    bg2: bg2,
    bg3: bg3,
  };

  return (
    <div className="simulator-display">
      <h3>Simulation Display</h3>
      <div className="display-area">
        {/* Render the background as the bottom-most layer */}
        {background && (
          <img
            src={backgroundImages[background]}
            alt="Background Layer"
            className="background-layer layer"
          />
        )}

        {/* Render marbles on top of the background */}
        {selectedMarbles.map((marbleId, index) => (
          <img
            key={index}
            src={marbleImages[marbleId][index]} // Use the image for the current click index
            alt={`Marble ${index + 1}`}
            className={`marble-layer layer click-${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SimulatorDisplay;
