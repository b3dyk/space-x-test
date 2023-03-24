import styled from "styled-components";

export const CardItem = styled.li`
  flex-basis: calc((100% - 24px * (3 - 1)) / 3);
  border: 1px solid var(--color-btn-main);
  transition: box-shadow var(--anim);
`;

export const Description = styled.div`
  padding-left: 32px;
  padding-right: 32px;
  padding-top: 28px;
  padding-bottom: 26px;
  text-align: center;
`;

export const CardHeading = styled.h3`
  margin-bottom: 16px;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.208;
  text-transform: uppercase;
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-top: auto;
`;
