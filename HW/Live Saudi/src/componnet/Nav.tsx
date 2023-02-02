import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';

const Links = ['Plan Your Trip', 'Discover'];

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

export default function withAction() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('#4FD1C5', '#1D4044')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton  bg={'#00A3C4'}
            size={'md'}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box fontFamily={' Alegreya Sans ,Aboreto'} fontSize={'2rem'}><a href=''>Live Saudi</a> </Box>
            <HStack 
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              
                <NavLink><a href="http://" target="_blank" rel="noopener noreferrer">Plan Your Trip</a></NavLink>
                <NavLink><a href="http://" target="_blank" rel="noopener noreferrer">Discover</a></NavLink>
              
            </HStack>
          </HStack>
          <Flex alignItems={'center'} >
            <Menu >
              <MenuButton
              as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                </MenuButton>
              <MenuList>
                <MenuItem><a>Link 1</a></MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }} >
            <Stack as={'nav'} spacing={4} >
              
            <NavLink><a href="http://" target="_blank" rel="noopener noreferrer">Plan Your Trip</a></NavLink>
                <NavLink><a href="http://" target="_blank" rel="noopener noreferrer">Discover</a></NavLink>
             
            </Stack>
          </Box>
        ) : null}
      </Box>

    </>
  );
}