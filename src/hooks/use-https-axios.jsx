import { useState, useEffect, useRef } from "react";
import axios from "axios";

const useAxios = (url, method, payload) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);
  // const controllerRef = useRef(new AbortController());

  useEffect(() => {
    (async () => {
      if (url === "") {
        console.log("empty url");
      } else if (method === "get" || method === "GET" || payload === false) {
        try {
          const response = await axios.request({
            // signal: controllerRef.current.signal,
            url: url,
            method: method,
          });

          setData(response.data);
        } catch (error) {
          // setError(error.message);
        } finally {
          setLoaded(true);
        }
      } else {
        try {
          const response = await axios.request({
            data: payload,
            // signal: controllerRef.current.signal,
            method: method,
            url: url,
          });

          setData(response.data);
        } catch (error) {
          // setError(error.message);
        } finally {
          setLoaded(true);
        }
      }
    })();
  }, [url]);
  return { data, error, loaded };
};

export default useAxios;
