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
      text: "현재 지역 시간별 인구 밀집도 평균",
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
  max-width: 600px;
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
  const ref = React.useRef<ChartJS>(null);
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
  }, [Dot, step, unit]);
  useEffect(() => {
    if (ref.current) {
      ref.current.data.labels = xData;
      ref.current.data.datasets[0].data = yData;
      ref.current?.update();
    }
  }, [xData, yData, ref]);
  if (yData.length > 0)
    return (
      <Contain onResize={() => ref.current?.resize()}>
        <Line
          options={options}
          data={{
            labels: xData,
            datasets: [
              {
                label: "Dataset 1",
                data: yData,
                borderColor: stepList[step].Color,
                backgroundColor: "rgba(255, 99, 132, 0.5)",
              },
            ],
          }}
          ref={ref}
        />
      </Contain>
    );
  return null;
}
