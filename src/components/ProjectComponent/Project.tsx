import React from "react";
import {
  ProjectComponentWrapper,
  ProjectImg,
  ProjectNameContainer,
} from "./style";

interface ProjectInfoProp {
  name: string;
  url: string;
  img: string;
}

const Project = ({ name, url, img }: ProjectInfoProp) => {
  return (
    <ProjectComponentWrapper href={url} target="blank">
      <ProjectImg src={img} alt={name + " project image."}/>
      <ProjectNameContainer>
        <h2>{name}</h2>
      </ProjectNameContainer>
    </ProjectComponentWrapper>
  );
};

export default Project;
