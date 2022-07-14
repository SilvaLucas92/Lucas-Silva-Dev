import { Flex, Heading, Box, Text, Image } from '@chakra-ui/react'
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper";
import data from './data'
const Skills = () => {
    return(
      <Box
      as='section'
      >

        <Flex 
          w={{base: '90%', md: '80%', xl:'70%'}}
          mx='auto'
          align='center'
          justify='center'
          direction='column'
          py='150px'
        >
          <Flex 
          justify='left' 
          w='100%' 
          direction='column' 
          my={10}
          >
            <Heading 
            fontSize={['40px', '45px', '55px', '65px', '75px' ]}
            fontWeight='200'
            >Skills</Heading>
            <Text
            fontSize={['16px', '18px', '20px' , '22px', '24px']}
            my={5}
            >Hola! Mi nombre es Lucas y vivo en Buenos Aires. mis propios proyectos p conociste un poco, te invito a que mires algunos de mis proyectos.</Text>
          </Flex>
          <Flex
          w='100%'
          justify='center'
          align='center'
          my='80px'
          >
          <Swiper
            slidesPerView={3}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            mx='auto'
          >
            {data.map(oneData => {
              return(
                <SwiperSlide
              ml='30px'
              key={oneData.id}
              >      
                <Image
                src={oneData.img}
                alt={oneData.name}
                mx='auto'
                boxSize={['70px', '80px', '100px', '120px', '140px']}
                borderRadius='350px'
                />
              </SwiperSlide>
              )
            })}
          </Swiper>
          </Flex>
        </Flex>
      </Box>
    )
  }

export default Skills

