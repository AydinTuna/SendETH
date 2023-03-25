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
import SendTransaction from "../components/SendTransaction";

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
            <SendTransaction />
          </Box>
          <TransactionData />
        </Flex>
      </Box>
    </>
  );
}

export default Page;
