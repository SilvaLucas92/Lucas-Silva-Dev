import { Flex, Heading, VStack, Image, Box, chakra, HStack  } from '@chakra-ui/react'
import React from 'react'
import foto from './ssss.png'
import photo from './photo.png'
import todo from './todo.png'
import tictac from './tictac.png'
import memory from './memory.png'
import weather from './weather.png'
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
                                <chakra.a href='https://github.com/SilvaLucas92/cart-redux' opacity='0.8'>Github *</chakra.a>
                                <chakra.a href='https://cart-redux-peach.vercel.app/' opacity='0.8'>Site</chakra.a>
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
                            <Image src={todo} />
                        </Box>
                        <Box className='text'>
                            <Heading 
                            as='h4' 
                            fontSize={{base:'20px', sm:'25px', md:'30px', xl:'35px'}} 
                            fontWeight='400' 
                            opacity='0.9'
                            mt={3}
                            >Photo Gallery</Heading>
                            <HStack mt={1}>                
                                <chakra.a href='https://github.com/SilvaLucas92/photo-redux' opacity='0.8'>Github *</chakra.a>
                                <chakra.a href='https://photo-redux.vercel.app/' opacity='0.8'>Site</chakra.a>
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
                            <Image src={photo} />
                        </Box>
                        <Box className='text'>
                            <Heading 
                            as='h4' 
                            fontSize={{base:'20px', sm:'25px', md:'30px', xl:'35px'}} 
                            fontWeight='400' 
                            opacity='0.9'
                            mt={3}
                            >To Do List</Heading>
                            <HStack mt={1}>                
                                <chakra.a href='https://github.com/SilvaLucas92/new-redux-todo' opacity='0.8'>Github *</chakra.a>
                                <chakra.a href='https://new-redux-todo.vercel.app/' opacity='0.8'>Site</chakra.a>
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
                            <Image src={tictac} />
                        </Box>
                        <Box className='text'>
                            <Heading 
                            as='h4' 
                            fontSize={{base:'20px', sm:'25px', md:'30px', xl:'35px'}} 
                            fontWeight='400' 
                            opacity='0.9'
                            mt={3}
                            >Tic Tac Toe</Heading>
                            <HStack mt={1}>                
                                <chakra.a href='https://github.com/SilvaLucas92/tictac' opacity='0.8'>Github *</chakra.a>
                                <chakra.a href='https://tictac-three.vercel.app/' opacity='0.8'>Site</chakra.a>
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
                            <Image src={memory} />
                        </Box>
                        <Box className='text'>
                            <Heading 
                            as='h4' 
                            fontSize={{base:'20px', sm:'25px', md:'30px', xl:'35px'}} 
                            fontWeight='400' 
                            opacity='0.9'
                            mt={3}
                            >Memory Game</Heading>
                            <HStack mt={1}>                
                                <chakra.a href='https://github.com/SilvaLucas92/memory-game' opacity='0.8'>Github *</chakra.a>
                                <chakra.a href='https://memory-game-ruddy-psi.vercel.app/' opacity='0.8'>Site</chakra.a>
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
                            <Image src={weather} />
                        </Box>
                        <Box className='text'>
                            <Heading 
                            as='h4' 
                            fontSize={{base:'20px', sm:'25px', md:'30px', xl:'35px'}} 
                            fontWeight='400' 
                            opacity='0.9'
                            mt={3}
                            >Weather App</Heading>
                            <HStack mt={1}>                
                                <chakra.a href='https://github.com/SilvaLucas92/weather-app-ls' opacity='0.8'>Github *</chakra.a>
                                <chakra.a href='https://weather-app-ls.vercel.app/' opacity='0.8'>Site</chakra.a>
                            </HStack>
                        </Box>
                    </Box>
                </Flex>
            </Box>                           
        </Box>
    </Box>
  )
}

export default Projects;