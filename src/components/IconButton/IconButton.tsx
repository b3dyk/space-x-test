import { StyledIconButton } from "./IconButton.styled";

export type IconButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

export const IconButton: React.FC<IconButtonProps> = ({
  children,
}: IconButtonProps) => {
  return <StyledIconButton type="button">{children}</StyledIconButton>;
};
