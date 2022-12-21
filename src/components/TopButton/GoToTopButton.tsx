import React from "react";
import { FixedButton, IconContainer } from "./style";
import { FaArrowCircleUp } from "react-icons/fa";

interface TopButtonProps {
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>
}

const GoToTopButton = ({ isActive, setIsActive}: TopButtonProps) => {

  const clickHandler = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    setIsActive(false);
  }


  return (
    <FixedButton
      isActive={isActive}
      onClick={clickHandler}
    >
      <IconContainer>
        <FaArrowCircleUp size={35} />
      </IconContainer>
    </FixedButton>
  );
};

export default GoToTopButton;
