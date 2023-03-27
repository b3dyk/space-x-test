import { useQuery } from "@apollo/client";
import { useState } from "react";

import { GET_ROCKETS } from "../../apollo/client";
import { SVG } from "../../images";
import { cardImages } from "../../images";
import { Card } from "../../components/Card/Card";
import { RocketType } from "../../types/types";
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

export const CardsCarousel: React.FC = () => {
  const { loading, error, data } = useQuery(GET_ROCKETS);
  const [currentIdx, setCurrentIdx] = useState(0);

  const prev = () =>
    setCurrentIdx((currentIdx) =>
      currentIdx === 0 ? data.rockets.length - CARDS_SHOWN : currentIdx - 1
    );
  const next = () =>
    setCurrentIdx((currentIdx) =>
      currentIdx === data.rockets.length - CARDS_SHOWN ? 0 : currentIdx + 1
    );
  const cardCarouselHandler = (index: number) => {
    setCurrentIdx(index);
  };

  return (
    <>
      <Thumb>
        <ToursHeading>Popular tours</ToursHeading>
        <BtnWrapper>
          <StyledIconButton type="button" onClick={prev}>
            <SVG.ArrowLeft />
          </StyledIconButton>
          <StyledIconButton type="button" onClick={next}>
            <SVG.ArrowRight />
          </StyledIconButton>
        </BtnWrapper>
      </Thumb>
      {error && <p>{error.message}</p>}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ListWrapper>
          <List style={{ transform: `translateX(-${currentIdx * 33.55}%)` }}>
            {data.rockets.map((rocket: RocketType, idx: number) => (
              <Card
                key={rocket.id}
                rocket={rocket}
                image={
                  cardImages[
                    idx < cardImages.length ? idx : idx - cardImages.length
                  ]
                }
              />
            ))}
          </List>
          <CardCarousel>
            {data.rockets.slice(0, 2).map((rocket: RocketType, idx: number) => (
              <div key={rocket.id} onClick={() => cardCarouselHandler(idx)}>
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
