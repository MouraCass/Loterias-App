import React, { useState, useEffect } from "react";
import GlobalStateContext from "./GlobalStateContext";
import { BASE_URL } from "../constants/urls";
import useRequestData from "../hooks/useRequestData";
import { getContestResult } from "../services/getContestResult";

const GlobalState = (props) => {
  const [loteryId, setLoteryId] = useState(0);
  const [result, setResult] = useState();
  const { data: loteryGames } = useRequestData(`${BASE_URL}/loterias`, []);

  const { data: loteryContests } = useRequestData(
    `${BASE_URL}/loterias-concursos`,
    []
  );

  const contestId =
    loteryContests[loteryId] && loteryContests[loteryId].concursoId;

  useEffect(() => {
    if (contestId) {
      getContestResult(contestId, setResult);
    }
  }, [contestId]);

  const data = { result, loteryId, loteryGames, setLoteryId };

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
