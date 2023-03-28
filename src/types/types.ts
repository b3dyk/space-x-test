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
  image: string;
};

export type RocketsType = RocketWithImgType[];

export type ButtonProps = {
  text: string;
};

export type IconButtonProps = {
  children: React.ReactNode;
  rocket: RocketWithImgType;
};

export type CardProps = {
  rocket: RocketWithImgType;
};

export type IconNavLinkProps = {
  children: React.ReactNode;
};

export type ReadMoreProps = {
  limit: number;
  children: string;
};
