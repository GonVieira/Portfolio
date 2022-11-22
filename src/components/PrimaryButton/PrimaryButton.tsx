import React from "react";
import { StyledBtnText, StyledButton } from "./style";

interface ButtonInfoProp {
  buttonText: string;
  onClick?: () => void;
}

const PrimaryButton = ({ buttonText, onClick }: ButtonInfoProp) => {
  return (
    <StyledButton onClick={onClick}>
      <StyledBtnText>{buttonText}</StyledBtnText>
    </StyledButton>
  );
};

export default PrimaryButton;
