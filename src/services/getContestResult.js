import axios from "axios";
import { BASE_URL } from "../constants/urls";

export const getContestResult = (id, setState) => {
  axios
    .get(`${BASE_URL}/concursos/${id}`)
    .then((res) => {
      setState(res.data);
    })
    .catch(() => {
      setState(false);
    });
};
