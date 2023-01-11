import { useEffect, useState } from "react";
import styled from "styled-components";

const Num = styled.span`
  font-size: 15em;
  font-style: normal;
  font-weight: 700;
  color: ${(props) => props.color || "gray"};
`;
const Contain = styled.div`
  .percent {
    font-size: 7.5em;
    color: #e2e2e2;
    font-weight: 700;
  }
`;
interface MakeNumbersProps {
  num: number;
  color: string;
}
const MakeNumbers = ({ num, color }: MakeNumbersProps) => {
  const [colorState, setColorState] = useState([true, true, true]);
  useEffect(() => {
    setColorState([true, true, true]);
    for (let i = 0; i < 3 - num.toString().length; i++) {
      setColorState((prev) => {
        let temp = prev;
        temp[i] = false;
        return temp;
      });
    }
  }, [num]);
  return (
    <Contain>
      {colorState.map((_, idx) => {
        return colorState[idx] ? (
          <Num color={color}>
            {num.toString()[idx - (3 - num.toString().length)]}
          </Num>
        ) : (
          <Num>0</Num>
        );
      })}
      <span className="percent">%</span>
    </Contain>
  );
};

export default MakeNumbers;
