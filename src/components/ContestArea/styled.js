import styled from "styled-components";
import { DIA, LOTOF, LOTOM, MEGA, QUINA, TIME } from "../../constants/colors";

export const Main = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding-left: 4vw;
  background-color: ${(props) => {
    switch (props.loteryId) {
      case 0:
        return MEGA;
      case 1:
        return QUINA;
      case 2:
        return LOTOF;
      case 3:
        return LOTOM;
      case 4:
        return TIME;
      case 5:
        return DIA;
      default:
        return;
    }
  }};
  @media screen and (max-width: 426px) {
    transform: rotate(360deg);
    width: 100vw;
    height: 55vh;
    padding: 0;
    align-items: center;
  }
`;
export const TitleArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: fit-content;
  max-width: 75%;
`;

export const Title = styled.h2`
  color: white;
  font-family: "Montserrat", sans-serif;
  margin-left: 1vw;
`;

export const Select = styled.select`
  font-family: "Montserrat", sans-serif;
  font-weight: "400";
  border: none;
  height: 25px;
  border-radius: 5px;
  margin-top: 10vh;
  @media screen and (max-width: 426px) {
    -webkit-transform: translateZ(0px);
    -moz-transform: translateZ(0px);
    transform: translateZ(0px);
  }
`;

export const Description = styled.div`
  color: white;
  font-family: "Montserrat", sans-serif;
  padding-bottom: 3vh;
  @media screen and (max-width: 426px) {
    padding-bottom: 7vh;
  }
`;
export const Text = styled.p`
  font-weight: bold;
`;
