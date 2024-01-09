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
      text: "Account Impressions",
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

function AccountImpressions() {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Account Impressions",
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: "rgba(255, 99, 132, 1)",
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

export default AccountImpressions;
