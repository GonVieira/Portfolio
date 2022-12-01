import React from "react";
import { FixedButton, IconContainer } from "./style";
import { FaArrowCircleUp } from "react-icons/fa";

interface TopButtonProps {
  isActive : boolean;
}

const GoToTopButton = ( {isActive} : TopButtonProps) => {

  return (
    <FixedButton isActive={isActive}
      onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
    >
      <IconContainer>
      <FaArrowCircleUp size={40}/>
      </IconContainer>
    </FixedButton>
  );
};

export default GoToTopButton;
