import React from "react";
import InfoBox from "./InfoBox";
import Section from "./Section";


const Cozy = () => {
  const info = {
    id: "cosy",
    title: "Cosy",
    paragraph1Text: "Hot freshly ground black coffee or a cup of exquisite tea?",
    paragraph2Text: "We give you that perfect cup every time.",
  };

  return (
    <Section id={info.id} title={info.title} paragraph1Text={info.paragraph1Text} paragraph2Text={info.paragraph2Text}>
      <div className="infoBoxWrapper">
        <InfoBox text1={"Mon - Sun"} text2={"8am – 11pm"} />
        <InfoBox text1={"Caffe Retro"} text2={"Canto VI"} />
        <InfoBox text1={"0123-45 67 89"} text2={"caffe@lorem.pge"} />
      </div>
    </Section>
  );
};

export default Cozy;
