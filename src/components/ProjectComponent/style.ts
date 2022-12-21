import styled from "styled-components";

export const ProjectComponentWrapper = styled.a`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 70%;
  overflow: hidden;
  border-radius: 3%;
  border: 0.5px solid #689af8;
  margin: 1rem;

  @media (hover: hover) and (pointer: fine) {
    :hover {
      border: 0.5px solid transparent;
      transition: 0.5s ease;
    }
  }

  //Tablets
  @media screen and (max-width: 768px) {
    width: 80%;
    height: 80%;
  }

  //Mobile
  @media screen and (max-width: 480px) {
    width: 70%;
    height: 70%;
  }
`;

export const ProjectImg = styled.img`
  opacity: 1;
  display: block;
  object-fit: cover;
  width: 100%;
  height: auto;
  transition: 0.5s ease;
  border-radius: 5%;
  cursor: pointer;

  @media (hover: hover) and (pointer: fine) {
    ${ProjectComponentWrapper}:hover & {
      opacity: 0.3;
    }
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
    font-size: 2.8rem;
    color: white;
    font-weight: bolder;

    //Laptops and small screens
    @media screen and (max-width: 1024px) {
      font-size: 2.5rem;
    }
    //Tablets
    @media screen and (max-width: 768px) {
      font-size: 2.3rem;
    }
    //Mobile
    @media screen and (max-width: 480px) {
      font-size: 2rem;
    }
  }

  @media (hover: hover) and (pointer: fine) {
    ${ProjectComponentWrapper}:hover & {
      opacity: 1;
    }
  }
`;
