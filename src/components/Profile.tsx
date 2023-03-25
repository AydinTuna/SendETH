import { Box, Button, Flex, Icon, Text } from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
import { useAccount, useBalance, useNetwork } from "wagmi";
import { useState } from "react";

export default function Profile() {
  const { address, connector, isConnected } = useAccount();
  const { data } = useBalance({ address: address });
  const { chain } = useNetwork();
  const [accountBalance, setAccountBalance] = useState(data?.formatted);

  const balance = useBalance({
    address: "0x8e4a6CaB4012739Daf4E047D04c47afE50C86B19",
    onSuccess(data) {
      setAccountBalance(data.formatted);
    },
  });

  if (isConnected) {
    return (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        w="100%"
        justifySelf="flex-end"
        marginTop={4}
      >
        <Text fontSize="lg" color="blackAlpha.800">
          Account balance: {accountBalance?.slice(0, 5)}{" "}
          {chain?.testnet ? "SEP" : "ETH"}
        </Text>

        <Text
          fontSize="lg"
          fontWeight="medium"
          color={chain?.testnet ? "red.400" : "green.400"}
        >
          <InfoIcon /> {chain?.testnet ? "Testnet" : "Mainnet"}
        </Text>
      </Box>
    );
  }

  return <Text>Disconnected</Text>;
}
