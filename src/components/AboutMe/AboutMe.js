import { Flex, Box, Text, Heading, chakra, Center, Button } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import cvSpanish from './LucasSilva-CV.pdf';
import Aos from 'aos';
import 'aos/dist/aos.css';
const AboutMe = () => {
  useEffect(() => {
    Aos.init({ duration:2000 })
  }, []);
  return (
    <Box
    h='100%'
    bg='#0a0a0a'
    as='section'
    id='about-me'
    >
        <Flex
        w={{base: '90%', md: '80%', xl:'70%'}}
        mx='auto'
        align='center'
        justify='center'
        direction='column'
        py='150px'
        >
          <Flex justify='left' w='100%'>
            <Heading
            fontSize={['40px', '45px', '55px', '65px', '75px' ]}
            color='#eff0f3'
            fontWeight='200'
            data-aos="fade-down"
            >About Me</Heading>
          </Flex>
          <Text
          fontSize={['16px', '18px', '20px' , '22px', '24px']}
          color='#fffffe'
          my={5}
          data-aos="fade-up"
          >Hola! Mi nombre es Lucas y vivo en Buenos Aires. Termine la certificacion de FullStack Web Developer en Digital House y actualmente me desempeño como React Developer en Ernst & Young. En mis ratos libres (ademas de tocar la guitarra) trabajo en mis propios proyectos para profundizar mis conocimientos y sumar nuevos. Ahora que ya me conociste un poco, te invito a que mires algunos de mis proyectos.</Text>
          <Text 
          my={5} 
          color='#fffffe' 
          fontSize={['16px', '18px', '20px' , '22px', '24px']} 
          data-aos="fade-up"
          >Hola! Mi nombre es Lucas y vivo en Buenos Aires. Termine la certificacion de FullStack Web Developer en Digital House y actualmente me desempeño como React Developer en Ernst & Young. En mis ratos libres (ademas de tocar la guitarra) trabajo en mis propios proyectos para profundizar mis conocimientos y sumar nuevos. Ahora que ya me conociste un poco, te invito a que mires algunos de mis proyectos.</Text>
          <Button mt={10} py={5} bg='#ffc72c'><chakra.a href={cvSpanish} target='_blank'>Descargar CV</chakra.a></Button>
        </Flex>
    </Box>
  )
}

export default AboutMe