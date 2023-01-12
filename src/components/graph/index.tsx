import React, { useEffect, useState } from "react";
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
import { Line } from "react-chartjs-2";
import styled from "styled-components";
import { stepList } from "../../config";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
  scales: {
    x: {
      border: {
        display: false,
      },
      grid: {
        display: false,
      },
    },
    y: {
      border: {
        display: false,
      },
      grid: {
        display: false,
      },
    },
  },
};
const Contain = styled.div`
  margin-top: 30px;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
`;
interface Dot {
  x: string;
  y: number;
}
interface GraphProps {
  step: number;
  Dot: Dot[];
  unit: string;
}
export default function Graph({ step, Dot, unit }: GraphProps) {
  const [xData, setXData] = useState<string[]>([]);
  const [yData, setYData] = useState<number[]>([]);
  console.log("dot : ", Dot);
  useEffect(() => {
    let x: string[] = [];
    let y: number[] = [];
    Dot.forEach((i, idx) => {
      x.push(i.x + unit);
      y.push(i.y);
    });
    setXData(x);
    setYData(y);
  }, [Dot]);
  const data = {
    labels: xData,
    datasets: [
      {
        label: "Dataset 1",
        data: yData,
        borderColor: stepList[step].Color,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  return (
    <Contain>
      <Line options={options} data={data} />
    </Contain>
  );
}
