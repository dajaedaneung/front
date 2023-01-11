import { useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { cameraState } from "../../store/camera";
import { selectModalState } from "../../store/selectModal";
export interface Camera {
  id: number;
  name: string;
}
export interface CameraProps {
  cameraList: Camera[];
}
const Contain = styled.div`
  display: flex;
  flex-direction: column;
`;
const List = ({ cameraList }: CameraProps) => {
  const [selectedCamera, setSelectedCamera] = useRecoilState(cameraState);
  const [selectModal, setSelectModal] = useRecoilState(selectModalState);
  const changeCameraHandler = (newCamera: Camera) => {
    setSelectedCamera(newCamera);
  };
  const closeModalHandler = () => {
    setSelectModal({ isOpen: false });
  };
  return (
    <Contain>
      {cameraList.map((data) => {
        return (
          <div
            onClick={() => {
              changeCameraHandler(data);
            }}
          >
            {data.name}
          </div>
        );
      })}
      {selectedCamera.id != -1 && <div onClick={closeModalHandler}>확인</div>}
    </Contain>
  );
};

export default List;
