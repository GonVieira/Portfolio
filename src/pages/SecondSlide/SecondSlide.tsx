import React from "react";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import {
  ButtonContainer,
  HalfWidthTextContainer,
  SecondSlideContainer,
  SecondSlideContentWrapper,
  SkillSetTitleContainer,
} from "./style";

const SecondSlide = () => {
  return (
    <SecondSlideContainer id="section2">
      <SecondSlideContentWrapper>
        <HalfWidthTextContainer>
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
                  "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                  "_blank"
                )
              }
            />
          </ButtonContainer>
        </HalfWidthTextContainer>

        <HalfWidthTextContainer>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </HalfWidthTextContainer>
      </SecondSlideContentWrapper>
    </SecondSlideContainer>
  );
};

export default SecondSlide;
