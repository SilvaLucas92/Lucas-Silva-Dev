
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
    const [ telon, setTelon ] = useState(false)
    useEffect(() => {
        setTimeout(() => {
                setTelon(true)
                setTimeout(() => {
                  setShowBtn(true)
                }, 1200)
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
    transition={{delay:0.5, duration:1}}
    />
  )
}

export default Intro