import { Flex, Heading, Image, Box, chakra, HStack  } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import data from './data'
import Aos from 'aos';
import 'aos/dist/aos.css';
const Projects = () => {
    useEffect(() => {
        Aos.init({ duration:2000 })
      }, []);
  return (
    <Box 
    bg='#ffc72c'
    as='section'
    id='projects'
    >
        <Box        
        w={{base: '90%', md: '80%', xl:'70%'}} 
        mx='auto'
        py='150px'
        >

            <Flex
            direction='column'
            >
                <Heading
                fontSize={['40px', '45px', '55px', '65px', '75px' ]}
                fontWeight='200'
                my={5}
                color='#0d0d0d'
                data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-easing="linear"
                >Projects</Heading>
            </Flex>
            {data.map((oneData, index) => {
                return(                    
                    <Box 
                    key={index}
                    overflowY='hidden'
                    data-aos= "fade-up"
                    data-aos-duration="1000"
                    data-aos-easing="linear"
                    >
                        <Flex
                        className='section'
                        justify={index % 2 === 0 ? 'right' : 'flex-start'}
                        align='center'
                        w='100%'
                        my='20px'
                        >
                            <Box
                            w={{base:'600px', xl:'700px'}}
                            >
                                <Box
                                w='100%'
                                >
                                    <chakra.a href={oneData.site}>
                                        <Image 
                                        src={oneData.img}
                                        />
                                    </chakra.a>
                                </Box>
                                <Box className='text'>
                                    <chakra.a href={oneData.site}> 
                                        <Heading 
                                        as='h4' 
                                        fontSize={{base:'20px', sm:'25px', md:'30px', xl:'35px'}} 
                                        fontWeight='400' 
                                        opacity='0.9'
                                        mt={3}
                                        color='#2a2a2a'
                                        >{oneData.name}</Heading>
                                    </chakra.a>
                                    <HStack 
                                    mt={1}
                                    >                
                                        <chakra.a href={oneData.github} color='#2a2a2a' opacity='0.8'>Github *</chakra.a>
                                        <chakra.a href={oneData.site} color='#2a2a2a' opacity='0.8'>Site</chakra.a>
                                    </HStack>
                                </Box>
                            </Box>
                        </Flex>
                    </Box>
                )
            })}
        </Box>
    </Box>
  )
}

export default Projects;