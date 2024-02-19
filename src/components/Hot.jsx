import React from "react";
import InfoBox from "./InfoBox";
import Section from "./Section";


const Hot = () => {
  const info = {
    id: "hot",
    title: "Hot",
    paragraph1Text: "Hot freshly ground black coffee or a cup of exquisite tea?",
    paragraph2Text: "We give you that perfect cup every time.",
  };

  return (
    <Section id={info.id} title={info.title} paragraph1Text={info.paragraph1Text} paragraph2Text={info.paragraph2Text}>
      <div className="infoBoxWrapper">
        <InfoBox text1={"Mocha Latte"} text2={"€ 7.50"} />
        <InfoBox text1={"Caffe Formaggio"} text2={"€ 5.00"} />
        <InfoBox text1={"Espresso"} text2={"€ 3.50"} />
        <InfoBox text1={"Chai Verde Latte"} text2={"€ 5.50"} />
      </div>
    </Section>
  );
};

export default Hot;
