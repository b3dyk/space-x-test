import { CardImages } from "../types/types";

import spaceship from "./cardImages/spaseship.webp";
import spaceman from "./cardImages/spaceman.webp";
import spacegirl from "./cardImages/astronaut.webp";
import spacestation from "./bgImages/spaceship.jpg";
import cosmonaut from "./bgImages/spaceman.jpg";
import girl from "./bgImages/astronaut.jpg";

import { ReactComponent as ArrowDown } from "./svg/arrow-down.svg";
import { ReactComponent as ArrowLeft } from "./svg/arrow-left.svg";
import { ReactComponent as ArrowRight } from "./svg/arrow-right.svg";
import { ReactComponent as CarouselDotFull } from "./svg/carouseldot-full.svg";
import { ReactComponent as CarouselDot } from "./svg/carouseldot-empty.svg";
import { ReactComponent as CarouselDotFullDark } from "./svg/carouseldot-full-dark.svg";
import { ReactComponent as CarouselDotDark } from "./svg/carouseldot-empty-dark.svg";
import { ReactComponent as Delete } from "./svg/delete.svg";
import { ReactComponent as Heart } from "./svg/heart.svg";

export const cardImages: CardImages = [
  { uri: spaceship, alt: "Spaceship" },
  { uri: spacegirl, alt: "Astronaut" },
  { uri: spaceman, alt: "Cosmonaut" },
];
export const bgImages: string[] = [spacestation, cosmonaut, girl];

export const SVG = {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  CarouselDotFull,
  CarouselDot,
  CarouselDotFullDark,
  CarouselDotDark,
  Heart,
  Delete,
};
