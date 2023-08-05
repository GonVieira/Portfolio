import React from "react";
import {
  CertificatesContainer,
  FourthSlideContainer,
  FourthSlideContentWrapper,
  FourthSlideTitleContainer,
} from "./style";
import InfoConmponent from "../../components/InfoComponent/InfoComponent";

const FourthSlide = () => {
  const certificatesArr = [
    {
      name: "Backend Development and APIs",
      url: "https://www.freecodecamp.org/certification/gonvieira/back-end-development-and-apis",
      img: "https://cdn.discordapp.com/attachments/1070077755120701540/1137421546332377098/Backend_Development_Certificate.png",
    },
    {
      name: "Frontend Development Libraries",
      url: "https://www.freecodecamp.org/certification/gonvieira/front-end-development-libraries",
      img: "https://cdn.discordapp.com/attachments/1070077755120701540/1137421546575630457/FE_libraries_certificate.png",
    },
    {
      name: "Mindera School Participation Certificate",
      url: "https://drive.google.com/file/d/1Dm9L5siyDCC45J-QzlHPOSwEU-UcxNpB/view?usp=sharing",
      img: "https://cdn.discordapp.com/attachments/832239784244150292/1046870343068946483/Certificado_Mindera_School_21_22_Goncalo_Vieira-1.jpg",
    },
    {
      name: "Resposive Web Design Certificate",
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
          {certificatesArr.map((value, index) => {
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
