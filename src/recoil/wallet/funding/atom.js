import { atom } from "recoil";

export const fundingAmount = atom({
  key: "fundingAmount",
  default: 0,
});

export const isFunding = atom({
  key: "isFunding",
  default: false,
});
