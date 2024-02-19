import React from "react";
import InfoBoxWrapper from "./InfoBoxWrapper";

const Section = ({ id, title, paragraph1Text, paragraph2Text, children }) => {
  return (
    <section id={id}>
      <header>
        <h1>{title}</h1>
      </header>
      <main className="centeredBox">
        <p className="infoText">{paragraph1Text}</p>
        <p className="infoText">{paragraph2Text}</p>
        <InfoBoxWrapper children={children} />
      </main>
    </section>
  );
};

export default Section;
