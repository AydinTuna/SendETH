import { Box, Button, Text } from "@chakra-ui/react";
import {
  useAccount,
  useBalance,
  useConnect,
  useDisconnect,
  useEnsAvatar,
  useEnsName,
} from "wagmi";

export default function Profile() {
  const { address, connector, isConnected } = useAccount();
  const { data } = useBalance({ address: address });

  if (isConnected) {
    return (
      <Box w="100%" textAlign="end" marginTop={4}>
        <Text>Account balance: {data?.formatted}</Text>
      </Box>
    );
  }
}
