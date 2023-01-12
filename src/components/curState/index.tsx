import { useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { number } from "yargs";
import { cameraState } from "../../store/camera";
import { Board } from "../common/style";
import State from "../state";
import MakeNumbers from "../state/MakeNumber";

const CurState = () => {
  return (
    <Board>
      <State step={0} density={1}></State>
    </Board>
  );
};

export default CurState;
