import '../../App.css'
import { Button } from '@chakra-ui/react';
import mockApi from '../../utils/mockApi';
import HomeIndex from '../../components/Home/home-index';


function Home () {
  const handleCancel = () => {
    mockApi("POST", '/reset-data');
    window.location.reload();
  };

  return (
    <>
      <HomeIndex/>
    </>
  )
}
export default Home;
