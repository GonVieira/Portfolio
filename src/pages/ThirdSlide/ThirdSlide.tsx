import React from "react";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import {
  GitAccContainer,
  ProjectsContainer,
  ProjectSlideTitleContainer,
  ThirdSlideContainer,
  ThirdSlideContentWrapper,
} from "./style";
import InfoConmponent from "../../components/InfoComponent/InfoComponent";
import data from "../../Data/data.json";

const ThirdSlide = () => {
  const projectsData = data.projects;

  return (
    <ThirdSlideContainer id="section3">
      <ThirdSlideContentWrapper>
        <ProjectSlideTitleContainer>
          <h1>My Projects</h1>
        </ProjectSlideTitleContainer>
        <ProjectsContainer>
          {projectsData.map((value) => {
            return (
              <InfoConmponent
                name={value.name}
                img={value.img}
                url={value.url}
                key={value.name}
              />
            );
          })}
        </ProjectsContainer>
        <GitAccContainer>
          <PrimaryButton
            buttonText={"My Github"}
            onClick={() =>
              window.open("https://github.com/GonVieira", "_blank")
            }
          />
        </GitAccContainer>
      </ThirdSlideContentWrapper>
    </ThirdSlideContainer>
  );
};

export default ThirdSlide;
