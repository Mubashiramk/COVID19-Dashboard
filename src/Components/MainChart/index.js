import "./mainChart.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import Moment from "moment";

export const MainChart = () => {
  const [summary, setSummary] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortData, setSortData] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://json.extendsclass.com/bin/749fc72692f2")
      .then((res) => {
        setLoading(false);
        console.log(res);
        if (res.status === 200) {
          setSummary(res.data);
          function custom_sort(a, b) {
            return new Date(a.Date).getTime() - new Date(b.Date).getTime();
          }
          let summarySort = [res.data.sort(custom_sort)];
          setSortData(summarySort);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (loading) {
    return <p>loading</p>;
  }
  {
    return (
      <div className="mainChart">
        <Line
          data={{
            labels: summary.map((post) =>
              Moment(post.Date).format("DD-MM-YYYY")
            ),
            datasets: [
              {
                label: "NewConfirmed/Date",
                data: summary.map((post) => post.NewConfirmed),
                fill: true,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)",
              },
            ],
          }}
        />
      </div>
    );
  }
};
