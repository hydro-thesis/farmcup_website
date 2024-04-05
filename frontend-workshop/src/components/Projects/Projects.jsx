import {SimpleGrid, Box, Heading, Text, Button, ButtonGroup, LinkOverlay, LinkBox} from '@chakra-ui/react'
import '../../index.css'
import { PropTypes } from 'prop-types';

function ProjectContent({ data = [] }) {
  return (
      <SimpleGrid columns={{base: 1, md:2}} spacing={7} id='projectGrid'>
          {data?.length > 0 && data.map((project, id) => {
                return (
                    <LinkBox as={Box} key={`/projects-${id}`} id='projectContainer'>
                        <Heading id='projectName'>
                          <LinkOverlay href={`/projects/${project.id}`}>
                            {project.name}
                          </LinkOverlay>
                          </Heading>
                        <Text id='projectDescription'>{project.description}</Text>
                    </LinkBox>
                );
            })}
      </SimpleGrid>
  );
}

ProjectContent.propTypes = {
  data: PropTypes.array, 
  onDelete: PropTypes.func, 
  onEdit: PropTypes.func};
export default ProjectContent;


// import {
//   TableContainer,
//   Table,
//   TableHead,
//   TableRow,
//   TableCell,
//   Paper,
//   TableBody

// } from '@mui/material'
// import data from '../utils/MOCK_DATA.json'

// const MuiTable = () => {

//   return (
//       <TableContainer component={Paper}>
//           <Table aria-label='simple-table'>
//               <TableHead>
//                   <TableRow>
//                       <TableCell> pH Level </TableCell>
//                       <TableCell> Temperature </TableCell>
//                   </TableRow>
//               </TableHead>

//               <TableBody>
//                   {data.map((row) => (
//                       <TableRow key={row.id}>
//                           <TableCell>{row.ph_level}</TableCell>
//                           <TableCell>{row.temperature}</TableCell>
//                       </TableRow>
//                   ))}
//               </TableBody>
//           </Table>
//       </TableContainer>
//   )
// }

// export default MuiTable;