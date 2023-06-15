import React from "react";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import Project from "../../components/ProjectComponent/Project";
import {
  GitAccContainer,
  ProjectsContainer,
  ProjectSlideTitleContainer,
  ThirdSlideContainer,
  ThirdSlideContentWrapper,
} from "./style";

const ThirdSlide = () => {
  const projectsArr = [
    {
      name: "Dealit",
      url: "https://github.com/rmzaoo/dealit-frontend",
      img: "https://cdn.discordapp.com/attachments/987402831923392532/1044314439903629443/image.png",
    },
    {
      name: "Pikamones",
      url: "https://github.com/GonVieira/Pikamones-React-Redux",
      img: "https://cdn.discordapp.com/attachments/987402831923392532/1044289475649486958/image.png",
    },
    {
      name: "Bubble Store",
      url: "https://github.com/GonVieira/Bubble-Store-Project",
      img: "https://cdn.discordapp.com/attachments/987402831923392532/1044319568316870768/image.png",
    },
    {
      name: "Should You Do it",
      url: "https://github.com/GonVieira/DoItCenas",
      img: "https://cdn.discordapp.com/attachments/987402831923392532/1044333745941004418/image.png",
    },
  ];

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
