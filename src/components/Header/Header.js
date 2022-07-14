import { Text, Flex, Heading, HStack,  IconButton, Box, chakra } from '@chakra-ui/react';
import { AiOutlineAlignRight,  AiOutlineClose} from 'react-icons/ai';
import { TbEqual } from 'react-icons/tb';
import { Link } from 'react-scroll';
import React, { useState, useEffect } from 'react'
import { motion, isValidMotionProp } from 'framer-motion';

const ChakraBox = chakra(motion.header, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',
});

const Header = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') { 
      if (window.scrollY > lastScrollY) {
        setShow(false); 
      } else {
        setShow(true);  
      }
      setLastScrollY(window.scrollY); 
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <ChakraBox
    w='100%'
    // top={show ? 0 : '-100px'}
    top='0'
    left='0'
    right='0'
    // bg='#ffc72c'
    position='fixed'
    zIndex='1'
    initial={{y:-250}}
    animate={{y:0}}
    transition={{
    delay:4, 
    type: "tween", 
    duration:0.8,
    ease:'easeInOut'}}
    bg='white'
    >
      <Flex >
        <HStack
          w={{base: '90%', md: '80%'}}
          mx='auto'
          justify='space-between'
          align='center'
          p={5}>
          <Heading>
              LS
          </Heading>
          <Flex>
            <IconButton
              icon={!showMenu? <TbEqual /> : <AiOutlineClose />} 
              onClick={() => {return !showMenu? setShowMenu(true) : setShowMenu(false)}}
              fontSize={28}
              fontWeight='100'
              isRound='true'
              backgroundColor='#0a0a0a'
              color='#ffffff' 
              variant='outline'
              border='none'
            />
          </Flex>  
        </HStack>
      </Flex>
            <Box
                as='nav'
                display={showMenu? 'flex' : 'none'}
                direction='column'
                border='solid 1px red'
                w='100%'
                bg='white'
                >
                <Flex 
                w='50%'
                zIndex='2'
                h='80vh'
                border='solid 1px red'
                bg='red'
                >
                  <Text>hola</Text>
                </Flex>
              </Box> 
    </ChakraBox> 
    
  )
}

export default Header;