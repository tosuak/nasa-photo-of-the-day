import React from "react";
import styled,{ keyframes } from "styled-components";

const kf = keyframes `
  50% {
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`

const StyledFriend = styled.div `
  padding: 8px;
  background-color: ${pr => pr.theme.primaryColor};
  color: ${pr => pr.theme.white};

  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: ${pr => pr.theme.secondaryColor};
  }



  transform: scale(2);
  opacity: 0;
  animation: ${kf} 0.3s ease-in-out forwards;

  button {
    background-color: ${pr => pr.theme.secondaryColor};
  }

  &:hover {
    transform: scale(1.1);
  }
`

export default function Nasa({ info, open, close }) {

    return (
        <StyledFriend>
            <button onClick={() => close()}>Close</button>
            <button onClick={() => open()}>Open</button>
        </StyledFriend>
    )
}