import * as React from "react";
import { useToast } from "@chakra-ui/react";
import { Address, useAccount } from "wagmi";
import { useDebounce } from "use-debounce";
import {
  usePrepareSendTransaction,
  useSendTransaction,
  useWaitForTransaction,
  useTransaction,
} from "wagmi";
import {
  Box,
  Input,
  Stack,
  FormControl,
  Button,
  FormHelperText,
  Link,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { utils } from "ethers";

function SendTransaction() {
  const toast = useToast();
  const { isConnected, address } = useAccount();
  const [to, setTo] = React.useState("");
  const [debouncedTo] = useDebounce(to, 500);
  const [amount, setAmount] = React.useState("");
  const [debouncedAmount] = useDebounce(amount, 500);
  const { config } = usePrepareSendTransaction({
    request: {
      to: debouncedTo,
      value: debouncedAmount ? utils.parseEther(debouncedAmount) : undefined,
    },
  });

  const { data, sendTransaction } = useSendTransaction(config);
  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  if (data?.hash && !isLoading && isSuccess) {
    toast({
      title: "Transaction sent.",
      description: `to: ${address}`,
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  } else if (!data?.hash && isLoading) {
    toast({
      title: "Transaction failed.",
      description: `to: ${address}`,
      status: "error",
      duration: 9000,
      isClosable: true,
    });
  }
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        sendTransaction?.();
      }}
    >
      {/* mobile responsive */}
      <FormControl
        maxW={{ base: "500px", lg: "none" }}
        display={{ base: "block", lg: "none" }}
        mx="auto"
      >
        <Stack spacing={3} marginBottom="12">
          <Input
            onChange={(e) => setTo(e.target.value)}
            type="text"
            variant={"filled"}
            placeholder="Recipient"
            my={2}
            size={"md"}
            value={to}
            required
          />
          <Input
            onChange={(e) => setAmount(e.target.value)}
            type="number"
            variant={"filled"}
            placeholder="Amount"
            my={2}
            size={"md"}
            value={amount}
            required
          />
        </Stack>

        <Box display={"flex"} justifyContent="center">
          <Button
            bg="white"
            transition={"all ease 100ms"}
            fontWeight="medium"
            borderRadius="8px"
            w="100%"
            boxShadow="-4px 4px 0px #000000,inset 0 0 0 2px #000000;"
            type="submit"
            _hover={{
              bg: "#f3ede8",
            }}
            _active={{
              boxShadow: "0 0 0 0 #000000,inset 0 0 0 2px #000000;",
            }}
            _disabled={{
              opacity: "0.3",
              boxShadow: "-4px 4px 0px #000000,inset 0 0 0 2px #000000;",
              cursor: "not-allowed",
            }}
            isDisabled={isLoading || !sendTransaction || !to || !amount}
            isLoading={isLoading && isConnected}
            loadingText="Sending..."
            spinnerPlacement="end"
          >
            Send
          </Button>
        </Box>
        {isSuccess && (
          <FormHelperText textAlign="end">
            <Link
              href={`https://sepolia.etherscan.io/tx/${data?.hash}`}
              isExternal
            >
              Check Etherscan <ExternalLinkIcon mx="2px" />
            </Link>
          </FormHelperText>
        )}
      </FormControl>

      {/* tablet - desktop responsive */}
      <FormControl
        maxW={{ base: "500px", lg: "none" }}
        display={{ base: "none", lg: "block" }}
        mx="auto"
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          mx="auto"
        >
          <Input
            onChange={(e) => setTo(e.target.value)}
            type="text"
            variant={"filled"}
            placeholder="Recipient"
            my={2}
            size={"md"}
            value={to}
            w="100%"
            _hover={{
              background: "whiteAlpha.400",
            }}
            required
          />
          <Input
            onChange={(e) => setAmount(e.target.value)}
            type="number"
            variant={"filled"}
            placeholder="Amount"
            my={2}
            mx={4}
            size={"md"}
            value={amount}
            w="20%"
            _hover={{
              background: "whiteAlpha.400",
            }}
            required
          />

          <Box w="25%" display={"flex"} justifyContent="center">
            <Button
              bg="white"
              transition={"all ease 100ms"}
              fontWeight="medium"
              borderRadius="8px"
              w="100%"
              boxShadow="-4px 4px 0px #000000,inset 0 0 0 2px #000000;"
              type="submit"
              _hover={{
                bg: "#f3ede8",
              }}
              _active={{
                boxShadow: "0 0 0 0 #000000,inset 0 0 0 2px #000000;",
              }}
              _disabled={{
                opacity: "0.3",
                boxShadow: "-4px 4px 0px #000000,inset 0 0 0 2px #000000;",
                cursor: "not-allowed",
              }}
              isDisabled={isLoading || !sendTransaction || !to || !amount}
              isLoading={isLoading && isConnected}
              loadingText="Sending..."
              spinnerPlacement="end"
            >
              Send
            </Button>
          </Box>
        </Box>

        {isSuccess && (
          <FormHelperText textAlign="end">
            <Link
              href={`https://sepolia.etherscan.io/tx/${data?.hash}`}
              isExternal
            >
              Check Etherscan <ExternalLinkIcon mx="2px" />
            </Link>
          </FormHelperText>
        )}
      </FormControl>
    </form>
  );
}

export default SendTransaction;
