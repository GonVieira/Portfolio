import styled from "styled-components";

export const ProjectComponentWrapper = styled.a`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 80%;
  overflow: hidden;
  border: 0.5px solid #89CFF0;
`;

export const ProjectImg = styled.img`
  opacity: 1;
  display: block;
  object-fit: cover;
  width: 100%;
  height: auto;
  transition: 0.5s ease;
  cursor: pointer;

  ${ProjectComponentWrapper}:hover & {
    opacity: 0.3;
  }

`;

export const ProjectNameContainer = styled.div`
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
  cursor: pointer;

  h2 {
    color: white;
  }


  ${ProjectComponentWrapper}:hover & {
    opacity: 1;
  }
`;
