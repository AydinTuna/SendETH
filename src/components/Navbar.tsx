import { ConnectKitButton } from "connectkit";
import { Box, Flex, Link, useColorModeValue, Heading } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <>
      <Box
        bg={useColorModeValue("gray.200", "gray.900")}
        px={4}
        py={4}
        boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;"
      >
        <Flex
          maxW={{ base: "100%", sm: "1200px" }}
          mx="auto"
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Link
            href="#"
            _hover={{
              textDecoration: "none",
            }}
          >
            <Heading fontFamily="Pacifico" fontWeight="light">
              SendETH
            </Heading>
          </Link>
          <Box>
            <ConnectKitButton />
          </Box>
        </Flex>
      </Box>
    </>
  );
}
