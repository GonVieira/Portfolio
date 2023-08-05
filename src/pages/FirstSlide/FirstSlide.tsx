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
              A tenacious and dedicated programmer, who never gives up on any
              challenge! <br />
              Lover of tech, japanese culture and video games. <br />
              Currently improving as a self learning developer!
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
