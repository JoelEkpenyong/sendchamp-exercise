import React from "react";
import {
  Box,
  Divider,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  VStack,
} from "@chakra-ui/react";
import UserAvatar from "../../constants/UserAvatar";

const ProfileDropdown = () => {
  return (
    <Menu>
      <MenuButton as="button" bg="white">
        <UserAvatar fontSize="3xl" />
      </MenuButton>
      <MenuList p={3}>
        <Box>
          <VStack spacing={5}>
            <UserAvatar fontSize="6xl" />

            <VStack spacing=".1px">
              <Text fontWeight="bold">Joel Ekpenyong</Text>
              <Text fontSize="sm" color="gray.500">
                joelekpenyong@gmail.com
              </Text>
            </VStack>
          </VStack>
        </Box>
        <Divider my={4} />
        <MenuItem bg="white">Edit Profile</MenuItem>
        <MenuItem>Documentation</MenuItem>
        <MenuItem>Developer Community</MenuItem>
        <MenuItem>Logout</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ProfileDropdown;
