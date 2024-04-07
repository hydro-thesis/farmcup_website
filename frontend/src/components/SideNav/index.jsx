import React, { Fragment } from 'react';
import { Box, Container, Flex, Stack } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';
import routes from './routes';

const SideNav = () => {
    const { pathname } = useLocation();
    return (
        <Container border = {''} display='flex' mb={5}>
            <Stack border = {''} 
            height = {{base: '10%', md: '100vh'}} 
            flexDirection={{base: 'row', md: 'column'}} 
            justifyContent={{base: `center`, md: `flex-start`}}>
                {routes.map(({ path, name }) => (
                    <Box key={`navigation-${name}`}>
                        <Link key={path} to={path}
                            className={path === '/' ? (pathname === path ? 'menuActive' : 'menu') : 
                            (pathname.startsWith(path) ? 'menuActive' : 'menu')}>
                            {name}
                        </Link>
                    </Box>
                ))}
            </Stack>
        </Container>
    );
};
export default SideNav;
