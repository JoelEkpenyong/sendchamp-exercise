import React from "react";
import { Box, Flex, Text, Divider } from "@chakra-ui/react";
import LogoWhite from "../../constants/LogoWhite";
import NavItems from "../NavItems";
import { useRecoilState } from "recoil";
import { navState } from "../../recoil/sideNav";
import "./index.css";

const SideNav = () => {
  const [isNavOpen, setIsNavOpen] = useRecoilState(navState);

  return (
    <Box
      id="sidenav"
      as="aside"
      overflow="auto"
      w={isNavOpen ? 250 : 65}
      h="100vh"
      bg="primary.800"
      pos="fixed"
      top={0}
      left={0}
    >
      <Flex
        px={5}
        py={3}
        justifyContent="space-between"
        alignItems="center"
        w="100%"
      >
        {isNavOpen && <LogoWhite />}
        <Text as="button" onClick={() => setIsNavOpen(!isNavOpen)}>
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="0"
            viewBox="0 0 24 24"
            color="#f2f2f2"
            aria-hidden="true"
            focusable="false"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </Text>
      </Flex>
      <Divider mb={5} />
      <NavItems />
    </Box>
  );
};

export default SideNav;
