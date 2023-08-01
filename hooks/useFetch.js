import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: {...query},
    headers: {
      "X-RapidAPI-Key": "016cb3fab6msh65c09b0279d49c6p132a07jsnaa8fccc5ad36",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };
  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios.request(options);
      setData(res.data.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      console.log(error);
      alert("An error has occured!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetchData = () => {
    setLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetchData };
};

export default useFetch;
