import React from "react";

const SimulatorType = ({ selectedType, onChange }) => {
  const simulatorTypes = ["Strips", "Rectangles", "TriL", "TriN"];

  return (
    <div className="simulator-type">
      <h3>Select Simulator Type</h3>
      <div className="type-buttons">
        {simulatorTypes.map((type) => (
          <button
            key={type}
            className={`simulator-btn ${selectedType === type ? "selected" : ""}`}
            onClick={() => onChange(type)}
          >
            {type}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SimulatorType;
