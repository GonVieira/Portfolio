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
  justify-content: space-around;
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

  //Laptops
  @media (max-width: 992px) {
    width: 90%;
  }

  //Tablets
  @media screen and (max-width: 768px) {
    width: 100%;
  }

  h1 {
    color: #689af8;
    font-weight: bold;
    font-size: 2rem;

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
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 25px;
  width: 75%;
  height: 70%;
  padding: 1.2rem;

  //Laptops
  @media (max-width: 992px) {
    width: 100%;
    height: 60%;
  }

  //Tablets
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 75%;
    height: 75%;
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
