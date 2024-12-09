import React from "react";
import creamImage from "../assets/images/backgrounds/2-M1-CREAM-KW.webp";
import lin1Image from "../assets/images/backgrounds/17-M1-CRISTAL TRANSPARENT-KB5.webp";
import lin2Image from "../assets/images/backgrounds/20-M1-BLACK-KN.webp";
const BackgroundSelector = ({ onBackgroundSelect, selectedBackground }) => {
  const backgrounds = [
    { id: "bg1", name: "Background 1", img: creamImage },
    { id: "bg2", name: "Background 2", img: lin1Image },
    { id: "bg3", name: "Background 3", img: lin2Image },
  ];

  return (
    <div className="background-selector">
      <h3>Select Background</h3>
      <div className="background-buttons">
        {backgrounds.map((bg) => (
          <button
            key={bg.id}
            className={`background-btn ${selectedBackground === bg.id ? "selected" : ""}`}
            onClick={() => onBackgroundSelect(bg.id)}
          >
            <img src={bg.img} alt={bg.name} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default BackgroundSelector;
