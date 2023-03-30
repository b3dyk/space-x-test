import { useRecoilState } from "recoil";

import { favouritesAtom } from "../../recoil/atoms";
import { Card } from "../../components/Card/Card";

import {
  Btn,
  Disclaimer,
  FavouritesHeading,
  FavouritesSection,
  HeroSection,
  HomeBtn,
  List,
  Wrapper,
} from "./FavouritesPage.styled";
import { Container } from "../../styles/commonStyles";
import { CARDS_SHOWN } from "../../constants/constants";
import {
  CardItem,
  CardItemEmptyTheme,
} from "../../components/Card/Card.styled";
import { ThemeProvider } from "styled-components";

const FavouritesPage: React.FC = () => {
  const [favourites, setFavourites] = useRecoilState(favouritesAtom);

  const placeholderLength = (): number => {
    const arrLength = CARDS_SHOWN - favourites.length;

    if (arrLength < 0) return 0;

    return arrLength;
  };

  return (
    <>
      <HeroSection>
        <Container>
          <FavouritesHeading>Favourites</FavouritesHeading>
        </Container>
      </HeroSection>
      <FavouritesSection>
        <Container>
          {favourites.length > 0 ? (
            <Btn type="button" onClick={() => setFavourites([])}>
              Clear all
            </Btn>
          ) : (
            <Wrapper>
              <Disclaimer>Oops, you don't have any favourites yet</Disclaimer>
              <HomeBtn to="/">Home</HomeBtn>
            </Wrapper>
          )}
          <List>
            {favourites.map((rocket) => (
              <Card rocket={rocket} key={rocket.id} />
            ))}
            {[...new Array(placeholderLength())].map((item, idx) => (
              <ThemeProvider key={idx} theme={CardItemEmptyTheme}>
                <CardItem></CardItem>
              </ThemeProvider>
            ))}
          </List>
        </Container>
      </FavouritesSection>
    </>
  );
};

export default FavouritesPage;
