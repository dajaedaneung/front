import styled from "styled-components";
import React from "react";
import { useRecoilState } from "recoil";
import { selectModalState } from "../../store/selectModal";
import { cameraState } from "../../store/camera";
const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;
const Item = styled.span`
  font-size: 1.8em;
  color: #686868;
  cursor: pointer;
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
  background-color: #f5f5f5;
`;
const Logo = styled.img``;
const Header = () => {
  const [selectModal, setSelectModal] = useRecoilState(selectModalState);
  const openModalHandler = () => {
    setSelectModal({ isOpen: true });
  };
  return (
    <HeaderBlock>
      <Logo src="/images/logo.svg" className="Logo"></Logo>
      <Menu>
        <Item>예측하기</Item>
        <Item onClick={openModalHandler}>위치변경</Item>
      </Menu>
    </HeaderBlock>
  );
};

export default Header;
