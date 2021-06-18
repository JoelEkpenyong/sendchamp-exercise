import { atom } from "recoil";

const walletBalance = atom({
  key: "walletBalance",
  default: 70500,
});

export { walletBalance };
