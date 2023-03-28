import { useRecoilState } from "recoil";

import { favouritesAtom } from "../../recoil/atoms";
import { Card } from "../../components/Card/Card";

import {
  Btn,
  FavouritesHeading,
  FavouritesSection,
  HeroSection,
  List,
} from "./FavouritesPage.styled";
import { Container } from "../../styles/commonStyles";

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
