import React, { useContext } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";
import { Description, Main, Select, Text, Title, TitleArea } from "./styled";
import logo from "../../assets/logo.svg";
import moment from "moment";

const ContestInput = () => {
  const { result, loteryId, loteryGames, setLoteryId } =
    useContext(GlobalStateContext);

  const formatedDate =
    result && moment(result.data, "YYYY-MM-DD").format("DD/MM/YYYY");
  const renderOptions = () => {
    return (
      loteryGames &&
      loteryGames.map((lotery) => {
        return (
          <option key={lotery.id} value={lotery.id}>
            {lotery.nome.toUpperCase()}
          </option>
        );
      })
    );
  };

  const renderTitle = () => {
    return (
      loteryGames &&
      loteryGames.map((lotery) => {
        if (lotery.id === loteryId) {
          return (
            <TitleArea key={lotery.id}>
              <img src={logo} alt="logo" />
              <Title>{lotery.nome.toUpperCase()}</Title>
            </TitleArea>
          );
        }
        return false;
      })
    );
  };

  const renderDetails = () => {
    return (
      result && (
        <Description>
          <p>CONCURSO</p>
          <Text>
            {result.id} - {formatedDate}
          </Text>
        </Description>
      )
    );
  };
  const onChangeGame = (e) => {
    setLoteryId(Number(e.target.value));
  };

  return (
    <Main loteryId={loteryId}>
      <Select onChange={onChangeGame}>{renderOptions()}</Select>
      {renderTitle()}
      {renderDetails()}
    </Main>
  );
};

export default ContestInput;
