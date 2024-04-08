import React from 'react';
import { Box, ChakraProvider, Flex, Grid, GridItem, Stack } from '@chakra-ui/react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import theme from './theme';
import SideNav from './components/SideNav';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Grid
        w="full"
        templateAreas={{ base: `"sidenav" "content"`, md: `"sidenav content"` }}
        gridTemplateColumns={[`1fr`, `1fr`, `200px 1fr`]}>
        <GridItem area="sidenav" bgColor={''}>
          <SideNav />
        </GridItem>
        <GridItem area="content" bgColor={''}>
          <Outlet />
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
}

export default App;
