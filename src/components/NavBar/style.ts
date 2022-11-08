import styled from "styled-components";

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  width: 100%;
  height: 6vh;
  position: fixed;
  top: 0;
`;

export const NavBarUl = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 10px;

  h1 {
    color: white;
  }
`;

export const NavOptionLi = styled.li`
  list-style-type: none;
  padding: 4px;
  cursor: pointer;
`;

export const NavOption = styled.a`
  font-size: 1rem;
  color: white;
  text-decoration: none;
`;
