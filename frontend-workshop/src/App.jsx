import React from 'react';
import { Box, ChakraProvider, Flex, Grid, GridItem, Stack } from '@chakra-ui/react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import theme from './theme';
import SideNav from './components/SideNav';

const border = '0px';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Grid
        w="full"
        templateAreas={{ base: `"sidenav" "content"`, md: `"sidenav content"` }}
        gridTemplateColumns={[`1fr`, `1fr`, `200px 1fr`]}
        spacing={0}>
        <GridItem area="sidenav" bgColor={''} border={border}>
          <SideNav />
        </GridItem>
        <GridItem area="content" bgColor={'RGBA(0, 0, 0, 0.02)'} border={border} ml={7} >
          <Outlet />
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
}

export default App;
