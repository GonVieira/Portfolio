import React from "react";
import { ImgContainer, InfoComponentWrapper, InfoImg } from "./style";

interface InfoComponentProp {
  name: string;
  url: string;
  img: string;
}

const InfoConmponent = ({ name, url, img }: InfoComponentProp) => {
  return (
    <InfoComponentWrapper href={url} target="blank">
      <ImgContainer>
        <InfoImg src={img} alt={name + " project image."} />
      </ImgContainer>
    </InfoComponentWrapper>
  );
};

export default InfoConmponent;
