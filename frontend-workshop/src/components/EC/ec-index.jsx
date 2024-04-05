import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import ECTable from './ec-data';

const ecIndex = () => {
  const location = useLocation();

  useEffect(() => {
    // Function to reset the inactivity timer
    function resetInactivityTimeout() {
      clearTimeout(window.inactivityTimeout);
      window.inactivityTimeout = setTimeout(() => {
        // Send a request to the server to reset the session timeout
        fetch('http://localhost:5000/ecData').then((response) => {
          if (response.ok) {
            console.log('Reload');
            console.clear();

            // Redirect to the pH view route after 30 seconds of inactivity
            window.location.href = '/ec';
          }
        });
      }, 30000); // 30000 = 30 seconds
    }

    // Check if the current page is the pHLevel page before resetting the timeout
    if (location.pathname === '/ec') {
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
        <Tab>EC Level Data</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <ECTable />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

ecIndex.propTypes = {};

export default ecIndex;
