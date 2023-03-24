import { StyledButton } from "./Button.styled";

type ButtonProps = {
  text: string;
};

export const Button: React.FC<ButtonProps> = ({ text }: ButtonProps) => {
  return <StyledButton type="button">{text}</StyledButton>;
};
