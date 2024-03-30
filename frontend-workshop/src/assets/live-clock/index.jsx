import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Divider, Flex, GridItem, Heading, SimpleGrid, Spacer, Stack, Text } from '@chakra-ui/react';

const Clock = () => {
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');

    function formatTime(val) {
        if (val < 10) {
            return '0' + val;
        } else {
            return '' + val;
        }
    }

    function formatDate(d) {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const dayOfWeek = days[d.getDay()];
        const year = d.getFullYear();
        const month = formatTime(d.getMonth() + 1); // Months are zero-indexed
        const day = formatTime(d.getDate());
        return `${dayOfWeek}, ${year}-${month}-${day}`;
    }

    function tick() {
        const d = new Date();
        let hours = d.getHours();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // Handle midnight (0 hours)
        const formattedTime = formatTime(hours) + ':' + formatTime(d.getMinutes()) + ':' + formatTime(d.getSeconds());
        setTime(formattedTime + ' ' + ampm);
        setDate(formatDate(d));
    }

    useEffect(() => {
        const timerID = setInterval(tick, 1000);

        return function cleanup() {
            clearInterval(timerID);
        };
    }, []);

    return (
        <Flex justify={'center'}>
            <SimpleGrid columns={{base:1, md: 2}} w={'100%'}>
                <GridItem bgColor={''} textAlign={'left'} ml={5}>
                    <Text size={'md'}> {date} </Text>
                </GridItem>
                <GridItem bgColor={''} textAlign={'right'} mr={5}>
                    <Heading size={'md'}> {time} </Heading>
                    
                </GridItem>
            </SimpleGrid>
        </Flex>
    );
};

export default Clock;
