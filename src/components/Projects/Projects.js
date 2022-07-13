import { Flex, Heading, VStack, Image, Box, chakra, HStack  } from '@chakra-ui/react'
import React from 'react'
import foto from './ssss.png'
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
            <Box>
                <Flex
                className='section'
                justify='flex-start'
                align='center'
                w='100%'
                my='20px'
                >
                    <Box
                    w={{base:'600px', xl:'700px'}}
                    >
                        <Box
                        w='100%'>
                            <Image src={foto} />
                        </Box>
                        <Box className='text'>
                            <Heading 
                            as='h4' 
                            fontSize={{base:'20px', sm:'25px', md:'30px', xl:'35px'}} 
                            fontWeight='400' 
                            opacity='0.9'
                            mt={3}
                            >Shopping Cart</Heading>
                            <HStack mt={1}>                
                                <chakra.a href='#' opacity='0.8'>Github *</chakra.a>
                                <chakra.a href='#' opacity='0.8'>Site</chakra.a>
                            </HStack>
                        </Box>
                    </Box>
                </Flex>
            </Box>
            <Box>
                <Flex
                className='section'
                justify='right'
                align='center'
                w='100%'
                my='20px'
                >
                    <Box
                    w={{base:'600px', xl:'700px'}}
                    >
                        <Box
                        w='100%'>
                            <Image src={foto} />
                        </Box>
                        <Box className='text'>
                            <Heading 
                            as='h4' 
                            fontSize={{base:'20px', sm:'25px', md:'30px', xl:'35px'}} 
                            fontWeight='400' 
                            opacity='0.9'
                            mt={3}
                            >Shopping Cart</Heading>
                            <HStack mt={1}>                
                                <chakra.a href='#' opacity='0.8'>Github *</chakra.a>
                                <chakra.a href='#' opacity='0.8'>Site</chakra.a>
                            </HStack>
                        </Box>
                    </Box>
                </Flex>
            </Box>
            <Box>
                <Flex
                className='section'
                justify='flex-start'
                align='center'
                w='100%'
                my='20px'
                >
                    <Box
                    w={{base:'600px', xl:'700px'}}
                    >
                        <Box
                        w='100%'>
                            <Image src={foto} />
                        </Box>
                        <Box className='text'>
                            <Heading 
                            as='h4' 
                            fontSize={{base:'20px', sm:'25px', md:'30px', xl:'35px'}} 
                            fontWeight='400' 
                            opacity='0.9'
                            mt={3}
                            >Shopping Cart</Heading>
                            <HStack mt={1}>                
                                <chakra.a href='#' opacity='0.8'>Github *</chakra.a>
                                <chakra.a href='#' opacity='0.8'>Site</chakra.a>
                            </HStack>
                        </Box>
                    </Box>
                </Flex>
            </Box>
            <Box>
                <Flex
                className='section'
                justify='right'
                align='center'
                w='100%'
                my='20px'
                >
                    <Box
                    w={{base:'600px', xl:'700px'}}
                    >
                        <Box
                        w='100%'>
                            <Image src={foto} />
                        </Box>
                        <Box className='text'>
                            <Heading 
                            as='h4' 
                            fontSize={{base:'20px', sm:'25px', md:'30px', xl:'35px'}} 
                            fontWeight='400' 
                            opacity='0.9'
                            mt={3}
                            >Shopping Cart</Heading>
                            <HStack mt={1}>                
                                <chakra.a href='#' opacity='0.8'>Github *</chakra.a>
                                <chakra.a href='#' opacity='0.8'>Site</chakra.a>
                            </HStack>
                        </Box>
                    </Box>
                </Flex>
            </Box>
        </Box>
    </Box>
  )
}

export default Projects



{/* <Flex  justify='flex-start' direction='column' my='20px'>
                <Image src={foto} w={{base:'100%', sm:'100%', md:'80%', xl:'70%'}} />
                <Heading as='h4' fontWeight='400' opacity='0.9'>Shopping Cart</Heading>
                <HStack>                
                    <chakra.a href='#' opacity='0.8'>Github *</chakra.a>
                    <chakra.a href='#' opacity='0.8'>Site</chakra.a>
                </HStack>
            </Flex>
                <Flex border='solid 1px white' justify='flex-end'>
                <VStack>
                    <Image alignContent='right' src={foto} w={{base:'100%', sm:'100%', md:'80%', xl:'70%'}} />
                    <Heading as='h4' fontWeight='400' opacity='0.9'>Shopping Cart</Heading>
                    <HStack>                
                        <chakra.a href='#' opacity='0.8'>Github *</chakra.a>
                        <chakra.a href='#' opacity='0.8'>Site</chakra.a>
                    </HStack>
                </VStack>
                </Flex>
            <Flex   border='solid 1px white' w='100%' justify='flex-start' my='20px'>
                <Image src={foto} w={{base:'100%', sm:'100%', md:'80%', xl:'70%'}} />
            </Flex>
            <Flex  w='100%' justify='flex-end' my='20px' >
                <Image src={foto} w={{base:'100%', sm:'100%', md:'80%', xl:'70%'}} />
            </Flex>
            <Flex  w='100%' justify='flex-start' my='20px'>
                <Image src={foto} w={{base:'100%', sm:'100%', md:'80%', xl:'70%'}} />
            </Flex>
            <Flex w='100%'  justify='flex-end' my='20px' >
                <Image src={foto} w={{base:'100%', sm:'100%', md:'80%', xl:'70%'}} />
            </Flex>
        </Flex> */}