import styled from "styled-components";
import { stepList } from "../../config";
import MakeNumbers from "./MakeNumber";

const Contain = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
`;
const FaceImg = styled.img``;
const Des = styled.div`
  font-size: 5em;
  font-weight: 700;
  .first {
    color: ${(props) => props.color};
  }
`;
const LeftWrapper = styled.div`
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  display: flex;
  margin-top: 10px;
  gap: 50px;
`;
const RightWrapper = styled.div`
  @media (max-width: 842px) {
    .des {
      text-align: center;
      font-size: 7em;
    }
  }
`;

interface StateProps {
  step: number;
  density: number;
}
const State = ({ step, density }: StateProps) => {
  return (
    <Contain>
      <LeftWrapper>
        <FaceImg src={stepList[step].img}></FaceImg>
      </LeftWrapper>
      <RightWrapper>
        <MakeNumbers num={density} color={stepList[step].Color} />
        <Des className="des" color={stepList[step].Color}>
          <span className="first">{stepList[step].write.substring(0, 2)}</span>
          <span>{stepList[step].write.substring(2)}</span>
        </Des>
      </RightWrapper>
    </Contain>
  );
};

export default State;
