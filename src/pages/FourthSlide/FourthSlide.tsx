import React from "react";
import {
  CertificatesContainer,
  FourthSlideContainer,
  FourthSlideContentWrapper,
  FourthSlideTitleContainer,
} from "./style";
import InfoConmponent from "../../components/InfoComponent/InfoComponent";
import data from "../../Data/data.json";

const FourthSlide = () => {
  const certificatesData = data.certificates;

  return (
    <FourthSlideContainer>
      <FourthSlideContentWrapper>
        <FourthSlideTitleContainer>
          <h1>My Certificates</h1>
        </FourthSlideTitleContainer>
        <CertificatesContainer>
          {certificatesData.map((value, index) => {
            return (
              <InfoConmponent
                name={value.name}
                url={value.url}
                img={value.img}
                key={index}
              />
            );
          })}
        </CertificatesContainer>
      </FourthSlideContentWrapper>
    </FourthSlideContainer>
  );
};

export default FourthSlide;
