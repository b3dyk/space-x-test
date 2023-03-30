import { IconNavLinkProps } from "../../types/types";
import { StyledIconLink } from "./IconNavLink.styled";

export const IconNavLink: React.FC<IconNavLinkProps> = ({
  children,
  path,
  label,
}: IconNavLinkProps) => {
  return (
    <StyledIconLink to={path} aria-label={label}>
      {children}
    </StyledIconLink>
  );
};
