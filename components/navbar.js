import Logo from './logo';
import NextLink from 'next/link';

import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue,
} from '@chakra-ui/react';

import { HamburgerIcon } from '@chakra-ui/icons';

const LinkItem = ({ href, path, target, children, ...props }) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')
    return (
      <Link
        as={NextLink}
        href={href}
        scroll={false}
        p={2}
        bg={active ? 'grassTeal' : undefined}
        color={active ? '#202023' : inactiveColor}
        target={target}
        {...props}
      >
        {children}
      </Link>
    )
  }

const Navbar = props => {
    const {path} = props;

    return(
        <Box 
        position="fixed"
        as="nav"
        w="100%"
        bg={useColorModeValue('$ffffff40','#20202380')}
        style={{backdropFilter: 'blur(10px)'}}
        zIndex={1}
        {...props}
        >   
        <Container 
        display="flex" 
        p={2} 
        maxW="container.md" 
        wrap="wrap" 
        align="center" 
        justify="space-between"
        >
            <Flex align="center" mr={5}>
                <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                    <Logo />
                </Heading>
            </Flex>
        </Container>
        </Box>
    )
}

export default Navbar;