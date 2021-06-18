import React from "react";
import { Box, HStack, Button, Text } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { togglerState } from "../../recoil/toggle/atom";
import Toggle from "../toggle";
import ProfileDropdown from "./ProfileDropdown";

const TopNav = () => {
  const isToggleOn = useRecoilValue(togglerState);

  return (
    <Box
      as="nav"
      bg="white"
      w="100%"
      p={3}
      px={6}
      display="flex"
      justifyContent="flex-end"
    >
      <HStack spacing={5}>
        <Button bg="gray.100">
          <HStack>
            <Text>
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                ></path>
              </svg>
            </Text>
            <Text fontWeight="bold">Take tour</Text>
          </HStack>
        </Button>
        <Box>
          <HStack alignItems="flex-start" display="flex">
            <Text fontWeight="medium" textTransform="capitalize">
              {isToggleOn ? "live mode" : "test mode"}
            </Text>
            <Box>
              <Toggle />
            </Box>
          </HStack>
        </Box>
        <ProfileDropdown />
      </HStack>
    </Box>
  );
};

export default TopNav;
