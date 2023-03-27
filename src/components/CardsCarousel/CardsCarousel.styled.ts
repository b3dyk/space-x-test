import styled from "styled-components";

export const Thumb = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 43px;
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const ToursHeading = styled.h2`
  font-weight: 800;
  font-size: 32px;
  line-height: 1.1875;
  text-transform: uppercase;
`;

export const ListWrapper = styled.div`
  overflow: hidden;
`;

export const List = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 24px;
  transition: var(--anim);
`;

export const CardCarousel = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 40px;
`;
