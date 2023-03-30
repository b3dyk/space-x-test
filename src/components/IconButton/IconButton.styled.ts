import styled from "styled-components";

export const StyledIconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px;
  cursor: pointer;

  border: none;
  background-color: ${(props) => props.theme.backgroundColor};

  transition: background-color var(--anim);

  :hover {
    background-color: ${(props) => props.theme.hover};
  }

  :active {
    transform: scale(0.98);
  }
`;

StyledIconButton.defaultProps = {
  theme: {
    backgroundColor: "#ececec",
    hover: "#e5e5e5",
  },
};

export const themeFavourite = {
  backgroundColor: "#dd377d",
  hover: "#d2276f",
};
