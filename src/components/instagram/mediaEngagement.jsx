import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Video", "Image", "Carousel Album"],
  datasets: [
    {
      //   label: "Media Comments",
      data: [4, 13, 25],
      backgroundColor: ["rgba(255, 99, 132, 1)", "rgb(53, 162, 235)", "gold"],

      borderWidth: 3,
    },
  ],
};

const options = {
  onResize: () => console.log("hello"),
  plugins: {
    legend: {
      position: "bottom",
      display: false,
    },
    title: {
      display: true,
      text: "Media Engagement",
    },
  },
};

const doughnutLabel = {
  id: "doughnetLabel",
  beforeDatasetDraw(chart, args, pluginOptions) {
    const { ctx, data } = chart;
    ctx.save();
    const xCoor = chart.getDatasetMeta(0).data[0].x;
    const yCoor = chart.getDatasetMeta(0).data[0].y;
    ctx.font = "bold 30px sans-serif";
    ctx.fillStyle = "blue";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("", xCoor, yCoor);
  },
};

function MediaEngagement() {
  return (
    <div className="flex flex-col p-2   w-full h-[400px]  shadow-2xl bg-white items-center justify-center">
      <Doughnut
        plugins={[doughnutLabel]}
        options={options}
        circumference={120}
        data={data}
      />
    </div>
  );
}
export default MediaEngagement;
