import { StyledIconLink } from "./IconNavLink.styled";

export type IconNavLinkProps = {
  children: React.ReactNode;
};

export const IconNavLink: React.FC<IconNavLinkProps> = ({
  children,
}: IconNavLinkProps) => {
  return <StyledIconLink to="favourites">{children}</StyledIconLink>;
};
