import React from "react";
import { CertificateComponentWrapper, CertificateImage } from "./style";

interface CertificatInfoProp {
  url: string;
  img: string;
}

const CertificateComponent = ({ url, img }: CertificatInfoProp) => {
  return (
    <CertificateComponentWrapper href={url} target="blank">
      <CertificateImage src={img} />
    </CertificateComponentWrapper>
  );
};

export default CertificateComponent;
