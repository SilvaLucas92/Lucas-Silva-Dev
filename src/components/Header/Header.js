import { Text, Flex, Heading, HStack,  IconButton, Box, chakra } from '@chakra-ui/react';
import { AiOutlineAlignRight,  AiOutlineClose} from 'react-icons/ai';
import { TbEqual } from 'react-icons/tb';
import { Link } from 'react-scroll';
import React, { useState, useEffect } from 'react'
import { motion, isValidMotionProp } from 'framer-motion';
import './styles.css'

const variants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: "-200%" },
}

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
    position='fixed'
    zIndex='1'
    overflow='hidden'
    initial={{y:-250}}
    animate={{y:0}}
    transition={{
    delay: 3.7,
    duration:2}}
    >
      <Flex >
        <HStack
          w={{base: '90%', md: '80%'}}
          mx='auto'
          justify='space-between'
          align='center'
          p={5}>
          display
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
       <ChakraBox
        h='100%'
        w='100%'
        position='fixed'
        top='0'
        left='0'
        right='0'
        bottom='0'
        overflow='auto'
        display={showMenu? 'block' : 'none'}
        bg='#fffffe'
        zIndex='300'
        animate={showMenu ? "open" : "closed"}
        variants={variants}
        transition={{
          type: "spring",
          stiffness: 50 }}
       >
        <Flex
        w='100%'
        textAlign='center'
        direction='column'
        justify='center'
        align='center'
        >
              <Heading cursor='pointer' my={20} onClick={() => {return !showMenu? setShowMenu(true) : setShowMenu(false)}}>Close</Heading>
              <chakra.a 
              href="#about-me" 
              m={5} fontSize={['16px', '18px', '20px' , '22px', '24px']}  
              fontWeight='600'>
              <Link
              to='about-me'
              spy={true} 
              smooth={true} 
              offset={100} 
              duration={800}
              onClick={() => {return setShowMenu(false)}}
              >
              About Me</Link>
              </chakra.a>
              <chakra.a 
              href="#skills" 
              m={5} fontSize={['16px', '18px', '20px' , '22px', '24px']}  
              fontWeight='600'>
              <Link
              to='skills'
              spy={true} 
              smooth={true} 
              offset={100} 
              duration={800}
              onClick={() => {return setShowMenu(false)}}
              >
              Skills</Link>
              </chakra.a>
              <chakra.a 
              href="#projects" 
              m={5} fontSize={['16px', '18px', '20px' , '22px', '24px']}  
              fontWeight='600'>
              <Link
              to='projects'
              spy={true} 
              smooth={true} 
              offset={100} 
              duration={800}
              onClick={() => {return setShowMenu(false)}}
              >
              Projects</Link>
              </chakra.a>
              <chakra.a 
              href="#contact" 
              m={5} fontSize={['16px', '18px', '20px' , '22px', '24px']}  
              fontWeight='600'>
              <Link
              to='contact'
              spy={true} 
              smooth={true} 
              offset={100} 
              duration={800}
              onClick={() => {return setShowMenu(false)}}
              >
              Contact Me</Link>
              </chakra.a>
        </Flex>
       </ChakraBox>
    </ChakraBox> 
    
  )
}

export default Header;