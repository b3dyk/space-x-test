import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  max-width: 1440px;
  padding-left: 80px;
  padding-right: 80px;
`;

export const HiddenTitle = styled.span`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;

  :active,
  :focus {
    clip: auto;
    height: auto;
    margin: 0;
    overflow: visible;
    position: static;
    white-space: normal;
    width: auto;
  }
`;

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

  :hover {
    background-color: var(--color-btn-main-hover);
  }

  :active {
    transform: scale(0.98);
  }
`;

StyledButton.defaultProps = {
  theme: {
    minWidth: "163px",
  },
};

export const wideTheme = {
  minWidth: "274px",
};
