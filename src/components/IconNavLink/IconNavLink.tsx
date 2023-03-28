import { IconNavLinkProps } from "../../types/types";
import { StyledIconLink } from "./IconNavLink.styled";

export const IconNavLink: React.FC<IconNavLinkProps> = ({
  children,
}: IconNavLinkProps) => {
  return <StyledIconLink to="favourites">{children}</StyledIconLink>;
};
