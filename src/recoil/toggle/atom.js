import { atom } from "recoil";

const togglerState = atom({
  key: "togglerState",
  default: false,
});

export { togglerState };
