import React from "react";
import { Box, Circle, Flex, HStack, Text } from "@chakra-ui/react";

const Paystack = ({ title, amount, date }) => {
  return (
    <Box as="div" borderBottomWidth={1} cursor="pointer" py={5} my={1}>
      <Flex justifyContent="space-between" alignItems="center">
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
          <Box>
            <Text textTransform="uppercase" fontSize={18}>
              {title}
            </Text>
            <Text color="gray.500" fontSize="medium" fontWeight="bold">
              {date}
            </Text>
          </Box>
        </HStack>

        <Text fontSize={18} fontWeight="bold" color="gray.800">
          {`NGN${amount}`}
        </Text>
      </Flex>
    </Box>
  );
};

export default Paystack;
