import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import AmbientLightTable from './ambient-light-data';

const ambientLightIndex = () => {
  const location = useLocation();

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
