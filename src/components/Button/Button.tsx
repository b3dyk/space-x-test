import { ButtonProps } from "../../types/types";
import { StyledButton } from "./Button.styled";

export const Button: React.FC<ButtonProps> = ({ text }: ButtonProps) => {
  return <StyledButton type="button">{text}</StyledButton>;
};
