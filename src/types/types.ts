export type RocketType = {
  id: string;
  name: string;
  description: string;
};

export type FetchedData = {
  rockets: RocketType[];
};

export type RocketWithImgType = {
  id: string;
  name: string;
  description: string;
  image: CardImageType;
};

export type RocketsType = RocketWithImgType[];

export type ButtonProps = {
  text: string;
};

export type IconButtonProps = {
  children: React.ReactNode;
  rocket: RocketWithImgType;
  title: string;
};

export type CardProps = {
  rocket: RocketWithImgType;
};

export type IconNavLinkProps = {
  children: React.ReactNode;
  path: string;
  label: string;
};

export type ReadMoreProps = {
  limit: number;
  children: string;
};

export type CardImageType = {
  uri: string;
  alt: string;
};

export type CardImages = CardImageType[];
