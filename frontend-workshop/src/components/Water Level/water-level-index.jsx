import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import WaterLevelTable from './water-level-data';

const waterLevelIndex = () => {
  const location = useLocation();

  useEffect(() => {
    // Function to reset the inactivity timer
    function resetInactivityTimeout() {
      clearTimeout(window.inactivityTimeout);
      window.inactivityTimeout = setTimeout(() => {
        // Send a request to the server to reset the session timeout
        fetch('http://localhost:5000/waterLevelData').then((response) => {
          if (response.ok) {
            console.log('Reload');
            console.clear();

            // Redirect to the pH view route after 30 seconds of inactivity
            window.location.href = '/water_level';
          }
        });
      }, 30000); // 30000 = 30 seconds
    }

    // Check if the current page is the pHLevel page before resetting the timeout
    if (location.pathname === '/water_level') {
      resetInactivityTimeout();
    }

    // Clean up function to clear the timeout when component unmounts or location changes
    return () => {
      clearTimeout(window.inactivityTimeout);
    };
  }, [location.pathname]);
  return (
    <Tabs isFitted variant="soft-rounded" colorScheme="green">
      <TabList>
        <Tab>Water Level Data</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <WaterLevelTable />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

waterLevelIndex.propTypes = {};

export default waterLevelIndex;
