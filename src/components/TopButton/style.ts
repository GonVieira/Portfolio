import styled from "styled-components";

interface BtnProps {
  isActive: boolean;
}

export const FixedButton = styled.button<BtnProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  padding: 0.6rem;
  font-size: 2rem;
  bottom: 60px;
  right: 30px;
  background-color: #689af8;
  color: #fff;
  text-align: center;
  cursor: pointer;
  border: none;
  border-radius: 50%;
  opacity: ${(props) => (props.isActive ? 1 : 0)};
  transition: 0.5s ease-in;
  visibility: ${(props) => (props.isActive ? "visible" : "hidden")};

  
  @media (hover: hover) and (pointer: fine) {
    :hover {
      background-color: rgb(23, 30, 34);
    }
  }

  //Tablets
  @media screen and (max-width: 768px) {
    bottom: 50px;
    right: 20px;
    padding: 0.5rem;
  }
  //Mobile
  @media screen and (max-width: 480px) {
    bottom: 45px;
    right: 10px;
    padding: 0.3rem;
  }
`;

export const IconContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
