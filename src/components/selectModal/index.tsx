import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { baseUrl } from "../../config";
import { cameraState } from "../../store/camera";
import List, { Camera } from "./List";

const Contain = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0px;
  top: 0px;
  background: rgba(255, 255, 255, 0.5);
  width: 100%;
  height: 100%;
  z-index: 3;
`;
const ModalContain = styled.div`
  width: 50%;
  min-width: 300px;
  height: 500px;
  background-color: white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Now = styled.div`
  font-size: 2em;
  border: 1px solid gray;
  height: 40px;
  border-radius: 10px;
  padding: 10px;
  line-height: 40px;
  text-align: center;
  font-size: 2.5em;
  width: 100%;
  max-width: 500px;
`;
const SelectModal = () => {
  const [camera, setCamera] = useRecoilState(cameraState);
  const [cameraList, setCameraList] = useState<Camera[]>([]);
  useEffect(() => {
    axios.get(baseUrl + "/camera/all").then((data) => {
      setCameraList(data.data.cameraList);
    });
  }, []);
  return (
    <Contain>
      <ModalContain>
        <Now>
          {camera.id == -1 ? "확인할 위치를 골라주세요" : `${camera.place}`}
        </Now>
        <List cameraList={cameraList} />
      </ModalContain>
    </Contain>
  );
};

export default SelectModal;
