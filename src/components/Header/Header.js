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

  const links = [
    {
      name:'About me',
      navTo:'about-me'
    },
    {
      name:'Skills',
      navTo:'skills'
    },
    {
      name:'Projects',
      navTo:'projects'
    },
    {
      name:'Contact Me',
      navTo:'contact'
    }
  ]
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
    delay: 2.5,
    duration:2}}
    >
      <Flex >
        <HStack
          w='90%'
          mx='auto'
          justify='space-between'
          align='center'
          py={5}
          >
          <Heading  
          fontSize={['30px', '35px', '42px', '45px']}
          color='#0d0d0d'
          >
              LS
          </Heading>
          <Flex>
            <IconButton
              icon={!showMenu? <TbEqual /> : <AiOutlineClose />} 
              onClick={() => {return !showMenu? setShowMenu(true) : setShowMenu(false)}}
              fontSize={['20px', '28px', '30px']}
              fontWeight='100'
              isRound='true'
              backgroundColor='#0d0d0d'
              color='#ffffff' 
              variant='outline'
              border='none'
            />
          </Flex>  
        </HStack>
      </Flex>
       <ChakraBox
        h='100vh'
        w='100%'
        position='fixed'
        top='0'
        left='0'
        right='0'
        bottom='0'
        display={showMenu? 'block' : 'none'}
        bg='#f8f8f8'
        zIndex='300'
        animate={showMenu ? "open" : "closed"}
        variants={variants}
        transition={{
          type: "tween",
          duration:0.2 }}
       >
        <Flex
        w='100%'
        textAlign='center'
        direction='column'
        justify='center'
        align='center'
        >
              <Heading 
              cursor='pointer' 
              my={20} 
              onClick={() => {return !showMenu? setShowMenu(true) : setShowMenu(false)}}
              className="hover-underline-animation"
              >Close</Heading>
              {links.map((oneLink, i) => {
                return(
                  <chakra.a 
                  key={i}
                  cursor='pointer'
                  m={5} 
                  fontSize={['18px', '20px', '22px' , '24px', '26px']}  
                  fontWeight='600'
                  className="hover-underline-animation"
                  opacity='0.8'
                  >
                    <Link
                    to={oneLink.navTo}
                    spy={true} 
                    smooth={true} 
                    offset={100} 
                    duration={800}
                    onClick={() => {return setShowMenu(false)}}
                    >
                    {oneLink.name} </Link>
                  </chakra.a>
                )
              })}
        </Flex>
       </ChakraBox>
    </ChakraBox> 
    
  )
}

export default Header;