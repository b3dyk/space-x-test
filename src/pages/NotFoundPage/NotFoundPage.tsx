import animation404 from "../../images/404.gif";
import { Container, HomeLink, Text, Image } from "./NotFoundPage.styled";

const NotFoundPage = () => {
  return (
    <Container>
      <Image style={{ backgroundImage: `url(${animation404})` }}></Image>
      <Text>This page doesn't exist</Text>
      <HomeLink to="/">Go to Home Page</HomeLink>
    </Container>
  );
};

export default NotFoundPage;
