import React from 'react'
import { Flex, Heading, List, ListItem, Box, chakra } from '@chakra-ui/react'
import { AiOutlineGithub, AiOutlineMail, AiFillLinkedin } from 'react-icons/ai'
const Contact = () => {
  return (
    <Box
    bg='#0a0a0a'
    as='section'
    >
      <Flex
      direction='column'
      w={{base: '90%', md: '80%', xl:'70%'}}
      mx='auto'
      >
            <Flex direction='column' justify='left' w='100%' my={5}>
              <Heading
              fontSize={['40px', '45px', '55px', '65px', '75px' ]}
              color='white'
              fontWeight='200'
              >Seguimos el Contacto?</Heading>
              <List spacing={5} my={5}>
                <ListItem opacity='0.8' fontSize={['16px', '18px', '20px' , '22px', '24px']} color='white'>
                  <chakra.a href='https://github.com/SilvaLucas92'>Github</chakra.a>
                </ListItem>
                <ListItem opacity='0.8'  fontSize={['16px', '18px', '20px' , '22px', '24px']} color='white'>
                  <chakra.a href='mailto:l.silva8692@gmail.com'>Email</chakra.a>
                </ListItem>
                <ListItem opacity='0.8'  fontSize={['16px', '18px', '20px' , '22px', '24px']} color='white'>
                  <chakra.a href='https://www.linkedin.com/in/lucas-silva-b99518216/'>Linkedin</chakra.a>
                </ListItem>
              </List>
            </Flex>
      </Flex>
    </Box>
  )
}

export default Contact