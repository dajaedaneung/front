import { useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { number } from "yargs";
import { cameraState } from "../../store/camera";
import State from "../state";
import MakeNumbers from "../state/MakeNumber";

const Contain = styled.div`
  width: 75%;
  height: 80%;
  border-radius: 10px;
  background-color: white;
`;
const CurState = () => {
  return (
    <Contain>
      <State step={1} density={30}></State>
    </Contain>
  );
};

export default CurState;
