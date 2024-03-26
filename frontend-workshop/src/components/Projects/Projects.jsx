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