import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import AmbientLightTable from './ambient-light-data';

const ambientLightIndex = () => {
  const location = useLocation();

  useEffect(() => {
    // Function to reset the inactivity timer
    function resetInactivityTimeout() {
      clearTimeout(window.inactivityTimeout);
      window.inactivityTimeout = setTimeout(() => {
        // Send a request to the server to reset the session timeout
        fetch('http://localhost:5000/ambientLightData').then((response) => {
          if (response.ok) {
            console.log('Reload');
            console.clear();

            // Redirect to the pH view route after 30 seconds of inactivity
            window.location.href = '/ambient_light';
          }
        });
      }, 30000); // 30000 = 30 seconds
    }

    // Check if the current page is the pHLevel page before resetting the timeout
    if (location.pathname === '/ambient_light') {
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
        <Tab>Ambient Light Data</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <AmbientLightTable />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

ambientLightIndex.propTypes = {};

export default ambientLightIndex;
