import { ReactElement, useState } from "react";
import { Container } from "../../components/Layout/Layout.styled";
import {
  BtnWrapper,
  Heading,
  HeroSection,
  ToursHeading,
  StyledHeading,
  Text,
  Thumb,
  Wrapper,
  ToursSection,
  List,
  CarouselHandler,
} from "./HomePage.styled";
import { ReactComponent as ArrowDown } from "../../images/svg/arrow-down.svg";
import { ReactComponent as ArrowLeft } from "../../images/svg/arrow-left.svg";
import { ReactComponent as ArrowRight } from "../../images/svg/arrow-right.svg";
import { ReactComponent as CarouselDotFull } from "../../images/svg/carouseldot-full.svg";
import { ReactComponent as CarouselDot } from "../../images/svg/carouseldot-empty.svg";
import { IconButton } from "../../components/IconButton/IconButton";
import { ThemeProvider } from "styled-components";
import { themeHero } from "../../components/IconButton/IconButton.styled";
import spaceman from "../../images/spaceman.jpg";
import spaceship from "../../images/spaceship.jpg";
import astronaut from "../../images/astronaut.jpg";
import cosmonaut from "../../images/cardimages/spaceman.jpg";
import spacestation from "../../images/cardimages/spaseship.jpg";
import girl from "../../images/cardimages/astronaut.jpg";
import { Card } from "../../components/Card/Card";
import { GET_ROCKETS, RocketType } from "../../apollo/client";
import { useQuery } from "@apollo/client";

const cardImages: string[] = [spacestation, girl, cosmonaut];

type ImageObject = {
  url: string;
  title: string;
};

const images: ImageObject[] = [
  { url: spaceman, title: "spaceman" },
  { url: spaceship, title: "spaceship" },
  { url: astronaut, title: "astronaut" },
];

const HomePage: React.FC = (): ReactElement => {
  const { loading, error, data } = useQuery(GET_ROCKETS);

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (imageIndex: number) => {
    setCurrentIndex(imageIndex);
  };

  return (
    <>
      <HeroSection
        style={{
          backgroundImage: `linear-gradient(
    rgba(47, 48, 58, 0.4),
    rgba(47, 48, 58, 0.4)
  ), url(${images[currentIndex].url})`,
        }}
      >
        <CarouselHandler>
          {images.map((image: ImageObject, imageIndex: number) => (
            <div key={imageIndex} onClick={() => goToSlide(imageIndex)}>
              {currentIndex === imageIndex ? (
                <CarouselDotFull style={{ cursor: "pointer" }} />
              ) : (
                <CarouselDot style={{ cursor: "pointer" }} />
              )}
            </div>
          ))}
        </CarouselHandler>
        <Container>
          <Heading>The space is waiting for</Heading>
          <StyledHeading>You</StyledHeading>
          <Wrapper>
            <Text>Explore tours</Text>
            <ThemeProvider theme={themeHero}>
              <IconButton>
                <ArrowDown />
              </IconButton>
            </ThemeProvider>
          </Wrapper>
        </Container>
      </HeroSection>
      <ToursSection>
        <Container>
          <Thumb>
            <ToursHeading>Popular tours</ToursHeading>
            <BtnWrapper>
              <IconButton>
                <ArrowLeft />
              </IconButton>
              <IconButton>
                <ArrowRight />
              </IconButton>
            </BtnWrapper>
          </Thumb>
          {error && <p>{error.message}</p>}
          {loading ? (
            <p>Loading...</p>
          ) : (
            <List>
              {data.rockets.map(
                ({ id, name, description }: RocketType, idx: number) => (
                  <Card
                    key={id}
                    image={
                      cardImages[
                        idx < cardImages.length ? idx : idx - cardImages.length
                      ]
                    }
                    title={name}
                    text={description}
                  />
                )
              )}
            </List>
          )}
        </Container>
      </ToursSection>
    </>
  );
};

export default HomePage;

/**
 * 
 * <Heading>The space is waiting for</Heading>
            <StyledHeading>You</StyledHeading>
            <Wrapper>
              <Text>Explore tours</Text>
              <ThemeProvider theme={themeHero}>
                <IconButton>
                  <ArrowDown />
                </IconButton>
              </ThemeProvider>
            </Wrapper>
 * 
 * 
 */
