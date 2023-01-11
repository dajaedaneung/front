import { atom } from "recoil";

export const cameraState = atom({
  key: "cameraState",
  default: {
    id: -1,
    name: "",
  },
});
