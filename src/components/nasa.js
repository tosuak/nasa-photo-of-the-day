import React from "react";
import styled,{ keyframes } from "styled-components";


const StyledNasa = styled.div `
  button {
    background-color: ${pr => pr.theme.primaryColorTwo};
    color:  ${pr => pr.theme.tertiaryColor};
    font-size: 1rem;
    font-weight: bold;
    padding: 15px 30px;
    margin: 5px;
    border-radius: 15px;
  }
  button:hover {
    background-color: ${pr => pr.theme.secondaryColorTwo};
  }
`

export default function Nasa({ info, open, close }) {

    return (
        <StyledNasa>
            <button onClick={() => close()}>Close</button>
            <button onClick={() => open()}>Open</button>
        </StyledNasa>
    )
}