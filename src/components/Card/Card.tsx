import { ThemeProvider } from "styled-components";
import { useLocation } from "react-router-dom";

import { ReactComponent as Heart } from "../../images/svg/heart.svg";
import { ReactComponent as Delete } from "../../images/svg/delete.svg";
import { Button } from "../Button/Button";
import { IconButton } from "../IconButton/IconButton";
import { CardItem, CardHeading, Description, BtnWrapper } from "./Card.styled";
import { themeWide } from "../Button/Button.styled";
import { ReadMoreReadLess } from "../ReadMoreReadLess/ReadMoreReadLess";

type CardProps = {
  image: string;
  title: string;
  text: string;
};

export const Card: React.FC<CardProps> = ({
  image,
  title,
  text,
}: CardProps) => {
  const location = useLocation();
  return (
    <CardItem>
      <img src={image} alt="space" width="411" />
      <Description>
        <CardHeading>{title}</CardHeading>
        <ReadMoreReadLess limit={100}>{text}</ReadMoreReadLess>
        <BtnWrapper>
          <ThemeProvider theme={themeWide}>
            <Button text="buy" />
          </ThemeProvider>
          <IconButton>
            {location.pathname.includes("favourites") ? (
              <Delete />
            ) : (
              <Heart style={{ fill: "#000" }} />
            )}
          </IconButton>
        </BtnWrapper>
      </Description>
    </CardItem>
  );
};
