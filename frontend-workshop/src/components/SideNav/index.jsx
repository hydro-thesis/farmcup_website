import React, { Fragment } from 'react';
import { Box, Container, Flex, Stack, VStack, Divider, Text } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';
import routes from './routes';

const SideNav = () => {
  const { pathname } = useLocation();
  return (
    <Container display="flex" bg="gray.200">
      <Stack
        marginLeft={3}
        spacing={2}
        height={{ base: '10%', md: '100vh' }}
        flexDirection={{ base: 'row', md: 'column' }}
        justifyContent={{ base: `center`, md: `flex-start` }}>
        <VStack>
          <Box
            p="60px"
            color="white"
            mt="4"
            bg="teal.500"
            rounded="md"
            shadow="md"
            marginTop={5}></Box>
          <Divider height="30px" />
        </VStack>
        {routes.map(({ path, name }) => (
          <Box key={`navigation-${name}`} textAlign="left">
            <Text
              as={Link}
              fontSize="sm"
              key={path}
              to={path}
              className={
                path === '/'
                  ? pathname === path
                    ? 'menuActive'
                    : 'menu'
                  : pathname.startsWith(path)
                  ? 'menuActive'
                  : 'menu'
              }>
              {name}
            </Text>
          </Box>
        ))}
      </Stack>
    </Container>
  );
};
export default SideNav;
