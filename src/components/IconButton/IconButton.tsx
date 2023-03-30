import { useRecoilState } from "recoil";
import { favouritesAtom } from "../../recoil/atoms";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { StyledIconButton, themeFavourite } from "./IconButton.styled";
import { IconButtonProps } from "../../types/types";
import { ThemeProvider } from "styled-components";
import { HiddenTitle } from "../../styles/commonStyles";

export const IconButton: React.FC<IconButtonProps> = ({
  children,
  rocket,
  title,
}: IconButtonProps) => {
  const location = useLocation();
  const [isAddedToFav, setIsAddedToFav] = useState(false);
  const [favourites, setFavourites] = useRecoilState(favouritesAtom);

  useEffect(() => {
    if (rocket) {
      setIsAddedToFav(favourites.map(({ id }) => id).includes(rocket.id));
    }
  }, [favourites, rocket]);

  const handleDelete = (id: string): void => {
    const filteredList = favourites.filter((rocket) => rocket.id !== id);
    setFavourites(filteredList);
  };

  const toggleAddToFavourites = (): void => {
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
          themeFavourite) || { backgroundColor: "#ececec", hover: "#e5e5e5" }
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
        <HiddenTitle>{title}</HiddenTitle>
      </StyledIconButton>
    </ThemeProvider>
  );
};
