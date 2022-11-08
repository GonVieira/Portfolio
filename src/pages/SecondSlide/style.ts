import styled from "styled-components";

export const SecondSlideContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 100%;
  background-color: green;
`;

export const SecondSlideContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 75%;
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
    font-size: 1.2rem;
  }
`;

export const SkillSetTitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  h1 {
    font-size: 2.5rem;
    margin: 0.5%;
  }

  h2 {
    font-size: 1.4rem;
    margin: 0;
    padding-left: 4px;
  }
`
