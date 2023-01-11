import styled from "styled-components";
import MakeNumbers from "./MakeNumber";

const Contain = styled.div`
  display: flex;
  flex-wrap: wrap;
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
const Step = [
  { Color: "#00D1FF", write: "쾌적해요", img: "./images/face/1.png" },
  { Color: "#FFCE21", write: "괜찮아요", img: "./images/face/2.png" },
  { Color: "#FF9921", write: "주의하세요", img: "./images/face/3.png" },
  { Color: "#FF7474", write: "위험해요", img: "./images/face/4.png" },
];
interface StateProps {
  step: number;
  density: number;
}
const State = ({ step, density }: StateProps) => {
  return (
    <Contain>
      <LeftWrapper>
        <FaceImg src={Step[step].img}></FaceImg>
      </LeftWrapper>
      <RightWrapper>
        <MakeNumbers num={density} color={Step[step].Color} />
        <Des className="des" color={Step[step].Color}>
          <span className="first">{Step[step].write.substring(0, 2)}</span>
          <span>{Step[step].write.substring(2)}</span>
        </Des>
      </RightWrapper>
    </Contain>
  );
};

export default State;
