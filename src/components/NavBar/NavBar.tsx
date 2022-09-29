import React from "react";
import { NavBarContainer, NavBarUl, NavOption, NavOptionLi } from "./style";

const NavBar = () => {
  return (
    <NavBarContainer>
      <NavBarUl>
        <NavOptionLi>
          <NavOption href="#section1">Section 1</NavOption>
        </NavOptionLi>
        <NavOptionLi>
          <NavOption href="#section2">Section 2</NavOption>
        </NavOptionLi>
        <NavOptionLi>
          <NavOption href="#section3">Section 3</NavOption>
        </NavOptionLi>
      </NavBarUl>
    </NavBarContainer>
  );
};

export default NavBar;
