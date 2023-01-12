import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { number } from "yargs";
import { cameraState } from "../../store/camera";
import { Board } from "../common/style";
import State from "../state";
import MakeNumbers from "../state/MakeNumber";
import Graph from "../graph";
import { axisBottom } from "d3";
import axios from "axios";
import { baseUrl } from "../../config";

const CurState = ({ step, density }: { step: number; density: number }) => {
  const [camera, setCamera] = useRecoilState(cameraState);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(baseUrl + "/density?criteria=HOUR&camera=" + camera.id)
      .then((data) => {
        setData(data.data);
      });
  }, []);
  return (
    <Board>
      <State step={step} density={density}></State>
      <Graph unit="시" step={step} Dot={data} />
    </Board>
  );
};

export default CurState;
