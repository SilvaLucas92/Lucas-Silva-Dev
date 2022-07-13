import { Flex, Heading, Box, Text, Image, VStack } from '@chakra-ui/react'
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

// import required modules
import { Autoplay } from "swiper";


const Skills = () => {
    return(
      <Box
      as='section'
      >

        <Flex 
          h='80vh'
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

            <SwiperSlide
            ml='30px'>      
              <Image
              src={'https://raw.githubusercontent.com/SilvaLucas92/portfolio-LucasSilva/master/public/images/Javascript_Logo.png'}
              alt="carousel image"
              mx='auto'
              boxSize='100px'
              borderRadius='350px'
              />
            </SwiperSlide>
            <SwiperSlide>      
              <Image
              src={'https://raw.githubusercontent.com/SilvaLucas92/portfolio-LucasSilva/master/public/images/Javascript_Logo.png'}
              alt="carousel image"
              boxSize='100px'
              borderRadius='350px'
              mx='auto'
              />
            </SwiperSlide>
            <SwiperSlide>      
              <Image
              src={'https://raw.githubusercontent.com/SilvaLucas92/portfolio-LucasSilva/master/public/images/Javascript_Logo.png'}
              alt="carousel image"
              boxSize='100px'
              borderRadius='350px'
              mx='auto'
              />
            </SwiperSlide>
            <SwiperSlide>      
              <Image
              src={'https://raw.githubusercontent.com/SilvaLucas92/portfolio-LucasSilva/master/public/images/Javascript_Logo.png'}
              alt="carousel image"
              boxSize='100px'
              borderRadius='350px'
              mx='auto'
              />
            </SwiperSlide>
            <SwiperSlide>      
              <Image
              src={'https://raw.githubusercontent.com/SilvaLucas92/portfolio-LucasSilva/master/public/images/Javascript_Logo.png'}
              alt="carousel image"
              boxSize='100px'
              borderRadius='350px'
              mx='auto'
              />
            </SwiperSlide>
            <SwiperSlide>      
              <Image
              src={'https://raw.githubusercontent.com/SilvaLucas92/portfolio-LucasSilva/master/public/images/Javascript_Logo.png'}
              alt="carousel image"
              boxSize='100px'
              borderRadius='350px'
              mx='auto'
              />
            </SwiperSlide>
          </Swiper>
          </Flex>
        </Flex>
      </Box>
    )
  }

export default Skills

