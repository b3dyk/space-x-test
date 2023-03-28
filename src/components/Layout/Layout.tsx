import { Link, useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";

import logo from "../../images/logo/logo.png";
import { ReactComponent as Heart } from "../../images/svg/heart.svg";
import {
  BtnGroup,
  Container,
  Header,
  LinkItem,
  List,
  StyledNavLink,
  Wrapper,
} from "./Layout.styled";
import { Button } from "../Button/Button";
import { IconNavLink } from "../IconNavLink/IconNavLink";

const Layout: React.FC = () => {
  const location = useLocation();
  return (
    <>
      <Header>
        <Container>
          <Wrapper>
            <Link to="/">
              <img src={logo} alt="logo" width="229" />
            </Link>
            <nav>
              <List>
                <LinkItem>
                  <StyledNavLink to="/">Home</StyledNavLink>
                </LinkItem>
                <LinkItem>
                  <StyledNavLink to="tours">Tours</StyledNavLink>
                </LinkItem>
                <LinkItem>
                  <StyledNavLink to="about">About</StyledNavLink>
                </LinkItem>
                <LinkItem>
                  <StyledNavLink to="help">Help</StyledNavLink>
                </LinkItem>
              </List>
            </nav>
            <BtnGroup>
              <IconNavLink>
                <Heart
                  style={{
                    fill: location.pathname.includes("favourites")
                      ? "#fff"
                      : "#1e1e1e",
                  }}
                />
              </IconNavLink>
              <Button text="Sign In" />
            </BtnGroup>
          </Wrapper>
        </Container>
      </Header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
