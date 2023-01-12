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
const TimeSelect = styled.div`
  width: 100%;
  height: 30%;
  font-size: 5em;
`;
const StateWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`;
const Board2 = styled(Board)`
  justify-content: space-around;
  padding: 20px 100px;
`;
const InputBox = styled.input`
  height: 40px;
`;
const PredictState = ({ step, density }: { step: number; density: number }) => {
  const [camera, setCamera] = useRecoilState(cameraState);
  const [data, setData] = useState([]);
  useEffect(() => {
    if (camera.id) {
      axios
        .get(baseUrl + "/density?criteria=HOUR&camera=" + camera.id)
        .then((data) => {
          setData(data.data);
        });
    }
  }, [camera.id]);
  return (
    <Board2>
      <TimeSelect>
        <InputBox></InputBox>년<InputBox></InputBox>월<InputBox></InputBox>일
        <InputBox></InputBox>시 쯤에 가도 괜찮을까요?
      </TimeSelect>
      <StateWrapper>
        <State step={step} density={density}></State>
      </StateWrapper>
    </Board2>
  );
};

export default PredictState;
