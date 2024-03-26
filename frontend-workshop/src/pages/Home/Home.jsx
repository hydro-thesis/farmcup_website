import '../../App.css'
import { Button } from '@chakra-ui/react';
import mockApi from '../../utils/mockApi';
import HomeIndex from '../../components/Home/home-index';
import Header from './header';
import GardenCam from '../../components/Home/garden-cam';
import Clock from '../../assets/clock/index'

function Home () {

  return (
    <>
      <Header/>
      <Clock/>
      
      <GardenCam/>
      <HomeIndex/>
    </>
  )
}
export default Home;
