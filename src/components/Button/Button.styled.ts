import styled from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: inherit;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  text-transform: uppercase;
  border: none;
  cursor: pointer;

  padding: 12px;
  min-width: ${(props) => props.theme.minWidth};

  background-color: var(--color-btn-main);
  transition: background-color var(--anim);

  :hover,
  :focus {
    background-color: var(--color-btn-main-hover);
  }
`;

StyledButton.defaultProps = {
  theme: {
    minWidth: "163px",
  },
};

export const themeWide = {
  minWidth: "274px",
};
