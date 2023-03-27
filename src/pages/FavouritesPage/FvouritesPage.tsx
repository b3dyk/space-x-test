import { useRecoilState, useRecoilValue } from "recoil";

import { favouritesAtom } from "../../recoil/atoms";
import { Card } from "../../components/Card/Card";
import { Container } from "../../components/Layout/Layout.styled";
import { cardImages } from "../../images";

import {
  Btn,
  FavouritesHeading,
  FavouritesSection,
  HeroSection,
  List,
} from "./FavouritesPage.styled";

const FavouritesPage: React.FC = () => {
  const rockets = useRecoilValue(favouritesAtom);
  const [favourites, setFavourites] = useRecoilState(favouritesAtom);
  console.log(favourites);

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
            {rockets.map((rocket, idx) => (
              <Card
                image={
                  cardImages[
                    idx < cardImages.length ? idx : idx - cardImages.length
                  ]
                }
                rocket={rocket}
                key={rocket.id}
              />
            ))}
          </List>
        </Container>
      </FavouritesSection>
    </>
  );
};

export default FavouritesPage;
