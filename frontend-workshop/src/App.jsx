import React from 'react';
import { Box, ChakraProvider, Flex, Grid, GridItem, Stack } from '@chakra-ui/react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import theme from './theme';
import SideNav from './components/SideNav';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Grid 
            w = 'full' 
            templateAreas={{base: `"sidenav" "content"`, md: `"sidenav content"`}}
            gridTemplateColumns={[ `1fr`, `1fr`, `200px 1fr`]}
      >
        <GridItem area = 'sidenav' bgColor={''}>
          <SideNav />
        </GridItem>

        <GridItem area = 'content' bgColor={''}>
          <Outlet />
        </GridItem>

      </Grid>
    </ChakraProvider>
  );
}

export default App;


// import React from 'react';
// import { Box, ChakraProvider, Flex, Grid, GridItem, Stack } from '@chakra-ui/react';
// import { Link, Outlet, useLocation } from 'react-router-dom';
// import theme from './theme';
// import SideNav from './components/SideNav';

// function App() {
//   const{pathname} = useLocation();
//   return (
//     <ChakraProvider theme={theme}>
//       <Flex>
//         <Box id = 'sidebar'>
//           <Box id = 'imageContainer'/>
//           <Stack spacing={0} pt={30}>
//             <Link to="/" 
//                   className={pathname === '/' ? 'menuActive' : 'menu'}> Home </Link>
//             <Link to="/resources" 
//                   className={pathname === '/resources' ? 'menuActive' : 'menu'}> Resources </Link>
//             <Link to="/projects" 
//                   className={pathname === '/projects' ? 'menuActive' : 'menu'}> Projects </Link>
//             <Link to="/companies" 
//                   className={pathname === '/companies' ? 'menuActive' : 'menu'}> Companies </Link>
//             <Link to="/requests" 
//                   className={pathname === '/requests' ? 'menuActive' : 'menu'}>Requests</Link>
//           </Stack>
//         </Box>

        
//         <Box id='outlet'>
//           <Outlet />
//         </Box>
//       </Flex>      
//     </ChakraProvider>
//   );
// }

// export default App;

