import { atom } from "recoil";

export const selectModalState = atom({
  key: "selectModalState",
  default: {
    isOpen: true,
  },
});
