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
      text: "Video Views",
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

function Tiktok() {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Video Views",
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  const Quantity = ({ title, quantity }) => (
    <div className="w-full h-full aspect-[5/3] rounded-xl bg-gray-200 flex flex-col p-4 gap-4">
      <h1 className="font-[500]">{title}</h1>
      <h1 className="font-bold">{quantity}</h1>
    </div>
  );

  return (
    <div className="flex flex-col w-full  p-10  bg-gray-100">
      <div className="p-10 flex items-center justify-center w-full">
        <h1 className="text-2xl font-semibold text-black">
          Tik<span className="text-[#e81c4f]">tok</span>{" "}
          <span className="text-black">Anlytics</span>
        </h1>
      </div>

      <div className="grid grid-cols-5 gap-4 ">
        <Quantity title={"Video Views"} quantity={14} />
        <Quantity title={"Profile Views"} quantity={3} />
        <Quantity title={"Likes"} quantity={32} />
        <Quantity title={"Comments"} quantity={5} />
        <Quantity title={"Shares"} quantity={2} />
      </div>

      <div className="self-center mt-7 w-[70%]">
        <Bar options={options} data={data} />
      </div>

      <div></div>
    </div>
  );
}

export default Tiktok;
