import { SimpleGrid, Flex, Box } from '@chakra-ui/react';
import CameraFeed from './camera-feed';
import GraphCarousel from './Graph Carousel/index';

const TopGrid = () => {
    return (
        <Flex>
            <SimpleGrid columns={{sm:1, md:2}} width={'100%'} spacing={7} pl={70} pr={70}>
                <Box bgColor={'RGBA(0, 0, 0, 0.08)'} border={''} borderRadius={'5px'} boxShadow={'lg'}>
                </Box>
                <Box bgColor={''} border={''} borderRadius={'5px'} boxShadow={'lg'}>
                    <GraphCarousel/>
                </Box>
            </SimpleGrid>
        </Flex>
    )
}

export default TopGrid;