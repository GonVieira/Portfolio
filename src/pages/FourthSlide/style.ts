import styled from "styled-components";

export const FourthSlideContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80%;
  background-color: rgb(23, 30, 34);
  
  //Mobile
  @media screen and (max-width: 480px) {
    height: 100%;
  }
  
`;

export const FourthSlideContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 70%;
  height: 90%;

  //Laptops and small screens
  @media screen and (max-width: 1024px) {
    width: 75%;
  }
  //Tablets
  @media screen and (max-width: 768px) {
    width: 70%;
  }
  //Mobile
  @media screen and (max-width: 480px) {
    width: 85%;
  }
`;

export const FourthSlideTitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 90%;
  height: 10%;
  padding-left: 2rem;

  h1 {
    color: #689af8;
    font-weight: bold;
    font-size: 2rem;

    //Tablets
    @media screen and (max-width: 768px) {
      font-size: 1.8rem;
    }
    //Mobile
    @media screen and (max-width: 480px) {
      font-size: 2rem;
    }
  }

  //Tablets
  @media screen and (max-width: 768px) {
    justify-content: center;
    padding-left: 0;
  }
`;

export const CertificatesContainer = styled.div`
  display: flex;
  width: 90%;
  height: auto;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  //Tablets
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
