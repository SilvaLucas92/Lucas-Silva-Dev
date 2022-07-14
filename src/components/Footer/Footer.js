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
        fontSize={['25px']}
        color='white'
        fontWeight='200'
        >
            Lucas Silva 2022
        </Heading>
    </Flex>
    </Box>
    )
}

export default Footer