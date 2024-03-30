import React from 'react';
import { Box, Flex, GridItem, SimpleGrid, Stat, StatArrow, StatHelpText, StatLabel, StatNumber } from '@chakra-ui/react';
import data from '../../utils/parameters.json';
import keyDisplay from './key-display-names';

const HomeIndex = () => {
    //Last item in the 'database' for updated values
    const lastItem = data[data.length - 1];
    const previousData = data[data.length - 2]

    const getPercentageChange = (current, previous) => {
        return ((current - previous) / previous) * 100;
    };

    return (
        <Flex justify={'center'}>
            <SimpleGrid columns={{sm: 1, md: 3}} spacing={7} width={'100%'} pl = {75}>
                {Object.keys(lastItem).map((key) => (
                    <Stat as={GridItem} key={key} border={'1px'} borderRadius={'10px'} shadow={1}>
                        <Box>
                            <StatLabel as="h1" size="md" textAlign={'left'} ml={5}>
                                {keyDisplay[key] || key}
                            </StatLabel>
                            <StatNumber textAlign={'left'} ml={5}>{lastItem[key]}</StatNumber>
                            <StatHelpText textAlign={'left'} ml={5}>
                                <StatArrow type={lastItem[key] > previousData[key] ? "increase" : "decrease"} />
                                {getPercentageChange(lastItem[key], previousData[key]).toFixed(2)}%
                            </StatHelpText>
                        </Box>
                    </Stat>
                ))}
            </SimpleGrid>
            </Flex>
    );
};
export default HomeIndex;
