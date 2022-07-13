import { Button, Flex, Heading, HStack,  IconButton, Stack, chakra } from '@chakra-ui/react';
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
    top={show ? 0 : '-100px'}
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
          <Flex
            // display={{md:'none'}}
          >
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

          <Flex
            as='nav'
            display={{base:'none'}}
            justify='center'
            align='center'
          >
            <Button m={2} variant='link'>
            <Link
              to='about-me'
              spy={true} 
              smooth={true} 
              offset={100} 
              duration={800}
            >
            About Me</Link>
            </Button>
            <Button m={2} variant='link'>
            <Link
              to='services'
              spy={true} 
              smooth={true} 
              offset={100} 
              duration={800}
            >
            Nuestros servicios</Link>
            </Button>
            <Button m={2} variant='link'>
            <Link
              to='contact-me'
              spy={true} 
              smooth={true} 
              offset={100} 
              duration={800}
            >
            Contacto</Link>
            </Button>
          </Flex>  
        </HStack>
      </Flex>
      <Flex
          as='nav'
          display={showMenu? 'flex' : 'none'}
          direction='column'
          w='100%'
          mx='auto'
          align='center'
          bg='#ffc72c'
          >
            <Button my={8} variant='link' size='lg'>
            <Link
              to='about-me'
              spy={true} 
              smooth={true} 
              offset={100} 
              duration={800}
              onClick={() => {return setShowMenu(false)}}
            >
            About Me</Link>
            </Button>
            <Button my={8} variant='link' size='lg'>
            <Link
              to='services'
              spy={true} 
              smooth={true} 
              offset={100} 
              duration={800}
              onClick={() => {return setShowMenu(false)}}
            >
            Nuestros servicios</Link>
            </Button>
            <Button my={8} variant='link' size='lg'>
            <Link
              to='contact-me'
              spy={true} 
              smooth={true} 
              offset={100} 
              duration={800}
              onClick={() => {return setShowMenu(false)}}
            >
            Contacto</Link>
            </Button>
        </Flex> 
    </ChakraBox> 
    
  )
}

export default Header;