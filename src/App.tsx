import React from "react";
import { useRecoilState } from "recoil";
import CurState from "./components/curState";
import Header from "./components/header/header";
import SelectModal from "./components/selectModal";
import Main from "./page/main";
import { selectModalState } from "./store/selectModal";
import "./App.css";
function App() {
  const [selectModal, _] = useRecoilState(selectModalState);
  return (
    <div className="App">
      {selectModal.isOpen && <SelectModal></SelectModal>}
      <Header></Header>
      <Main />
    </div>
  );
}

export default App;
