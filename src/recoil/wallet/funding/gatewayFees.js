import { selector } from "recoil";
import { fundingAmount } from "./atom";

export const gatewayFees = selector({
  key: "gatewayFees",
  get: ({ get }) => {
    let amount = get(fundingAmount);

    let percentage = 0.015 * amount;

    let isGreaterThan5000 = amount >= 5000;

    return [isGreaterThan5000, percentage];
  },
});
