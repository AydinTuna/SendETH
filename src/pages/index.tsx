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
  Textarea,
} from "@chakra-ui/react";
import { useAccount } from "wagmi";
import { useBalance } from "wagmi";
import { useToast } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import TransactionData from "../components/TransactionData";

function Page() {
  const toast = useToast();

  const { isConnected, address } = useAccount();
  const { data } = useBalance({ address: address });
  return (
    <>
      <Box>
        <Navbar />
      </Box>

      <Box px={4} maxW="1200px" w={{ base: "100%", md: "75" }} mx="auto">
        <Flex
          h="calc(100vh - 4rem)"
          flexDirection={{ base: "column", md: "column" }}
          justifyContent="center"
          alignItems={{ base: "center", md: "center" }}
        >
          {isConnected && <Profile />}

          <Box
            transform={{
              base: "scale(1)",
              md: "scale(1.1)",
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
                  onClick={() =>
                    toast({
                      title: "Transaction sent.",
                      description: `to: ${address}`,
                      status: "success",
                      duration: 9000,
                      isClosable: true,
                    })
                  }
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
          </Box>
          <TransactionData />
        </Flex>
      </Box>
    </>
  );
}

export default Page;
