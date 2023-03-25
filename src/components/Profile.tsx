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
      <Box w="100%" justifySelf="flex-end" marginTop={4}>
        <Text as="b" fontSize="xl" color="blackAlpha.800">
          Account balance: {data?.formatted} SEP
        </Text>
      </Box>
    );
  }

  return <Text>Disconnected</Text>;
}
