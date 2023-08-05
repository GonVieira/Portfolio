import styled from "styled-components";

export const ThirdSlideContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgb(23, 30, 34);

  //Tablets
  @media screen and (max-width: 768px) {
    height: 150%;
  }
`;

export const ThirdSlideContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 75%;
  height: 100%;

  //Tablets
  @media screen and (max-width: 768px) {
    width: 80%;
  }
  //Mobile
  @media screen and (max-width: 480px) {
    width: 90%;
  }
`;

export const ProjectSlideTitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 80%;
  height: 10%;

  h1 {
    color: #689af8;
    font-weight: bold;
    font-size: 2rem;

    //Tablets
    @media screen and (max-width: 768px) {
    }
    //Mobile
    @media screen and (max-width: 480px) {
      font-size: 1.6rem;
    }
  }

  //Mobile
  @media screen and (max-width: 480px) {
    height: 8%;
    align-items: center;
    justify-content: center;
  }
`;

export const ProjectsContainer = styled.div`
  display: grid;
  width: 90%;
  height: auto;
  align-items: center;
  justify-items: center;
  grid-template-columns: auto auto;
  grid-column-start: 1;
  grid-column-end: 2;

  //Tablets
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`;

export const GitAccContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45%;
  height: 10%;

  //Tablets
  @media screen and (max-width: 768px) {
    width: 55%;
    padding-top: 1rem;
  }
`;
