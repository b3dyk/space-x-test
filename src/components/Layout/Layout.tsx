import { Link, useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";

import logo from "../../images/logo/logo.png";
import { SVG } from "../../images";
import {
  BtnGroup,
  Header,
  List,
  StyledNavLink,
  Wrapper,
} from "./Layout.styled";
import { IconNavLink } from "../IconNavLink/IconNavLink";
import { Container, StyledButton } from "../../styles/commonStyles";

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
                <li>
                  <StyledNavLink to="/">Home</StyledNavLink>
                </li>
                <li>
                  <StyledNavLink to="tours">Tours</StyledNavLink>
                </li>
                <li>
                  <StyledNavLink to="about">About</StyledNavLink>
                </li>
                <li>
                  <StyledNavLink to="help">Help</StyledNavLink>
                </li>
              </List>
            </nav>
            <BtnGroup>
              <IconNavLink path="favourites" label="favourites">
                <SVG.Heart
                  style={{
                    fill: location.pathname.includes("favourites")
                      ? "#fff"
                      : "#1e1e1e",
                  }}
                />
              </IconNavLink>
              <StyledButton>Sign In</StyledButton>
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
