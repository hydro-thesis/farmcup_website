import '../../App.css';
import React, { useEffect, useState } from 'react';
import HomeIndex from '../../components/Home/home-index';
import HomeHeader from './header';
import Clock from '../../assets/live-clock';
import { Box, ChakraProvider } from '@chakra-ui/react';
import theme from '../../theme';
import TopGrid from './../../components/Home/top-grid';

function Home() {
  return (
    <ChakraProvider theme={theme}>
      <Box border={''}>
        <HomeHeader />
      </Box>
      <Box border={''}>
        <Clock />
      </Box>
      <Box>{/* <CameraFeed/> */}</Box>
      <Box>
        <TopGrid/>
      </Box>
      <Box border={''}>
        <HomeIndex />
      </Box>
    </ChakraProvider>
  );
}
export default Home;
