import React from 'react'
import PropTypes from 'prop-types'
import { Box, Image } from '@chakra-ui/react'

const GardenCam = props => {
    return (
        <Box bgColor={'green'} spacing={7} width={'95%'} height={'500px'} ml = {75} mb={8}>
            <Image src= 'https://cdn.britannica.com/77/170677-050-F7333D51/lettuce.jpg'objectFit="cover" width="100%" height="100%"/>
        </Box>
    )
}

GardenCam.propTypes = {}
export default GardenCam;