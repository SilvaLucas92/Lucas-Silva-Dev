import { Flex, Heading, Box, Text, Image } from '@chakra-ui/react'
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper";
import data from './data'
import Aos from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {

  useEffect(() => {
    Aos.init({ duration:2000 })
  }, []);
  
    return(
      <Box
      minH='100vh'
      as='section'
      bg='#f8f8f8'
      id='skills'
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
            color='#0d0d0d'
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-easing="linear"
            data-aos-anchor-placement="bottom-bottom"
            >Skills</Heading>
            <Text
            fontSize={['16px', '18px', '20px' , '22px', '24px']}
            my={5}
            color='#2a2a2a'
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="linear"
            data-aos-anchor-placement="bottom-bottom"
            >Estas son algunas de las tecnologias que manejo y mas disfruto de usar!</Text>
          </Flex>
          <Flex
          w='100%'
          justify='center'
          align='center'
          my='80px'
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-anchor-placement="bottom-bottom"
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
                overflow='hidden'
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

