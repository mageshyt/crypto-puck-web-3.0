import React from "react";

const PuckContainer = ({ selectedPuck }) => {
  const image =
    "https://lh3.googleusercontent.com/WrmpbMJMKmGfjJRCu2b0Bp_Pk2iPZcuRXyqPj7p3-I19DKHlIluigjdiwsnUZA28ssIQcydOnYgD2f6Qra05gFMZHWuojV1JSbM";
  const name = "Gold Puck";
  return (
    <div className="main">
      <div className="mainContent">
        <div className="puckHighlighter">
          <div className="puckContainer">
            <img src={image} alt="selectedPuck" />
          </div>
        </div>
        {/* Puck Details */}
        <div className="puckDetails text-white">
          {/* Title */}
          <div className="title">
            <span>{name}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PuckContainer;
