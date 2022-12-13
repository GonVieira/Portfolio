import styled from "styled-components";

export const SecondSlideContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 100%;
  background-color: rgb(23, 30, 34);
`;

export const SecondSlideContentWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  width: 65%;
  height: 100%;

  //Laptops and small screens
  @media screen and (max-width: 1024px) {
    width: 70%;
  }
  //Tablets
  @media screen and (max-width: 768px) {
    width: 85%;
  }
  //Mobile
  @media screen and (max-width: 480px) {
    width: 85%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  flex-direction: column;
  width: 45%;
  height: 100%;

  //Mobile
  @media screen and (max-width: 480px) {
    width: 100%;
    height: 40%;
  }

  p {
    font-size: 1.6rem;
    color: #a6a6a6;

    //Tablets
    @media screen and (max-width: 768px) {
      font-size: 1.3rem;
    }
    //Mobile
    @media screen and (max-width: 480px) {
      font-size: 1.2rem;
    }
  }
`;

export const TitlesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  flex-direction: column;
  width: 45%;
  height: 100%;

  //Mobile
  @media screen and (max-width: 480px) {
    width: 100%;
    height: 20%;
  }

  p {
    font-size: 1.6rem;
    color: #a6a6a6;

    //Tablets
    @media screen and (max-width: 768px) {
      font-size: 1.3rem;
    }
    //Mobile
    @media screen and (max-width: 480px) {
      font-size: 1.2rem;
    }
  }
`;

export const SkillSetTitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  //Mobile
  @media screen and (max-width: 480px) {
    justify-content: center;
  }

  h1 {
    font-size: 2.5rem;
    margin: 0.5%;
    color: white;

    //Tablets
    @media screen and (max-width: 768px) {
      font-size: 2rem;
    }
    //Mobile
    @media screen and (max-width: 480px) {
      font-size: 1.8rem;
      justify-self: flex-start;
    }
  }

  h2 {
    font-size: 1.4rem;
    margin: 0;
    padding-left: 4px;
    color: #689af8;

    //Tablets
    @media screen and (max-width: 768px) {
      font-size: 1.2rem;
    }
    //Mobile
    @media screen and (max-width: 480px) {
      font-size: 1.3rem;
      padding-left: 0;
      align-self: flex-start;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-top: 1rem;

  //Mobile
  @media screen and (max-width: 480px) {
    justify-content: center;
    width: 100%;
  }
`;
