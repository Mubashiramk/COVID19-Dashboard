import React, { useEffect, useState } from "react";
import Dashboard from "./Containers/Dashboard/Index";
import Card from "./Components/Card/Index";
import "./App.css";
import axios from "./axios";
import CountryFilter from "./Components/CountryFilter";

const App = () => {
  const [globalConfirmed, setGlobalConfirmed] = useState(0);
  const [globalDeath, setGlobalDeath] = useState(0);
  const [globalRecovered, setGlobalRecovered] = useState(0);
  const [summary, setSummary] = useState([]);
  const [loading, setLoading] = useState(false);
  const [country, setCountry] = useState("");

  useEffect(() => {
    setLoading(true);
    axios
      .get("/summary")
      .then((res) => {
        setLoading(false);
        console.log(res);
        if (res.status === 200) {
          setGlobalConfirmed(res.data.Global.TotalConfirmed);
          setGlobalDeath(res.data.Global.TotalDeaths);
          setGlobalRecovered(res.data.Global.TotalRecovered);
          setSummary(res.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const countryHandler = (e) => {
    setCountry(e.target.value);
  };

  if (loading) {
    return <p>loading</p>;
  }
  console.log("appnfnv");
  return (
    <div className="main">
      <Card
        newConfirmed={globalConfirmed}
        newDeath={globalDeath}
        newRecovered={globalRecovered}
        country={country}
      />
      <CountryFilter item={summary} onchange={countryHandler} />
      <Dashboard />
    </div>
  );
};

export default App;
