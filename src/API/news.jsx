import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Print from "../components/printNews";

function NewsApi() {
  const [data, setData] = useState([]);
  const url =
    "https://newsapi.org/v2/everything?q=indonesia&apiKey=x";

  useEffect(() => {
    getAllNewsWithAxiosHandlerLoad();
  }, []);

  function getAllNewsWithAxiosHandlerLoad() {
    axios.get(url).then((response) => {
      console.log(response.data.articles[0]);
      setData(response.data.articles[0]);
    });
  }
  
  useEffect(() => {
    let timer = null;
    let i = Math.floor(Math.random() * 20);
    timer = setInterval(() => getAllNewsWithAxiosHandler(i), 60000);
    return () => clearInterval(timer);
  });

  function getAllNewsWithAxiosHandler(i) {
    axios.get(url).then((response) => {
      console.log(response.data.articles[i]);
      setData(response.data.articles[i]);
    });
  }

  useEffect(() => {
    console.log(data);
  });

  return <div className="containerNews"><Print data={data}/></div>;
}

export default NewsApi;
