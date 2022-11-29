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
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 60%;
  height: 100%;
`;

export const HalfWidthTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  flex-direction: column;
  width: 50%;
  height: 100%;
  p {
    font-size: 1.6rem;
    color: #a6a6a6;
  }
`;

export const SkillSetTitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  h1 {
    font-size: 2.5rem;
    margin: 0.5%;
    color: white;
  }

  h2 {
    font-size: 1.4rem;
    margin: 0;
    padding-left: 4px;
    color: #689af8;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-top: 1rem;
`;
