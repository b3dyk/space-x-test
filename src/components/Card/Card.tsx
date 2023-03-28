import { ThemeProvider } from "styled-components";
import { useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { favouritesAtom } from "../../recoil/atoms";
import { SVG } from "../../images";
import { Button } from "../Button/Button";
import { IconButton } from "../IconButton/IconButton";
import { CardItem, CardHeading, Description, BtnWrapper } from "./Card.styled";
import { themeWide } from "../Button/Button.styled";
import { ReadMoreReadLess } from "../ReadMoreReadLess/ReadMoreReadLess";
import { CardProps } from "../../types/types";

export const Card: React.FC<CardProps> = ({ rocket }: CardProps) => {
  const rockets = useRecoilValue(favouritesAtom);

  const location = useLocation();

  const isAddedToFav = rockets.find((item) => item.id === rocket.id);

  return (
    <CardItem>
      <img src={rocket.image} alt="space" width="411" />
      <Description>
        <CardHeading>{rocket.name}</CardHeading>
        <ReadMoreReadLess limit={100}>{rocket.description}</ReadMoreReadLess>
        <BtnWrapper>
          <ThemeProvider theme={themeWide}>
            <Button text="buy" />
          </ThemeProvider>
          {location.pathname.includes("favourites") ? (
            <IconButton rocket={rocket}>
              <SVG.Delete />
            </IconButton>
          ) : (
            <IconButton rocket={rocket}>
              <SVG.Heart
                style={isAddedToFav ? favouritesStyle : generalStyle}
              />
            </IconButton>
          )}
        </BtnWrapper>
      </Description>
    </CardItem>
  );
};

const generalStyle = {
  fill: "#000",
};

const favouritesStyle = {
  fill: "#fff",
};
