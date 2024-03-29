import React from 'react';
import { Box, Flex, GridItem, Heading, SimpleGrid, Stat, StatArrow, StatHelpText, StatLabel, StatNumber } from '@chakra-ui/react';
import data from '../../utils/parameters.json';


const HomeIndex = () => {
    // Get the last item from the data array
    const lastItem = data[data.length - 1];

    return (
        <Flex justify={'center'}>
            
            <SimpleGrid columns={{sm: 1, md: 3}} spacing={7} width={'100%'} pl = {75}>
                {Object.keys(lastItem).map((key) => (
                    <Stat as={GridItem} key={key} border={'1px'} borderRadius={'10px'} shadow={1}>
                        <Box>
                            <StatLabel as="h1" size="md" justifyContent={'left'}>
                                {key}
                            </StatLabel>
                            <StatNumber>{lastItem[key]}</StatNumber>
                            <StatHelpText>
                                <StatArrow type='increase'/>
                                20%
                            </StatHelpText>
                        </Box>
                    </Stat>
                ))}
            </SimpleGrid>
            </Flex>
    );
};

export default HomeIndex;
