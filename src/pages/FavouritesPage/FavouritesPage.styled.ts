import styled from "styled-components";

import spaceman from "../../images/bgImages/spaceman.jpg";

export const HeroSection = styled.section`
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 200px;
  padding-bottom: 150px;

  text-align: center;

  background-image: linear-gradient(
      rgba(47, 48, 58, 0.4),
      rgba(47, 48, 58, 0.4)
    ),
    url(${spaceman});
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const FavouritesHeading = styled.h2`
  font-weight: 800;
  font-size: 48px;
  line-height: 1.2083;
  text-transform: uppercase;

  color: var(--color-font-light);
`;

export const FavouritesSection = styled.section`
  padding-top: 60px;
  padding-bottom: 60px;
`;

export const Btn = styled.button`
  display: block;
  margin-left: auto;
  padding: 16px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 29px;
  background-color: transparent;
  color: var(--color-btn-filter);

  border: none;
  cursor: pointer;

  transition: background-color var(--anim);

  :hover,
  :focus {
    background-color: var(--color-btn-secondary);
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 23px;
  margin-top: 24px;
  flex-wrap: wrap;
`;
