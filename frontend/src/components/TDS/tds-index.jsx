import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import TdsTable from './tds.data';

const tdsIndex = () => {
  const location = useLocation();

  useEffect(() => {
    // Function to reset the inactivity timer
    function resetInactivityTimeout() {
      clearTimeout(window.inactivityTimeout);
      window.inactivityTimeout = setTimeout(() => {
        // Send a request to the server to reset the session timeout
        fetch('http://localhost:5000/tdsData').then((response) => {
          if (response.ok) {
            console.log('Reload');
            console.clear();

            // Redirect to the pH view route after 30 seconds of inactivity
            window.location.href = '/tds';
          }
        });
      }, 30000); // 30000 = 30 seconds
    }

    // Check if the current page is the tds page before resetting the timeout
    if (location.pathname === '/tds') {
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
        <Tab>TDS Level Data</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <TdsTable />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

tdsIndex.propTypes = {};

export default tdsIndex;
