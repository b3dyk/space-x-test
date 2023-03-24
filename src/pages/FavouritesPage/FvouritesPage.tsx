import { Card } from "../../components/Card/Card";
import { Container } from "../../components/Layout/Layout.styled";
import {
  Btn,
  FavouritesHeading,
  FavouritesSection,
  HeroSection,
  List,
} from "./FavouritesPage.styled";
import cosmonaut from "../../images/cardimages/spaceman.jpg";

const FavouritesPage: React.FC = () => {
  return (
    <>
      <HeroSection>
        <Container>
          <FavouritesHeading>Favourites</FavouritesHeading>
        </Container>
      </HeroSection>
      <FavouritesSection>
        <Container>
          <Btn type="button">Clear all</Btn>
          <List>
            <Card
              image={cosmonaut}
              title="extraordinary tour"
              text="Lorem ipsum dolor sit amet consectetur adipiscing elit"
            />
          </List>
        </Container>
      </FavouritesSection>
    </>
  );
};

export default FavouritesPage;
