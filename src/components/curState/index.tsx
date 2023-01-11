import styled from "styled-components";
import { number } from "yargs";
import MakeNumbers from "./number";

const Contain = styled.div`
  width: 70%;
  height: 80%;
  border-radius: 10px;
  background-color: white;
`;
const TopWrapper = styled.div``;
const FaceImg = styled.img``;
const sample = {
  num: 1,
  state: "warning",
};
const CurState = () => {
  return (
    <Contain>
      <TopWrapper>
        {" "}
        <MakeNumbers {...sample}></MakeNumbers>
      </TopWrapper>
    </Contain>
  );
};

export default CurState;
