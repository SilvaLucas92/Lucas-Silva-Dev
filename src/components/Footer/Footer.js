import { Flex, Box, Text } from '@chakra-ui/react'
import React from 'react'
import { AiFillHeart } from 'react-icons/ai'

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
        <Text
        color='white'
        >
            Lucas Silva 2022
        </Text>
    </Flex>
    </Box>
    )
}

export default Footer