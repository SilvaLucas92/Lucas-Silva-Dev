
import React, { useEffect, useState } from 'react';
import { Flex, Heading, Text, chakra } from '@chakra-ui/react';
import { motion, isValidMotionProp } from 'framer-motion';
const ChakraBox = chakra(motion.div, {

    shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',
  });
const variants = {
    open: { y:0 },
    closed: { y: -1200 },
  }
const Intro = ({ showBtn, setShowBtn }) => {
    const [ value, setValue ] = useState (0); 
    const [ telon, setTelon ] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            if (value < 100 ) {
                setValue(value + 10)
            } else {
              setTelon(true)
              setTimeout(() => {
                setShowBtn(true)
              }, 2200)
            }
        }, 500)
    })

  return (
    <ChakraBox
    w='100%'
    h='100vh'
    bg='#161616'
    animate={telon ? "closed" : "open"}
    initial={{y: 0}}
    variants={variants}
    transition={{delay:0.5, duration:3}}
    >
    <Flex
        p={10}
        justify='space-between'
        w='100%'
        h='100%'
        >
            <Heading fontSize='2.5em' fontWeight='400' color='white'>Lucas Silva Dev</Heading>
            <Text alignSelf='flex-end' fontWeight='500' fontSize='50px' color='white' textAlign='end'>{value}%</Text>
    </Flex>

    </ChakraBox>
 
  )
}

export default Intro