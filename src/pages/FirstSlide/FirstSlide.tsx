import React from "react";
import {
  FirstSlideContainer,
  FirstSlideContentWrapper,
  ImgContainer,
  IntroText,
  MyImg,
  MyNameText,
  MyText,
  TextContainer,
  TextWrapper,
} from "./style";

const FirstSlide = () => {
  return (
    <FirstSlideContainer id="section1">
      <FirstSlideContentWrapper>
        <TextContainer>
          <TextWrapper>
            <IntroText>Hello, it's me</IntroText>
            <MyNameText>Gonçalo Vieira</MyNameText>
            <MyText>
              An tech and japanese culture enthusiast, currently improving my
              skills in front end developend as a self learning developer!{" "}
            </MyText>
          </TextWrapper>
        </TextContainer>
        <ImgContainer>
          <MyImg
            src="https://cdn.discordapp.com/attachments/832239784244150292/1047202066055041096/image.png"
            alt="Gonçalo Vieira photograph"
          />
        </ImgContainer>
      </FirstSlideContentWrapper>
    </FirstSlideContainer>
  );
};

export default FirstSlide;
