import React from "react";
import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { navLists } from "../../constants/navLists";
import { useRecoilValue } from "recoil";
import { navState } from "../../recoil/sideNav";

const NavItems = () => {
  const isNavOpen = useRecoilValue(navState);

  const renderNavSection = () => {
    return navLists.map((navSection, idx) => {
      const { title, navItems } = navSection;

      const renderNavItems = navItems.map((navObj, idx) => (
        <HStack as="li" py={3} key={idx} color={navObj.active && "primary.500"}>
          <Text fontSize="xl" as="span" textTransform="capitalize">
            {navObj.icon}
          </Text>
          {isNavOpen && (
            <Text fontSize={14} textTransform="capitalize">
              {navObj.label}
            </Text>
          )}
        </HStack>
      ));

      return (
        <Box key={idx} as="div" w="100%" p={5} color="white">
          {isNavOpen && (
            <Text textTransform="uppercase" fontSize="xs" fontWeight={900}>
              {title}
            </Text>
          )}
          <Box as="ul">{renderNavItems}</Box>
        </Box>
      );
    });
  };

  return <VStack as="div">{renderNavSection()}</VStack>;
};

export default NavItems;
