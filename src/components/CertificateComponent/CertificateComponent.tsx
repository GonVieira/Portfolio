import React from "react";
import { CertificateComponentWrapper, CertificateImage, CertificateNameContainer } from "./style";

interface CertificatInfoProp {
  name: string;
  url: string;
  img: string;
}

const CertificateComponent = ({ name, url, img }: CertificatInfoProp) => {
  return (
    <CertificateComponentWrapper href={url} target="blank">
      <CertificateImage src={img} alt={name + " image."}/>
      <CertificateNameContainer>
        <h2>{name}</h2>
      </CertificateNameContainer>
    </CertificateComponentWrapper>
  );
};

export default CertificateComponent;
