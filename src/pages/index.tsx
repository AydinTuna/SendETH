import { ConnectKitButton } from "connectkit";
import {
  Box,
  Container,
  Flex,
  Heading,
  Input,
  Stack,
  VStack,
  FormControl,
  Button,
} from "@chakra-ui/react";
import { useAccount } from "wagmi";
import Navbar from "../components/Navbar";

import { Account } from "../components";

function Page() {
  const { isConnected } = useAccount();
  return (
    <>
      <Box>
        <Navbar />
      </Box>
      <Container>
        <Flex
          h="calc(100vh - 4rem)"
          justifyContent="center"
          alignItems="flex-start"
        >
          <VStack w="100%" h="75vh" justifyContent="center">
            <Box
              transform={{
                base: "scale(1)",
                md: "scale(1.1)",
                lg: "scale(1.2)",
              }}
              bg={"gray.200"}
              borderRadius="3xl"
              marginTop={"12"}
              marginBottom={"2"}
              p="12"
            >
              <form>
                <FormControl>
                  <Stack spacing={3} marginBottom="12">
                    <Input
                      type="text"
                      variant={"filled"}
                      placeholder="Recipient"
                      my={2}
                      size={"lg"}
                      required
                    />
                    <Input
                      type="number"
                      variant={"filled"}
                      placeholder="Amount"
                      my={2}
                      size={"lg"}
                      required
                    />
                  </Stack>
                </FormControl>
                <Box display={"flex"} justifyContent="center">
                  <Button
                    bg="white"
                    transition={"all ease 100ms"}
                    fontWeight="medium"
                    borderRadius="8px"
                    w="140px"
                    boxShadow="-4px 4px 0px #000000,inset 0 0 0 2px #000000;"
                    type="submit"
                    _hover={{
                      bg: "#f3ede8",
                    }}
                    _active={{
                      boxShadow: "0 0 0 0 #000000,inset 0 0 0 2px #000000;",
                    }}
                  >
                    Send
                  </Button>
                </Box>
              </form>

              {isConnected && <Account />}
            </Box>
          </VStack>
        </Flex>
      </Container>
    </>
  );
}

export default Page;