import '../../App.css'
import HomeIndex from '../../components/Home/home-index';
import HomeHeader from './header';
import Clock from '../../assets/live-clock';
import { Box, ChakraProvider } from '@chakra-ui/react';
import theme from '../../theme'
import CameraFeed from '../../components/Home/camera-feed';

function Home () {
  return (
    <ChakraProvider theme={theme}>
      <Box border={'1px'}>
        <HomeHeader/>
      </Box>
      <Box border = {'1px'}>
        <Clock/>
      </Box>
      <Box>
        <CameraFeed/>
      </Box>
      <Box border={'1px'}>
        <HomeIndex/>
      </Box>
    </ChakraProvider>
  );
};
export default Home;
