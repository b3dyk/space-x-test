import { useRecoilState } from "recoil";
import { favouritesAtom } from "../../recoil/atoms";
import { useLocation } from "react-router-dom";

import { StyledIconButton, themeFavourite } from "./IconButton.styled";
import { RocketType } from "../../types/types";
import { ThemeProvider } from "styled-components";
import { useEffect, useState } from "react";

export type IconButtonProps = {
  children: React.ReactNode;
  rocket?: RocketType;
  style?: any;
};

export const IconButton: React.FC<IconButtonProps> = ({
  children,
  rocket,
}: IconButtonProps) => {
  const location = useLocation();
  const [isAddedToFav, setIsAddedToFav] = useState(false);
  const [favourites, setFavourites] = useRecoilState(favouritesAtom);

  useEffect(() => {
    if (rocket) {
      setIsAddedToFav(favourites.map(({ id }) => id).includes(rocket.id));
    }
  }, [favourites, rocket]);

  const handleDelete = (id: string) => {
    const filteredList = favourites.filter((rocket) => rocket.id !== id);
    setFavourites(filteredList);
  };

  const toggleAddToFavourites = () => {
    if (rocket) {
      if (isAddedToFav) return handleDelete(rocket.id);

      setFavourites((prev) => [...prev, rocket]);
    }
  };

  return (
    <ThemeProvider
      theme={
        (!location.pathname.includes("favourites") &&
          isAddedToFav &&
          themeFavourite) || { backgroundColor: "#ececec" }
      }
    >
      <StyledIconButton
        type="button"
        onClick={
          rocket && location.pathname.includes("favourites")
            ? () => handleDelete(rocket.id)
            : toggleAddToFavourites
        }
      >
        {children}
      </StyledIconButton>
    </ThemeProvider>
  );
};
