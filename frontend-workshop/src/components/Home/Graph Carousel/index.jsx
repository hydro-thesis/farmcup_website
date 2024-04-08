import React, { useState } from 'react'
import { Box } from '@chakra-ui/react'
import Slider from 'react-slick'
import PHLevelGraph from '../../graphs/pH-level'
import TDSLevelGraph from '../../graphs/tds'
import MoistureGraph from '../../graphs/cocopeat-moitsure'
import ECLevelGraph from '../../graphs/electrical-conductivity'
import AmbientLightGraph from '../../graphs/ambient-light'
import AmbientHumidityGraph from '../../graphs/ambient_humidity'
import AmbientTemperatureGraph from '../../graphs/ambient_temperature'
import WaterLevelGraph from '../../graphs/water-level'

const settings = {
  dots: true,
  arrows: false,
  fade: false,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
}

function GraphCarousel() {
  const [slider, setSlider] = useState();

  const cards = [
    <AmbientLightGraph key="ambientLightGraph" />,
    <PHLevelGraph key="phLevelGraph" />,
    <TDSLevelGraph key='tdsLevelGraph' />,
    <MoistureGraph key='moistureGraph' />,
    <ECLevelGraph key='ecLevelGraph' />,
    <AmbientHumidityGraph key='ambientHumidityGraph'/>,
    <AmbientTemperatureGraph key='ambientTemperatureGraph'/>,
    <WaterLevelGraph key='waterLevelGraph'/>
  ]

  return (
    <Box position={'relative'} height={'auto'} width={'full'} overflow={'hidden'}>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards}
      </Slider>
    </Box>
  )
}

export default GraphCarousel;