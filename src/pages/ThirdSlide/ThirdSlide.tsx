import React from "react";
import Project from "../../components/ProjectComponent/Project";
import {
  ProjectsContainer,
  ProjectSlideTitleContainer,
  ThirdSlideContainer,
  ThirdSlideContentWrapper,
} from "./style";

const ThirdSlide = () => {
  const projectsArr = [
    {
      name: "Pikamones",
      url: "https://github.com/GonVieira/Pikamones-React-Redux",
      img: "https://cdn.discordapp.com/attachments/965722968506368002/1014490653700407326/Drip-Png.png",
    },
  ];

  console.log(projectsArr);

  return (
    <ThirdSlideContainer id="section3">
      <ThirdSlideContentWrapper>
        <ProjectSlideTitleContainer>
          <h1>My Projects</h1>
        </ProjectSlideTitleContainer>
        <ProjectsContainer>
          {projectsArr.map((value) => {
            return (
              <Project name={value.name} img={value.img} url={value.url} />
            );
          })}
        </ProjectsContainer>
      </ThirdSlideContentWrapper>
    </ThirdSlideContainer>
  );
};

export default ThirdSlide;
