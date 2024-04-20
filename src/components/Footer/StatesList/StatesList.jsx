import React from "react";
import { StyledItem, StyledList, StyledTitle } from "./StatesList.styled";

export const StatesList = () => {
  const statesItem = [
    { link: "#", text: "Overview" },
    { link: "#", text: "Idaho" },
    { link: "#", text: "Maine" },
    { link: "#", text: "Michigan" },
    { link: "#", text: "Missouri" },
    { link: "#", text: "North Dakota" },
    { link: "#", text: "Pennsylvania" },
    { link: "#", text: "Tennessee" },
  ];
  return (
    <div>
      <StyledTitle>STATES</StyledTitle>

      <StyledList>
        {statesItem.map(({ link, text }) => (
          <StyledItem key={text}>
            <a href={link}>{text}</a>
          </StyledItem>
        ))}
      </StyledList>
    </div>
  );
};
