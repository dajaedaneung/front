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
  font-size: 4.9em;
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
const Result = styled.div`
  font-size: 4em;
`;
const PredictState = ({ step, density }: { step: number; density: number }) => {
  const [camera, setCamera] = useRecoilState(cameraState);
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [hour, setHour] = useState("");
  const [p, setP] = useState(-1);
  useEffect(() => {
    const url =
      "localhost:5000/model" +
      camera.id +
      "/" +
      year +
      "-" +
      month +
      "-" +
      day +
      " " +
      hour +
      ":00:00";
    axios.get(url).then((data) => {
      setP(data.data[0][0]);
    });
  }, [year, month, day, hour]);
  return (
    <Board2>
      <TimeSelect>
        <InputBox
          onChange={(e) => {
            setYear(e.target.value);
          }}
        />
        년
        <InputBox
          onChange={(e) => {
            setMonth(e.target.value);
          }}
        />
        월
        <InputBox
          onChange={(e) => {
            setDay(e.target.value);
          }}
        />
        일
        <InputBox
          onChange={(e) => {
            setHour(e.target.value);
          }}
        />
        시 쯤에 가도 괜찮을까요?
      </TimeSelect>
      <StateWrapper>
        <Result>예측되는 사람수는 {p == -1 ? "?" : p}명입니다!!</Result>
      </StateWrapper>
    </Board2>
  );
};

export default PredictState;
