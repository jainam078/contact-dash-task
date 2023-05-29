import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Loader from "../../Components/Loading/Loader";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface IChartData {
  labels: string[];
  datasets: {
    label: string;
    data: boolean | string[];
    borderColor: string;
    backgroundColor: string;
  }[];
}

const LineGraph: React.FC = () => {
  
  const [chartData, setChartData] = useState<IChartData>();

  const { isLoading, error, data } = useQuery({
    queryKey: ["covid"],
    queryFn: () =>
      fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=all").then(
        (response) => response.json()
      ),
    keepPreviousData: true,
    onError: (err) => {
      console.log("Unable to fetch Price History data at the moment");
    },
  });

  useEffect(() => {
    if (data) {
      setChartData({
        labels: Object.keys(data.cases || []),
        datasets: [
          {
            label: "Cases",
            data: Object.values(data.cases || []),
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
          },
          {
            label: "Deaths",
            data: !!data?.deaths && Object.values(data?.deaths),
            borderColor: "rgb(55, 199, 92)",
            backgroundColor: "rgba(255, 199, 92, 0.5)",
          },
          {
            label: "Recovered",
            data: !!data?.recovered && Object.values(data?.recovered),
            borderColor: "rgb(155, 89, 102)",
            backgroundColor: "rgba(155, 89, 102, 0.5)",
          },
        ],
      });
    }
  }, [data]);

  if (isLoading) {
    return <Loader spinner={isLoading}/>;
  }

  if (error) {
    return <div>Error fetching chart data</div>;
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  };

  return (
    <div className="w-full">
      {chartData && (
        <Line 
          options={options} 
          data={chartData}
        />
      )}
    </div>
  );
};

export default LineGraph;
