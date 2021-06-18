import { atom } from "recoil";

export const transactionHistory = atom({
  key: "transactionHistory",
  default: [
    {
      title: "test_credit",
      date: "01/16/2021",
      amount: 70500,
      prevBalance: 70500,
      transactionRefrence: "MNFY|65|20210618032033|001095",
      newBalance: 70500,
      status: "success",
    },
  ],
});
