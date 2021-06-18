import React from "react";
import { Container, Flex, Box } from "@chakra-ui/layout";
import SideNav from "../components/SideNav";
import TopNav from "../components/TopNav";
import { navState } from "../recoil/sideNav";
import { useRecoilValue } from "recoil";

const Mainlayout = ({ children }) => {
  const isNavOpen = useRecoilValue(navState);

  return (
    <Container maxW="100%" p={0}>
      <Flex>
        <SideNav />

        <Box flex={1} ms={isNavOpen ? 250 : 65}>
          <TopNav />
          <main>{children}</main>
        </Box>
      </Flex>
    </Container>
  );
};

export default Mainlayout;
