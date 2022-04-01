import { Line } from "react-chartjs-2";
import "./countryChart.css";
function CountryChart() {
  const data = {
    labels: ["jan", "feb", "march"],
    datasets: [
      {
        labels: "hi",
        data: [1, 2, 3],
      },
    ],
  };
  return (
    <div className="chart">
      <Line data={data} />
    </div>
  );
}

export default CountryChart;
