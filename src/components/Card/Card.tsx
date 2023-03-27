import { ThemeProvider } from "styled-components";
import { useLocation } from "react-router-dom";

import { ReactComponent as Heart } from "../../images/svg/heart.svg";
import { ReactComponent as Delete } from "../../images/svg/delete.svg";
import { Button } from "../Button/Button";
import { IconButton } from "../IconButton/IconButton";
import { CardItem, CardHeading, Description, BtnWrapper } from "./Card.styled";
import { themeWide } from "../Button/Button.styled";
import { ReadMoreReadLess } from "../ReadMoreReadLess/ReadMoreReadLess";
import { RocketType } from "../../types/types";
import { useRecoilValue } from "recoil";
import { favouritesAtom } from "../../recoil/atoms";

type CardProps = {
  rocket: RocketType;
  image: string;
};

export const Card: React.FC<CardProps> = ({ rocket, image }: CardProps) => {
  const rockets = useRecoilValue(favouritesAtom);

  const location = useLocation();

  const isAddedToFav = rockets.find((item) => item.id === rocket.id);

  return (
    <CardItem>
      <img src={image} alt="space" width="411" />
      <Description>
        <CardHeading>{rocket.name}</CardHeading>
        <ReadMoreReadLess limit={100}>{rocket.description}</ReadMoreReadLess>
        <BtnWrapper>
          <ThemeProvider theme={themeWide}>
            <Button text="buy" />
          </ThemeProvider>
          {location.pathname.includes("favourites") ? (
            <IconButton rocket={rocket}>
              <Delete />
            </IconButton>
          ) : (
            <IconButton rocket={rocket}>
              <Heart style={isAddedToFav ? favouritesStyle : generalStyle} />
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
