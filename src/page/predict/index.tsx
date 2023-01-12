import { axisBottom } from "d3-axis";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Background from "../../components/background";
import CurState from "../../components/curState";
import axios from "axios";
import { baseUrl } from "../../config";
import { useRecoilState } from "recoil";
import { cameraState } from "../../store/camera";
import { getEffectiveConstraintOfTypeParameter } from "typescript";
const Contain = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const getStep = (code: string) => {
  if (code == "NICE") return 0;
  if (code == "NORMAL") return 1;
  if (code == "WARNING") return 2;
  if (code == "NICE") return 3;
  return 0;
};
interface Camera {
  cameraId: number;
  density: number;
  code: string;
}
const Predict = () => {
  const [camera, setCamera] = useRecoilState(cameraState);
  const [data, setData] = useState<Camera>({
    cameraId: 1,
    density: 5,
    code: "NOMAL",
  });
  useEffect(() => {
    if (camera.id != -1) {
      axios
        .get<Camera>(baseUrl + "/density/now?camera=" + camera.id)
        .then((data) => {
          alert(1);
          console.log(data.data);
          setData(data.data);
        });
    }
  }, [camera]);
  const step = getStep(data.code);
  return (
    <Contain>
      {camera.id != -1 && <CurState step={step} density={data.density} />}
      {camera.id != -1 && <Background step={step} />}
    </Contain>
  );
};

export default Predict;
