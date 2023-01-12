import { axisBottom } from "d3-axis";
import { useState } from "react";
import styled from "styled-components";
import Background from "../../components/background";
import CurState from "../../components/curState";
import axios from "axios";
const Contain = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const getStep = (code: string) => {
  if (code) return 1;
  return 1;
};
const Main = () => {
  const [data, setData] = useState({
    cameraId: 1,
    density: 5,
    code: "NICE",
  });
  const step = getStep(data.code);
  return (
    <Contain>
      <CurState step={step} density={data.density}></CurState>
      <Background step={step} />
    </Contain>
  );
};

export default Main;
