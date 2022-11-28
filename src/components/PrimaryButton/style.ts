import styled from "styled-components";

export const StyledButton = styled.button`
  display: inline-block;
  border-radius: 4px;
  background-color: #689af8;
  color: #ffffff;
  text-align: center;
  font-size: 1.4rem;
  padding: 1rem;
  width: 50%;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
  border: none;

  :hover {
    padding-right: 0.2rem;
    background-color: #77a3f7;
  }
`;

export const StyledBtnText = styled.span`
  color: white;

  :after {
    content: "»";
    position: relative;
    opacity: 0;
    right: -0.3rem;
    transition: 0.5s;

    ${StyledButton}:hover & {
      opacity: 1;
    }
  }
`;
