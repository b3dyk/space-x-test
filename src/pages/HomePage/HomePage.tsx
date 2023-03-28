import { ReactElement } from "react";

import { ToursSection } from "./HomePage.styled";
import { HeroSection } from "../../components/HeroSection/HeroSection";
import { CardsCarousel } from "../../components/CardsCarousel/CardsCarousel";
import { Container } from "../../styles/commonStyles";

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
