import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      display: false,
    },
    title: {
      display: true,
      text: "Media Saves",
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      title: {
        display: false,
        text: "Values in $",
      },
    },
  },
};

function MediaSaves() {
  const data = {
    labels: ["Image", "Video", "Carousel Album"],
    datasets: [
      {
        label: "Account Impressions",
        data: [12, 45, 3],
        backgroundColor: "gold",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="flex flex-col p-2 shadow-2xl bg-white">
      {/* <h1>Account Impressions</h1> */}
      <Bar options={options} data={data} />
    </div>
  );
}

export default MediaSaves;
