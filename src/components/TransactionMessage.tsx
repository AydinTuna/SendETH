import { useToast } from "@chakra-ui/react";
import { Address, useTransaction } from "wagmi";

export function TransactionMessage(
  address: Address | undefined,
  isSuccess: boolean
) {
  const toast = useToast();

  if (isSuccess) {
    toast({
      title: "Transaction sent.",
      description: `to: ${address}`,
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  } else {
    toast({
      title: "Transaction failed.",
      description: `to: ${address}`,
      status: "error",
      duration: 9000,
      isClosable: true,
    });
  }
}
