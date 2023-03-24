import { ReactNode } from 'react';
import { ConnectKitButton } from 'connectkit'
import {
    Box,
    Flex,
    Avatar,
    Link,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
    Center,
    Heading,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
const NavLink = ({ children }: { children: ReactNode }) => (
    <Link
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        href={'#'}>
        {children}
    </Link>
);

export default function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Box bg={useColorModeValue('gray.200', 'gray.900')} px={4} py={4} boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;">
                <Flex maxW={{ base: "100%", sm: "1200px" }} mx="auto" h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <Link href='#' _hover={{
                        textDecoration: "none"
                    }}>
                        <Heading fontFamily="Pacifico" fontWeight="light">SendETH</Heading>
                    </Link>
                    <Box>
                        <ConnectKitButton />
                    </Box>
                </Flex>
            </Box>
        </>
    );
}
