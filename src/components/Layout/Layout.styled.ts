import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  background-color: var(--color-bg-transparent);
  z-index: 10;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 13px 0px 14px;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
`;

export const LinkItem = styled.li`
  padding-top: 8px;
  padding-bottom: 8px;
  border-bottom: 1px solid transparent;

  transition: border-bottom var(--anim);

  :hover,
  :focus {
    border-bottom: 1px solid var(--color-font-light);
  }
`;

export const StyledNavLink = styled(NavLink)`
  padding-top: 9px;
  padding-bottom: 9px;

  font-family: "Lato", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.1875;
  text-transform: uppercase;
  color: var(--color-font-light);

  &.active {
    border-bottom: 1px solid var(--color-font-light);
  }
`;

export const BtnGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

export const StyledLink = styled(Link)`
  width: 53px;
  height: 53px;
  background-color: var(--color-btn-secondary);
`;
