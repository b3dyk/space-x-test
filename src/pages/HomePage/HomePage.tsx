import { ReactElement } from "react";

import { Container } from "../../components/Layout/Layout.styled";
import { ToursSection } from "./HomePage.styled";
import { HeroSection } from "../../components/HeroSection/HeroSection";
import { CardsCarousel } from "../../components/CardsCarousel/CardsCarousel";

const HomePage: React.FC = (): ReactElement => {
  return (
    <>
      <HeroSection />

      <ToursSection id="tours">
        <Container>
          <CardsCarousel />
        </Container>
      </ToursSection>
    </>
  );
};

export default HomePage;
