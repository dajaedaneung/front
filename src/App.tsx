import React from "react";
import { useRecoilState } from "recoil";
import Header from "./components/header/header";
import SelectModal from "./components/selectModal/selectModal";
import { selectModalState } from "./store/selectModal";

function App() {
  const [selectModal, _] = useRecoilState(selectModalState);
  return (
    <div>
      {selectModal.isOpen && <SelectModal></SelectModal>}
      <Header></Header>
    </div>
  );
}

export default App;
