import { atom } from "recoil";

export const transactionHistory = atom({
  key: "transactionHistory",
  default: [
    {
      title: "test_credit",
      date: "16/01/2021",
      amount: "70500",
    },
  ],
});
