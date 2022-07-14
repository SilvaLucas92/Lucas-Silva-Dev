import { Flex, Box, Heading } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Box 
    w='100%'     
    bg='#0a0a0a'>

    <Flex
    as='footer'
    w={{base: '90%', md: '80%', xl:'70%'}}
    mx='auto'
    >
        <Heading
        fontSize={{base:'18px', md:'20px'}}
        color='#eff0f3'
        fontWeight='300'
        opacity='0.9'
        py={5}
        >
            Lucas Silva - 2022
        </Heading>
    </Flex>
    </Box>
    )
}

export default Footer