import styled from "styled-components";
import React from "react";
import { useRecoilState } from "recoil";
import { selectModalState } from "../../store/selectModal";
import { cameraState } from "../../store/location";
const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;
const Item = styled.span`
  font-size: 1.8em;
`;
const Button = styled(Item)`
  background-color: #ff5c00;
  padding: 8px 15px;
  color: white;
  border-radius: 10px;
`;
const HeaderBlock = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 0px 100px;
  height: 60px;
  align-items: center;
  @media (max-width: 580px) {
    .Logo {
      display: none;
    }
    padding: 0px 30px;
    justify-content: right;
  }
`;
const Logo = styled.img``;
const Header = () => {
  const [camera, setCamera] = useRecoilState(cameraState);
  const [selectModal, setSelectModal] = useRecoilState(selectModalState);
  const openModalHandler = () => {
    setSelectModal({ isOpen: true });
  };
  return (
    <HeaderBlock>
      <Logo src="/images/logo.png" className="Logo"></Logo>
      <Menu>
        <Item>기록보기</Item>
        <Item>예측하기</Item>
        <Button onClick={openModalHandler}>
          {selectModal.isOpen ? "선택중" : camera.name}
        </Button>
      </Menu>
    </HeaderBlock>
  );
};

export default Header;
