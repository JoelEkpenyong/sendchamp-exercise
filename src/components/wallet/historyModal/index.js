import {
  Box,
  Button,
  Circle,
  Divider,
  Flex,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";

const HistoryModal = ({ isOpen, onClose, payStackObj }) => {
  const formatTime = () => {
    const currentTime = new Date();
    const transactionTime = new Date(payStackObj.date);

    const hourDifference = currentTime.getHours() - transactionTime.getHours();

    return `${hourDifference} Hours Ago`;
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent px={6} py={8}>
          <ModalHeader>
            <HStack spacing={3}>
              <Circle bg="primary.100" w={50} h={50}>
                <Text color="primary.500">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                  </svg>
                </Text>
              </Circle>
              <Box textAlign="start">
                <Text textTransform="uppercase" fontSize={18}>
                  {payStackObj.title}
                </Text>
                <Text color="gray.500" fontSize="medium" fontWeight="bold">
                  {formatTime()}
                </Text>
              </Box>
            </HStack>
          </ModalHeader>
          <ModalCloseButton borderRadius="full" />
          <Divider />
          <ModalBody>
            <VStack spacing={10}>
              <Box width="100%">
                <Flex justifyContent="space-between" w="100%">
                  <VStack as="div" spacing="0.5" alignItems="flex-start">
                    <Text
                      fontSize="sm"
                      color="gray.500"
                      textTransform="capitalize"
                      fontWeight="medium"
                    >
                      amount
                    </Text>
                    <Text
                      fontWeight={600}
                      color="gray.800"
                    >{`NGN${payStackObj.amount}`}</Text>
                  </VStack>
                  <VStack as="div" spacing="0.5" alignItems="flex-end">
                    <Text
                      fontSize="sm"
                      color="gray.500"
                      textTransform="capitalize"
                      fontWeight="medium"
                    >
                      transaction reference
                    </Text>
                    <Text
                      fontWeight={600}
                      color="gray.800"
                    >{`NGN${payStackObj.transactionRefrence}`}</Text>
                  </VStack>
                </Flex>
              </Box>
              <Box width="100%">
                <Flex justifyContent="space-between" w="100%">
                  <VStack as="div" spacing="0.5" alignItems="flex-start">
                    <Text
                      fontSize="sm"
                      color="gray.500"
                      textTransform="capitalize"
                      fontWeight="medium"
                    >
                      balance before
                    </Text>
                    <Text
                      fontWeight={600}
                      color="gray.800"
                    >{`NGN${payStackObj.prevBalance}`}</Text>
                  </VStack>
                  <VStack as="div" spacing="0.5" alignItems="flex-end">
                    <Text
                      fontSize="sm"
                      color="gray.500"
                      textTransform="capitalize"
                      fontWeight="medium"
                    >
                      balance after
                    </Text>
                    <Text
                      fontWeight={600}
                      color="gray.800"
                    >{`NGN${payStackObj.newBalance}`}</Text>
                  </VStack>
                </Flex>
              </Box>
              <Box width="100%">
                <VStack as="div" spacing="0.5" alignItems="flex-start">
                  <Text
                    fontSize="sm"
                    color="gray.500"
                    textTransform="capitalize"
                    fontWeight="medium"
                  >
                    status
                  </Text>
                  <Button
                    fontSize="sm"
                    fontWeight={600}
                    color="green.500"
                    bg="green.50"
                    textTransform="uppercase"
                  >
                    {payStackObj.status}
                  </Button>
                </VStack>
              </Box>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default HistoryModal;
