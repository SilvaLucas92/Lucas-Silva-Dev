import { Flex, Heading, VStack, Image, Box, chakra, HStack  } from '@chakra-ui/react'
import React from 'react'
import data from './data'
const Projects = () => {
  return (
    <Box 
    bg='#ffc72c'
    as='section'
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
                >Projects</Heading>
            </Flex>
            {data.map((oneData, index) => {
                return(                    
                    <Box>
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
                                w='100%'>
                                    <Image src={oneData.img} />
                                </Box>
                                <Box className='text'>
                                    <Heading 
                                    as='h4' 
                                    fontSize={{base:'20px', sm:'25px', md:'30px', xl:'35px'}} 
                                    fontWeight='400' 
                                    opacity='0.9'
                                    mt={3}
                                    >{oneData.name}</Heading>
                                    <HStack mt={1}>                
                                        <chakra.a href={oneData.github} opacity='0.8'>Github *</chakra.a>
                                        <chakra.a href={oneData.site} opacity='0.8'>Site</chakra.a>
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