import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";

import { GET_ROCKETS } from "../../apollo/client";
import { SVG } from "../../images";
import { cardImages } from "../../images";
import { Card } from "../../components/Card/Card";
import { RocketWithImgType, RocketType, RocketsType } from "../../types/types";
import { CARDS_SHOWN } from "../../constants/constants";

import {
  BtnWrapper,
  ToursHeading,
  Thumb,
  List,
  ListWrapper,
  CardCarousel,
} from "./CardsCarousel.styled";
import { StyledIconButton } from "../IconButton/IconButton.styled";
import { HiddenTitle } from "../../styles/commonStyles";

export const CardsCarousel: React.FC = () => {
  const { loading, error, data } = useQuery(GET_ROCKETS);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [rockets, setRockets] = useState<RocketsType>([]);

  const prev = (): void =>
    setCurrentIdx((currentIdx) =>
      currentIdx === 0 ? data.rockets.length - CARDS_SHOWN : currentIdx - 1
    );
  const next = (): void =>
    setCurrentIdx((currentIdx) =>
      currentIdx === data.rockets.length - CARDS_SHOWN ? 0 : currentIdx + 1
    );

  const carouselHandler = (index: number): void => {
    setCurrentIdx(index);
  };

  const numberOfPages = (arrayLength: number): number => {
    return arrayLength - CARDS_SHOWN + 1;
  };

  useEffect(() => {
    if (data) {
      setRockets(
        data.rockets.map((rocket: RocketType, idx: number) => {
          const newRocket = {
            ...rocket,
            image: {
              uri: cardImages[idx % 3].uri,
              alt: cardImages[idx % 3].alt,
            },
          };
          return newRocket;
        })
      );
    }
  }, [data]);

  return (
    <>
      <Thumb>
        <ToursHeading>Popular tours</ToursHeading>
        <BtnWrapper>
          <StyledIconButton type="button" onClick={prev}>
            <SVG.ArrowLeft />
            <HiddenTitle>Previous</HiddenTitle>
          </StyledIconButton>
          <StyledIconButton type="button" onClick={next}>
            <SVG.ArrowRight />
            <HiddenTitle>Next</HiddenTitle>
          </StyledIconButton>
        </BtnWrapper>
      </Thumb>
      {error && <p>{error.message}</p>}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ListWrapper>
          <List style={{ transform: `translateX(-${currentIdx * 33.75}%)` }}>
            {rockets.map((rocket: RocketWithImgType) => (
              <Card key={rocket.id} rocket={rocket} />
            ))}
          </List>
          <CardCarousel>
            {rockets
              .slice(0, numberOfPages(rockets.length))
              .map((rocket: RocketWithImgType, idx: number) => (
                <div key={rocket.id} onClick={() => carouselHandler(idx)}>
                  {currentIdx === idx ? (
                    <SVG.CarouselDotFullDark style={{ cursor: "pointer" }} />
                  ) : (
                    <SVG.CarouselDotDark style={{ cursor: "pointer" }} />
                  )}
                </div>
              ))}
          </CardCarousel>
        </ListWrapper>
      )}
    </>
  );
};
