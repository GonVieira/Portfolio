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
    <a href={url} target="blank">
      <ProjectComponentWrapper>
        <ProjectImg src={img} />
        <ProjectNameContainer>
          <h2>{name}</h2>
        </ProjectNameContainer>
      </ProjectComponentWrapper>
    </a>
  );
};

export default Project;
