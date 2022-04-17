import React, { useContext } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";
import {
  Main,
  ResultContainer,
  SortedNumber,
  Warning,
  WarningContainer,
} from "./styled";

const ContestResult = () => {
  const { result } = useContext(GlobalStateContext);

  const renderResult = () => {
    return (
      result &&
      result.numeros &&
      result.numeros.map((number) => {
        return <SortedNumber key={number}> {number}</SortedNumber>;
      })
    );
  };
  return (
    <Main>
      <ResultContainer>{renderResult()}
      </ResultContainer>
      <WarningContainer>
        <Warning>
        Esta é uma aplicação Web Front-End, não há contato com a CAIXA Econômica Federal
        </Warning>
      </WarningContainer>
    </Main>
  );
};

export default ContestResult;
