import React, { useState } from "react";

const marbles = [
  { id: 1, name: "Marble 1", images: ["marble1-step1.jpg", "marble1-step2.jpg", "marble1-step3.jpg"] },
  { id: 2, name: "Marble 2", images: ["marble2-step1.jpg", "marble2-step2.jpg", "marble2-step3.jpg"] },
  { id: 3, name: "Marble 3", images: ["marble3-step1.jpg", "marble3-step2.jpg", "marble3-step3.jpg"] },
];

const backgrounds = ["background1.jpg", "background2.jpg", "background3.jpg"];

const TriNSimulator = ({ background, onBackgroundChange }) => {
  const [selectedMarbles, setSelectedMarbles] = useState([]);

  const handleMarbleClick = (marble) => {
    const step = selectedMarbles.filter((m) => m.id === marble.id).length + 1;

    if (step <= 3) {
      setSelectedMarbles((prev) => [...prev, { ...marble, step }]);
    }
  };

  return (
        <div className="container-fluid text-center">
        {/* Marble selection */}
        <div className="row mb-3">
            <div className="col">
            <h4>Select Marbles</h4>
            <div className="btn-group" role="group">
                {marbles.map((marble) => (
                <button
                    key={marble.id}
                    className="btn btn-outline-secondary"
                    onClick={() => handleMarbleClick(marble)}
                >
                    {marble.name}
                </button>
                ))}
            </div>
            </div>
        </div>

        {/* Background selection */}
        <div className="row mb-3">
            <div className="col">
            <h4>Select Background</h4>
            <div className="btn-group" role="group">
                {backgrounds.map((bg, index) => (
                <button
                    key={index}
                    className="btn btn-outline-primary"
                    onClick={() => onBackgroundChange(bg)}
                >
                    Background {index + 1}
                </button>
                ))}
            </div>
            </div>
        </div>

        {/* Simulation preview */}
        <div className="row">
            <div className="col d-flex align-items-center justify-content-center">
            <div className="simulation-preview position-relative border rounded shadow p-3 bg-light">
                {background && (
                <img
                    src={background}
                    alt="Background"
                    className="img-fluid position-absolute"
                    style={{ top: 0, left: 0, width: "100%", zIndex: 1 }}
                />
                )}
                {selectedMarbles.map((marble, index) => (
                <img
                    key={index}
                    src={marble.images[marble.step - 1]}
                    alt={`${marble.name} Step ${marble.step}`}
                    className="position-absolute"
                    style={{
                    top: 0,
                    left: 0,
                    width: "100%",
                    zIndex: 2 + marble.step, // Ensure proper stacking
                    }}
                />
                ))}
            </div>
            </div>
        </div>
        </div>
  );
};

export default TriNSimulator;
