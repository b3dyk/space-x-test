import styled from "styled-components";

export const HeroSection = styled.section`
  position: relative;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;

  background-color: var(--color-bg-hero);
  text-align: center;
  padding-top: 229px;
  padding-bottom: 33px;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const CarouselHandler = styled.div`
  position: absolute;
  top: 57%;
  left: 47%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  gap: 8px;
`;

export const Heading = styled.h1`
  font-weight: 800;
  font-size: 48px;
  line-height: 1.208;
  text-transform: uppercase;
  color: var(--color-font-light);
`;

export const StyledHeading = styled.h2`
  margin-bottom: 36px;
  margin-top: -56px;
  font-weight: 800;
  font-size: 310px;
  line-height: 1.2;
  text-transform: uppercase;
  color: var(--color-font-light);
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.p`
  font-family: "Lato";
  font-style: normal;
  font-weight: 300;
  font-size: 32px;
  line-height: 1.1875;
  color: var(--color-font-light);

  text-shadow: 1px 0px 1px rgba(0, 0, 0, 1), 0px 1px 1px rgba(0, 0, 0, 1),
    -1px 0px 1px rgba(0, 0, 0, 1), 0px -1px 1px rgba(0, 0, 0, 1);
`;

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

export const ToursSection = styled.section`
  padding-top: 96px;
  padding-bottom: 96px;
`;

export const ToursHeading = styled.h2`
  font-weight: 800;
  font-size: 32px;
  line-height: 1.1875;
  text-transform: uppercase;
`;

export const List = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 24px;
  overflow: hidden;
`;
