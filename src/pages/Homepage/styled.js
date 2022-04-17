import styled from "styled-components";
import { MEGA, RESULT } from "../../constants/colors";

export const Main = styled.div`
  display: flex;
  min-height: 100vh;
`;

export const LeftSide = styled.div`
  width: 50vw;
  @media screen and (max-width: 600px) {
    width: 40vw;
  }
`;

export const Border = styled.div`
  width: 10vw;
  height: 100vh;
  max-height: 100vh;
  background-color: ${RESULT};
  position: absolute;
  left: 25vw;
  border-top-left-radius: 50%;
  border-bottom-left-radius: 50%;
  @media screen and (max-width: 600px) {
    width: 8vw;
    left: 25vw;
  }
  @media screen and (max-width: 426px) {
    border-bottom-right-radius: 50%;
    border-bottom-left-radius: 50%;
    border-top-left-radius: 0%;
    transform: rotate(180deg);
    width: 100vw;
    height: 5vh;
    position: absolute;
    top: 50vh;
    left: 0;
  }
`;

export const RightSide = styled.div`
  width: 100vw;
  z-index: 1;
`;

export const SpinnerContainer = styled.div `
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${RESULT};
`
export const StyledSpinner = styled.svg`
  animation: rotate 2s linear infinite;
  position: absolute;
  width: 90px;
  height: 90px;
  
  & .path {
    stroke: ${MEGA};
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }
  
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;
