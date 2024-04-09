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
        const monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const dayOfWeek = days[d.getDay()];
        const year = d.getFullYear();
        const month = monthName[d.getMonth()]; // Months are zero-indexed
        const day = formatTime(d.getDate());
        return `${dayOfWeek}, ${month} ${day}, ${year}`;
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
            <SimpleGrid columns={{base:1, md: 2}} w={'100%'} mb={8}>
                <GridItem bgColor={''} textAlign={'left'} pl={16}>
                    <Text size={'md'}> {date} </Text>
                </GridItem>
                <GridItem bgColor={''} textAlign={'right'} pr={16}>
                    <Text size={'md'}> {time} </Text>
                </GridItem>
            </SimpleGrid>
        </Flex>
    );
};

export default Clock;
