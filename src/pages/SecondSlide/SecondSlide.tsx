import React from "react";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import {
  ButtonContainer,
  SecondSlideContainer,
  SecondSlideContentWrapper,
  SkillSetTitleContainer,
  TextContainer,
  TitlesContainer,
} from "./style";

const SecondSlide = () => {
  return (
    <SecondSlideContainer id="section2">
      <SecondSlideContentWrapper>
        <TitlesContainer>
          <SkillSetTitleContainer>
            <h2>My Skillset</h2>
          </SkillSetTitleContainer>
          <SkillSetTitleContainer>
            <h1>Frontend Developer</h1>
          </SkillSetTitleContainer>
          <ButtonContainer>
            <PrimaryButton
              buttonText={"My CV"}
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1ySpN4JRHW6yl8ucuIfpxDAIJIizULCA5/view?usp=sharing",
                  "_blank"
                )
              }
            />
          </ButtonContainer>
        </TitlesContainer>

        <TextContainer>
          <p>
            &nbsp; My expertise is building responsive and smooth user-facing
            features of websites in React.Js. <br />
            I've done numerous projects, from single page static websites to
            dynamic websites, most of those websites being e-commerce. <br />I
            always seek new interesting opportunities, new technologies and cool
            people to work with.
          </p>
        </TextContainer>
      </SecondSlideContentWrapper>
    </SecondSlideContainer>
  );
};

export default SecondSlide;
