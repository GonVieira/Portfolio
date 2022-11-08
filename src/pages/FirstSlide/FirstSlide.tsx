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
            src="https://cdn.discordapp.com/attachments/832239784244150292/1029464751958413333/dasfasdffasd.jpg"
            alt="Gonçalo Vieira photograph"
          />
        </ImgContainer>
      </FirstSlideContentWrapper>
    </FirstSlideContainer>
  );
};

export default FirstSlide;
