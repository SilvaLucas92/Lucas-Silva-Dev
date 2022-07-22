import { Box, Heading, Flex, HStack, chakra, IconButton } from '@chakra-ui/react'
import React from 'react'
import './index.css';
import { motion, isValidMotionProp } from 'framer-motion';

const ChakraBox = chakra(motion.header, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',
});

const Hero = () => {
  return (
    <Box 
    as='section'
    bg='#f8f8f8'
    >
      <Flex
      h='100vh'
      w={{base: '90%', md: '80%', xl:'70%'}}
      mx='auto'
      align='center'
      justify='center'
      >
        <Flex
        overflow='hidden'
        my='50vh'
        direction='column'
        >
            <Heading 
            className='content'
            fontSize={{base:'14vw', sm:'12vw'}}
            lineHeight='1.1em'
            fontWeight='400'
            color='#0d0d0d'
            >
              <chakra.span>L</chakra.span>
              <chakra.span>U</chakra.span>
              <chakra.span>C</chakra.span>
              <chakra.span>A</chakra.span>
              <chakra.span>S</chakra.span>
              <chakra.span> </chakra.span>
              <chakra.span>S</chakra.span>
              <chakra.span>I</chakra.span>
              <chakra.span>L</chakra.span>
              <chakra.span>V</chakra.span>
              <chakra.span>A</chakra.span>
            </Heading>
            <ChakraBox 
            className='content' 
            textAlign='right' 
            fontWeight='200' 
            fontSize='6vw' 
            lineHeight='1.1em'
            overflow='hidden'
            initial={{y:250}}
            animate={{y:0}}
            transition={{
            delay: 2.5,
            duration:2}}
            color='#2a2a2a'
            >
            FULLSTACK DEV
            </ChakraBox>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Hero