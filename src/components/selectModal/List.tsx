import { editableInputTypes } from "@testing-library/user-event/dist/utils";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { cameraState } from "../../store/camera";
import { selectModalState } from "../../store/selectModal";
export interface Camera {
  id: number;
  place: string;
}
export interface CameraProps {
  cameraList: Camera[];
}
const Contain = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  max-width: 500px;
  padding: 10px;
  width: 100%;
`;
const Ok = styled.div`
  border-radius: 20px;
  border: solid 1px black;
  width: 30%;
  height: 30px;
  text-align: center;
  line-height: 30px;
  cursor: pointer;
`;
const Item = styled.div<{ isSelected: boolean }>`
  height: 30px;
  width: 100%;
  border: solid gray 1px;
  border-radius: 10px;
  padding: 10px;
  font-size: 2em;
  line-height: 30px;
  cursor: pointer;
  background-color: ${(props) => {
    return props.isSelected ? "gray" : "white";
  }};
  color: ${(props) => {
    return props.isSelected ? "white" : "black";
  }};
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
          <Item
            isSelected={selectedCamera.id == data.id}
            onClick={() => {
              changeCameraHandler(data);
            }}
          >
            {data.place}
          </Item>
        );
      })}
      {selectedCamera.id != -1 && <Ok onClick={closeModalHandler}>확인</Ok>}
    </Contain>
  );
};

export default List;
