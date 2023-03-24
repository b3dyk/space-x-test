import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledIconLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px;
  cursor: pointer;

  border: none;
  background-color: var(--color-btn-secondary);
  transition: background-color var(--anim);

  :hover,
  :focus {
    background-color: var(--color-btn-secondary-hover);
  }

  &.active {
    background-color: var(--color-btn-secondary-active);
    transition: background-color var(--anim);

    :hover,
    :focus {
      background-color: var(--color-btn-secondary-active-hover);
    }
  }
`;
