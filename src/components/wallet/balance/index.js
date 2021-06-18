import React from "react";
import {
  Box,
  Button,
  HStack,
  NumberInput,
  NumberInputField,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useRecoilState, useRecoilValue } from "recoil";
import { fundingAmount, isFunding } from "../../../recoil/wallet/funding";
import { gatewayFees } from "../../../recoil/wallet/funding";
import { transactionHistory } from "../../../recoil/wallet/transactionHistory";
import { walletBalance } from "../../../recoil/wallet/walletBalance/";

const Balance = () => {
  const [balance, setBalance] = useRecoilState(walletBalance);

  const [topUpAmount, setTopUpAmount] = useRecoilState(fundingAmount);

  const [isTopingUp, setIsTopingUp] = useRecoilState(isFunding);

  const [isGreaterThan5000, percentage] = useRecoilValue(gatewayFees);

  const [transHistory, setTransHistory] = useRecoilState(transactionHistory);

  const fundWallet = () => {
    let amount = parseFloat(topUpAmount);

    let depositing = amount - parseFloat(percentage);

    let initalTransHistory = [...transHistory];

    let initalBalance = balance;

    let newRecord = {
      title: "fund_wallet",
      amount: depositing.toFixed(1),
      date: new Date().toLocaleDateString(),
    };

    let newBalance = initalBalance + depositing;

    let newTransactionHistory = [{ ...newRecord }, ...initalTransHistory];

    setBalance(newBalance);
    setTransHistory(newTransactionHistory);
    setTopUpAmount(0);
    setIsTopingUp(false);
  };

  const handleInput = (e) => {
    setTopUpAmount(e.target.value);
  };

  return (
    <Box className="wallet-balance" as="section">
      <VStack alignItems="flex-start" spacing={0}>
        <Text fontWeight="bold" fontSize="sm" color="gray.500">
          Wallet balance
        </Text>
        <HStack spacing={8}>
          <Text fontSize="4xl" fontWeight="bold">
            {`NGN${balance}`}
          </Text>
          {!isTopingUp && (
            <Button
              colorScheme="blue"
              bg="primary.500"
              color="white"
              onClick={() => setIsTopingUp(true)}
            >
              Fund Wallet
            </Button>
          )}
        </HStack>

        {isTopingUp && (
          <Box as="div" w="100%" pt={5}>
            <HStack>
              <NumberInput w="40%">
                <NumberInputField
                  placeholder="5000"
                  value={0}
                  onChange={handleInput}
                />
              </NumberInput>
              <Button
                colorScheme="blue"
                bg="primary.500"
                color="white"
                isDisabled={!isGreaterThan5000}
                onClick={fundWallet}
              >
                Fund Wallet
              </Button>
            </HStack>
            <Text
              fontSize="xs"
              fontWeight="bold"
              color={isGreaterThan5000 ? "gray.500" : "red.500"}
            >
              {isGreaterThan5000
                ? `* NGN${percentage} Payment Gateway Fees included`
                : "Minimum topup amount is NGN5000"}
            </Text>
          </Box>
        )}
      </VStack>
    </Box>
  );
};

export default Balance;
