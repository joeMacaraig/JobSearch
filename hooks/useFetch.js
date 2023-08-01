import { useState, useEffect } from "react";
import axios from "axios";
import dotenv from "dotenv";

const RAPID_KEY = process.env.RAPID_KEY;

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: { ...query },
    headers: {
      "X-RapidAPI-Key": RAPID_KEY,
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
