import React from "react";
import InfoBoxWrapper from "./InfoBoxWrapper";

const Section = ({ id, title, paragraph1Text, paragraph2Text, children }) => {
  return (
    <section id={id}>
      <div className="centeredBox">
        <h1>{title}</h1>
        <p className="infoText">{paragraph1Text}</p>
        <p className="infoText">{paragraph2Text}</p>
        <InfoBoxWrapper children={children} />
      </div>
    </section>
  );
};

export default Section;
