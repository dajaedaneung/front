import { useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { number } from "yargs";
import { cameraState } from "../../store/camera";
import MakeNumbers from "./number";

const Contain = styled.div`
  width: 75%;
  height: 80%;
  border-radius: 10px;
  background-color: white;
`;
const TopWrapper = styled.div`
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  display: flex;
  margin-top: 10px;
  gap: 50px;
  }
`;
const FaceImg = styled.img``;
const Des = styled.div`
  font-size: 5em;
  font-weight: 700;
  .first {
    color: ${(props) => props.color};
  }
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
const CurState = () => {
  const [camera, setCamera] = useRecoilState(cameraState);
  const [curStep, setStep] = useState(1);
  const [curDensity, setCurDensity] = useState(25);
  return (
    <Contain className="curstate">
      <TopWrapper>
        <FaceImg src={Step[curStep].img}></FaceImg>
        <RightWrapper>
          <MakeNumbers
            num={curDensity}
            color={Step[curStep].Color}
          ></MakeNumbers>
          <Des className="des" color={Step[curStep].Color}>
            <span className="first">{Step[curStep].write.substring(0, 2)}</span>
            <span>{Step[curStep].write.substring(2)}</span>
          </Des>
        </RightWrapper>
      </TopWrapper>
    </Contain>
  );
};

export default CurState;
