import { useRecoilState } from "recoil";

import { favouritesAtom } from "../../recoil/atoms";
import { Card } from "../../components/Card/Card";
import { Container } from "../../components/Layout/Layout.styled";

import {
  Btn,
  FavouritesHeading,
  FavouritesSection,
  HeroSection,
  List,
} from "./FavouritesPage.styled";

const FavouritesPage: React.FC = () => {
  const [favourites, setFavourites] = useRecoilState(favouritesAtom);

  return (
    <>
      <HeroSection>
        <Container>
          <FavouritesHeading>Favourites</FavouritesHeading>
        </Container>
      </HeroSection>
      <FavouritesSection>
        <Container>
          <Btn type="button" onClick={() => setFavourites([])}>
            Clear all
          </Btn>
          <List>
            {favourites.map((rocket) => (
              <Card rocket={rocket} key={rocket.id} />
            ))}
          </List>
        </Container>
      </FavouritesSection>
    </>
  );
};

export default FavouritesPage;
