import { ThemeProvider } from "styled-components";
import { useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { favouritesAtom } from "../../recoil/atoms";
import { SVG } from "../../images";
import { IconButton } from "../IconButton/IconButton";
import {
  CardItem,
  CardHeading,
  Description,
  BtnWrapper,
  favouritesStyle,
  generalStyle,
} from "./Card.styled";
import { Collapsible } from "../Collapsible/Collapsible";
import { CardProps } from "../../types/types";
import { StyledButton, wideTheme } from "../../styles/commonStyles";

export const Card: React.FC<CardProps> = ({ rocket }: CardProps) => {
  const rockets = useRecoilValue(favouritesAtom);

  const location = useLocation();

  const isAddedToFav = rockets.find((item) => item.id === rocket.id);

  return (
    <CardItem>
      <img src={rocket.image.uri} alt={rocket.image.alt} />
      <Description>
        <CardHeading>{rocket.name}</CardHeading>
        <Collapsible limit={100}>{rocket.description}</Collapsible>
        <BtnWrapper>
          <ThemeProvider theme={wideTheme}>
            <StyledButton>Buy</StyledButton>
          </ThemeProvider>
          {location.pathname.includes("favourites") ? (
            <IconButton rocket={rocket} title="delete">
              <SVG.Delete />
            </IconButton>
          ) : (
            <IconButton rocket={rocket} title="add to favourites">
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
