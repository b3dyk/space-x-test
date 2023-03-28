import { useState } from "react";
import { ReadMoreProps } from "../../types/types";
import { Btn, CardDesc } from "./ReadMoreReadLess.styled";

export const ReadMoreReadLess: React.FC<ReadMoreProps> = ({
  limit,
  children,
}) => {
  const [isReadMoreShown, setIsReadMoreShown] = useState(true);

  const toggleReadMore = () => {
    setIsReadMoreShown((prev) => !prev);
  };
  return (
    <CardDesc>
      {isReadMoreShown ? children.slice(0, limit) : children}
      <Btn type="button" onClick={toggleReadMore}>
        {isReadMoreShown ? "...more" : "less"}
      </Btn>
    </CardDesc>
  );
};
