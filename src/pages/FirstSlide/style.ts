import styled from "styled-components";

export const FirstSlideContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 100%;
  background-color: rgb(23, 30, 34);
`;

export const FirstSlideContentWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  height: 100%;
  width: 70%;
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
  height: 100%;
  padding: 10px;
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 70%;
  padding: 10px;
`;

export const IntroText = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: white;
  margin-bottom: 0;
`;

export const MyNameText = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: white;
  margin: 0;
`;

export const MyText = styled.p`
  font-size: 1.5rem;
  color: #999999;
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 25%;
  height: auto;
  padding: 5px;
  border-radius: 50%;
`;

export const MyImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
  border-radius: 50%;
`;
