import styled from "styled-components";
import { stepList } from "../../config";

const LeftRound = styled.div<{ r: number; x: number; y: number }>`
  position: absolute;
  border-radius: 10000px;
  background-color: ${(props) => props.color};
  height: ${(props) => props.r}px;
  width: ${(props) => props.r}px;
  top: ${(props) => props.x}px;
  left: ${(props) => props.y}px;
`;
const RightRound = styled.div<{ r: number; x: number; y: number }>`
  position: absolute;
  border-radius: 10000px;
  background-color: ${(props) => props.color};
  height: ${(props) => props.r}px;
  width: ${(props) => props.r}px;
  bottom: ${(props) => props.x}px;
  right: ${(props) => props.y}px;
`;
const Contain = styled.div`
  position: relative;
  justify-content: center;
  width: 100%;
  display: flex;
  background-color: #f5f5f5;
  overflow: hidden;
  min-height: calc(100vh - 60px);
`;

interface BackgroundProps {
  step: number;
  children: React.ReactNode;
}

const getColor = () => {};
const Background = ({ step, children }: BackgroundProps) => {
  const color = stepList[step].Background;
  return (
    <Contain>
      <LeftRound color={color} r={200} x={79} y={20}></LeftRound>
      <LeftRound color={color} r={200} x={500} y={-50}></LeftRound>
      <LeftRound color={color} r={150} x={30} y={600}></LeftRound>
      <LeftRound color={color} r={100} x={200} y={400}></LeftRound>
      <LeftRound color={color} r={200} x={500} y={-50}></LeftRound>
      <RightRound color={color} r={250} x={250} y={0}></RightRound>
      <RightRound color={color} r={200} x={-100} y={-100}></RightRound>
      {children}
    </Contain>
  );
};
export default Background;
