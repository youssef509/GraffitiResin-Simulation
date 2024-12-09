import React from "react";
import creamImage from "../assets/images/select-buttons/CREAM.webp";
import lin1Image from "../assets/images/select-buttons/LIN1.webp";
import lin2Image from "../assets/images/select-buttons/LIN2.webp";
const MarbleSelector = ({ onMarbleSelect, selectedMarbles }) => {
    const marbles = [
        { id: "marble1", name: "Marble 1", img: creamImage },
        { id: "marble2", name: "Marble 2", img: lin1Image },
        { id: "marble3", name: "Marble 3", img: lin2Image },
      ];

  return (
    <div className="marble-selector">
      <h3>Select Marble</h3>
      <div className="marble-buttons">
        {marbles.map((marble) => (
          <button
            key={marble.id}
            className={`marble-btn ${selectedMarbles.includes(marble.id) ? "selected" : ""}`}
            onClick={() => onMarbleSelect(marble.id)}
          >
            <img src={marble.img} alt={marble.name} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default MarbleSelector;
