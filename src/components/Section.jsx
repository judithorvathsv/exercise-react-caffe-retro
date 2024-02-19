import React from "react";
import InfoBoxWrapper from "./InfoBoxWrapper";
import "./Section.css";

const Section = ({ id, title, paragraph1Text, paragraph2Text, children }) => {
  return (
    <section id={id}>
      <header>
        <h1>{title}</h1>
      </header>
      <main>
        <p>{paragraph1Text}</p>
        <p>{paragraph2Text}</p>
        <InfoBoxWrapper children={children} />
      </main>
    </section>
  );
};

export default Section;
