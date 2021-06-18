import React from "react";
import { Box, Text, useDisclosure } from "@chakra-ui/react";
import { useRecoilState, useRecoilValue } from "recoil";
import { transactionHistory } from "../../../recoil/wallet/transactionHistory";
import Paystack from "../paystack";
import { modalState } from "../../../recoil/wallet/historyModal";
import HistoryModal from "../historyModal";

const TransactionHistory = () => {
  const transHistory = useRecoilValue(transactionHistory);

  const [modalContent, setModalContent] = useRecoilState(modalState);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = (record) => {
    setModalContent(record);
    onOpen();
  };

  const renderPaystack = transHistory.map((record, idx) => (
    <Paystack
      key={idx}
      title={record.title}
      amount={record.amount}
      date={record.date}
      onClick={() => {
        handleClick(record);
      }}
    />
  ));

  return (
    <>
      <Box as="section" mt={20}>
        <Text fontSize="medium" fontWeight="bold" mb={3}>
          Transaction History
        </Text>

        <Box bg="white" p={10} borderWidth={2} borderRadius="md" boxShadow="sm">
          {renderPaystack}
        </Box>
      </Box>

      <HistoryModal
        isOpen={isOpen}
        onClose={onClose}
        payStackObj={modalContent}
      />
    </>
  );
};

export default TransactionHistory;
