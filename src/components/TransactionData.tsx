import { useAccount } from "wagmi";
import { useState, useEffect } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

export default function TransactionData() {
  const { address, isDisconnected } = useAccount();
  const SEPOLIA_WALLET_ADDRESS = address;

  const [transactions, setTransactions] = useState<any[]>([]);
  const axios = require("axios");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api-sepolia.etherscan.io/api?module=account&action=txlist&address=${SEPOLIA_WALLET_ADDRESS}&startblock=0&endblock=99999999&page=1&offset=100&sort=desc&apikey=${process.env.NEXT_PUBLIC_ETHERSCAN_API_KEY}`
        );
        setTransactions(response.data.result);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <TableContainer marginTop={12} maxH="50vh" overflowY="auto">
      <Table variant="striped" colorScheme="teal">
        <TableCaption>Transaction datas</TableCaption>
        <Thead>
          <Tr>
            <Th>date</Th>
            <Th>from</Th>
            <Th>to</Th>
            <Th isNumeric>amount</Th>
          </Tr>
        </Thead>
        <Tbody>
          <>
            {!isDisconnected &&
              transactions.map((tx) => {
                return (
                  <Tr key={tx.hash}>
                    <Td>
                      {new Date(tx.timeStamp * 1000).toLocaleString("tr-TR")}
                    </Td>
                    <Td>{tx.from}</Td>
                    <Td>{tx.to}</Td>
                    <Td>{tx.value / 1e18} ETH</Td>
                  </Tr>
                );
              })}
          </>
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>date</Th>
            <Th>from</Th>
            <Th>to</Th>
            <Th isNumeric>amount</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
}
