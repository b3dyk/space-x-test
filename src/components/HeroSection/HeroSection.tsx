import { useState } from "react";

import { SVG } from "../../images";
import { bgImages } from "../../images";
import { Container } from "../Layout/Layout.styled";

import {
  Heading,
  StyledHeroSection,
  StyledHeading,
  Anchor,
  CarouselHandler,
} from "./HeroSection.styled";

export const HeroSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (imageIndex: number) => {
    setCurrentIndex(imageIndex);
  };

  return (
    <StyledHeroSection
      style={{
        backgroundImage: `linear-gradient(
    rgba(47, 48, 58, 0.4),
    rgba(47, 48, 58, 0.4)
  ), url(${bgImages[currentIndex]})`,
      }}
    >
      <CarouselHandler>
        {bgImages.map((image: string, imageIndex: number) => (
          <div key={imageIndex} onClick={() => goToSlide(imageIndex)}>
            {currentIndex === imageIndex ? (
              <SVG.CarouselDotFull style={{ cursor: "pointer" }} />
            ) : (
              <SVG.CarouselDot style={{ cursor: "pointer" }} />
            )}
          </div>
        ))}
      </CarouselHandler>
      <Container>
        <Heading>The space is waiting for</Heading>
        <StyledHeading>You</StyledHeading>
        <Anchor href="#tours">
          Explore tours
          <SVG.ArrowDown />
        </Anchor>
      </Container>
    </StyledHeroSection>
  );
};
