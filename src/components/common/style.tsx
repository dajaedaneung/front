import styled from "styled-components";

export const Board = styled.div`
  margin-top: 70px;
  width: 75%;
  border-radius: 30px 30px 0px 0px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 70px;
  z-index: 1;
  @media (max-width: 500px) {
    width: 90%;
  }
`;
