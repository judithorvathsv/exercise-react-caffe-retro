import React from "react";
import InfoBox from "./InfoBox";
import Section from "./Section";

const Juicy = () => {
  const info = {
    id: "juicy",
    title: "Juicy",
    paragraph1Text: "Ripe fruit - freshly squeezed.",
    paragraph2Text: "It's as simple as that. Chunky or smooth - it's your choice.",
  };

  return (
    <Section id={info.id} title={info.title} paragraph1Text={info.paragraph1Text} paragraph2Text={info.paragraph2Text}>
      <div className="infoBoxWrapper">
        <InfoBox text1={"Branched Apricots"} text2={"€ 4.20"} />
        <InfoBox text1={"Deep Rasberries"} text2={"€ 3.50"} />
        <InfoBox text1={"Smooth Oranges"} text2={"€ 6.50"} />
      </div>
    </Section>
  );
};

export default Juicy;
