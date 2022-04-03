import { Bar } from "react-chartjs-2";
import CountryFilter from "../CountryFilter";
import { React, useState } from "react";
import "./countryChart.css";

function CountryChart(props) {
  const summary = props.item;
  let totalConfirmed = summary.Global.TotalConfirmed;
  let totalDeaths = summary.Global.TotalDeaths;
  let totalRecovered = summary.Global.TotalRecovered;

  const [country, setCountry] = useState("");
  const [confirmed, setConfirmed] = useState(totalConfirmed);
  const [deaths, setDeaths] = useState(totalDeaths);
  const [recovered, setRecovered] = useState(totalRecovered);

  const countryHandler = (e) => {
    setCountry(e.target.value);
    let countryFilter = summary.Countries.filter((post) =>
      post.Country.includes(e.target.value)
    );

    if (countryFilter.length === 0) {
      setConfirmed(0);
    }

    if (e.target.value === "Worldwide") {
      setConfirmed(totalConfirmed);
      setDeaths(totalDeaths);
      setRecovered(totalRecovered);
    }

    console.log(countryFilter[0].TotalConfirmed, "jiji");
    setConfirmed(countryFilter[0].TotalConfirmed);
    setDeaths(countryFilter[0].TotalDeaths);
    setRecovered(countryFilter[0].TotalRecovered);
    console.log(summary.Countries);
  };

  return (
    <div className="chart">
      <div className="country-filter">
        <div className="country">
          <h2>{country === "" ? "World Wide" : country}</h2>
        </div>
        <div className="country-filter">
          <CountryFilter item={summary} onchange={countryHandler} />
        </div>
      </div>

      <div className="bar">
        {confirmed === 0 ? (
          <p className="noData">No data found</p>
        ) : (
          <Bar
            data={{
              labels: ["Total Confirmed", "Total Death", "Total Recovered"],
              datasets: [
                {
                  label: "",
                  data: [confirmed, deaths, recovered],
                  backgroundColor: ["#fd9f25", "#fa6738", "#53d5e2"],

                  borderWidth: 0.5,
                },
              ],
            }}
            height={271}
            width={400}
            options={{
              maintainAspectRatio: false,
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true,
                    },
                  },
                ],
              },
              legend: {
                labels: {
                  fontSize: 8,
                },
              },
            }}
          />
        )}
      </div>
    </div>
  );
}

export default CountryChart;
