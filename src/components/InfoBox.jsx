import React from "react";
import "./InfoBox.css";

const InfoBox = ({ text1, text2 }) => {
  return (
    <div className="infoBox">
      <p>{text1}</p>
      <p>{text2}</p>
    </div>
  );
};

export default InfoBox;
