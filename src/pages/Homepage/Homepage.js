import React, { useContext } from "react";
import ContestArea from "../../components/ContestArea/ContestArea";
import ResultArea from "../../components/ResultArea/ResultArea";
import GlobalStateContext from "../../global/GlobalStateContext";
import {
  Border,
  LeftSide,
  Main,
  RightSide,
  SpinnerContainer,
  StyledSpinner,
} from "./styled";

const Homepage = () => {
  const { result, loteryGames } = useContext(GlobalStateContext);
  return (
    <div>
      {(result && loteryGames) ? (
        <Main>
          <LeftSide>
            <ContestArea />
          </LeftSide>
          <Border />
          <RightSide>
            <ResultArea />
          </RightSide>
        </Main>
      ) : (
        <SpinnerContainer>
          <StyledSpinner viewBox="0 0 50 50">
            <circle
              className="path"
              cx="25"
              cy="25"
              r="20"
              fill="none"
              strokeWidth="4"
            />
          </StyledSpinner>
        </SpinnerContainer>
      )}
    </div>
  );
};

export default Homepage;
