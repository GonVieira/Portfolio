import styled from "styled-components";

export const InfoComponentWrapper = styled.a`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 70%;
  overflow: hidden;
  border-radius: 5px;
  border: 0.5px solid #689af8;
  margin: 1rem;

  @media (hover: hover) and (pointer: fine) {
    :hover {
      border: 0.5px solid transparent;
      transition: 0.5s ease;
    }
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const InfoImg = styled.img`
  opacity: 1;
  object-fit: cover;
  width: 100%;
  height: 100%;
  transition: 0.5s ease;
  cursor: pointer;

  @media (hover: hover) and (pointer: fine) {
    ${InfoComponentWrapper}:hover & {
      opacity: 0.3;
    }
  }
`;

export const InfoNameContainer = styled.div`
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
    font-size: 2.5rem;
    color: white;
    font-weight: bolder;

    //Laptops
    @media (max-width: 992px) {
      font-size: 2.3rem;
    }

    //Tablets
    @media screen and (max-width: 768px) {
      font-size: 2.1rem;
    }
    
    //Mobile
    @media screen and (max-width: 480px) {
      font-size: 1.6rem;
    }
  }

  @media (hover: hover) and (pointer: fine) {
    ${InfoComponentWrapper}:hover & {
      opacity: 1;
    }
  }
`;
