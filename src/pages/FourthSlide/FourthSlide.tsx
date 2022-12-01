import React from "react";
import CertificateComponent from "../../components/CertificateComponent/CertificateComponent";
import {
  CertificatesContainer,
  FourthSlideContainer,
  FourthSlideContentWrapper,
  FourthSlideTitleContainer,
} from "./style";

const FourthSlide = () => {
  const certificatesArr = [
    {
      name: "Mindera School Participation Certificate",
      url: "https://drive.google.com/file/d/1Dm9L5siyDCC45J-QzlHPOSwEU-UcxNpB/view?usp=sharing",
      img: "https://cdn.discordapp.com/attachments/832239784244150292/1046870343068946483/Certificado_Mindera_School_21_22_Goncalo_Vieira-1.jpg",
    },
    {
      name: "FreeCodeCamp Resposive Web Design Certificate",
      url: "https://www.freecodecamp.org/certification/gonvieira/responsive-web-design",
      img: "https://cdn.discordapp.com/attachments/832239784244150292/1046873161255374970/image.png",
    },
  ];

  return (
    <FourthSlideContainer>
      <FourthSlideContentWrapper>
        <FourthSlideTitleContainer>
          <h1>My Certificates</h1>
        </FourthSlideTitleContainer>
        <CertificatesContainer>
          {certificatesArr.map((value) => {
            return <CertificateComponent name={value.name} url={value.url} img={value.img} />;
          })}
        </CertificatesContainer>
      </FourthSlideContentWrapper>
    </FourthSlideContainer>
  );
};

export default FourthSlide;
