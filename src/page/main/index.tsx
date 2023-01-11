import styled from "styled-components";
import CurState from "../../components/curState";

const Contain = styled.div`
  width: 100%;
  height: calc(100% - 60px);
  display: flex;
  justify-content: center;
  align-items: end;
  background-color: #f5f5f5;
  @media (max-width: 500px) {
    .curstate {
      width: 95%;
      height: 95%;
    }
  }
`;

const Main = () => {
  return (
    <Contain>
      <CurState></CurState>
    </Contain>
  );
};

export default Main;
