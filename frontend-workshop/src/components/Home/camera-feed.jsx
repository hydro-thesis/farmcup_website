import { Flex } from '@chakra-ui/react';
import { useRef } from 'react';
import Webcam from 'react-webcam'

const CameraFeed = () => {
    const webRef = useRef(null);

    return (
        <Flex justify = {'center'}>
            <Webcam ref={webRef} w={'100%'}/>
        </Flex>
    )
}

export default CameraFeed;