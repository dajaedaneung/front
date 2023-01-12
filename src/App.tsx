import React from "react";
import { useRecoilState } from "recoil";
import CurState from "./components/curState";
import Header from "./components/header/header";
import SelectModal from "./components/selectModal";
import Main from "./page/main";
import { selectModalState } from "./store/selectModal";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Predict from "./page/predict";
function App() {
  const [selectModal, _] = useRecoilState(selectModalState);
  return (
    <div className="App">
      <BrowserRouter>
        {selectModal.isOpen && <SelectModal></SelectModal>}
        <Header></Header>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/predict" element={<Predict />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
