import React from "react";
import { Box } from "@chakra-ui/react";
import Balance from "../../components/wallet/balance";
import TransactionHistory from "../../components/wallet/transactionHistory";
import Mainlayout from "../../layout/Mainlayout";

const Wallet = () => {
  return (
    <Mainlayout>
      <Box as="div" py={10} px={8}>
        <Balance />
        <TransactionHistory />
      </Box>
    </Mainlayout>
  );
};

export default Wallet;
