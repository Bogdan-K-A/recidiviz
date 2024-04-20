import React from "react";
import {
  StyledItem,
  StyledList,
  StyledNetwork,
  StyledTitle,
} from "./NetworkList.styled";

export const NetworkList = () => {
  const networkItem = [
    { link: "#", text: "Twitter" },
    { link: "#", text: "Medium" },
    { link: "#", text: "GitHub" },
    { link: "#", text: "LinkedIn" },
  ];
  return (
    <StyledNetwork>
      <StyledTitle>NETWORK</StyledTitle>

      <StyledList>
        {networkItem.map(({ link, text }) => (
          <StyledItem key={text}>
            <a href={link}>{text}</a>
          </StyledItem>
        ))}
      </StyledList>
    </StyledNetwork>
  );
};
