import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { transactionHistory } from "../../../recoil/wallet/transactionHistory";
import Paystack from "../paystack";

const TransactionHistory = () => {
  const transHistory = useRecoilValue(transactionHistory);

  const renderPaystack = transHistory.map((record, idx) => (
    <Paystack
      key={idx}
      title={record.title}
      amount={record.amount}
      date={record.date}
    />
  ));

  return (
    <Box as="section" mt={20}>
      <Text fontSize="medium" fontWeight="bold" mb={3}>
        Transaction History
      </Text>

      <Box bg="white" p={10} borderWidth={2} borderRadius="md" boxShadow="sm">
        {renderPaystack}
      </Box>
    </Box>
  );
};

export default TransactionHistory;
