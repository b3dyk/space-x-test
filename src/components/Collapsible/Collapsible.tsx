import { useState } from "react";
import { ReadMoreProps } from "../../types/types";
import { Btn, CardDesc } from "./Collapsible.styled";

export const Collapsible: React.FC<ReadMoreProps> = ({ limit, children }) => {
  const [isReadMoreShown, setIsReadMoreShown] = useState(true);

  const toggleReadMore = (): void => {
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
