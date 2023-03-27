import spaceship from "./cardImages/spaseship.jpg";
import spaceman from "./cardImages/spaceman.jpg";
import spacegirl from "./cardImages/astronaut.jpg";
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

export const cardImages: string[] = [spaceship, spacegirl, spaceman];
export const bgImages: string[] = [cosmonaut, spacestation, girl];

export const SVG = {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  CarouselDotFull,
  CarouselDot,
  CarouselDotFullDark,
  CarouselDotDark,
};
