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
    background-color: ${(props) => props.theme.backgroundColor};
  }
`;

StyledIconButton.defaultProps = {
  theme: {
    backgroundColor: "#ececec",
  },
};

export const themeFavourite = {
  backgroundColor: "#dd377d",
};
