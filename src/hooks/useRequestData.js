import { useEffect, useState, useCallback } from "react";
import axios from "axios";

const useRequestData = (url, initialState) => {
  const [data, setData] = useState(initialState);

  const getData = useCallback(() => {
    if (!url.includes("undefined")) {
      axios
        .get(url)
        .then((res) => {
          setData(res.data);
        })
        .catch(() => {
          setData(false);
        });
    }
  }, [url]);

  useEffect(() => {
    getData();
  }, [getData, url]);

  return { data, getData };
};

export default useRequestData;
