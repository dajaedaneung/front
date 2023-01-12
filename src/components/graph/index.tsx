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
import { useRecoilState } from "recoil";
import { cameraState } from "../../store/camera";

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
  const [cam, _] = useRecoilState(cameraState);

  let x: string[] = [];
  let y: number[] = [];
  Dot.forEach((i, idx) => {
    x.push(i.x + unit);
    y.push(i.y);
  });

  return (
    <Contain>
      <Line
        options={options}
        data={{
          labels: x,
          datasets: [
            {
              label: "data",
              data: y,
              borderColor: stepList[step].Color,
              backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
          ],
        }}
      />
    </Contain>
  );
}
