import { Flex, Box, Text, Heading, chakra, Center, Button } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import cvSpanish from './LucasSilva-CV.pdf';
import Aos from 'aos';
import 'aos/dist/aos.css';
const AboutMe = () => {
  useEffect(() => {
    Aos.init({ duration:2000 })
  }, []);

  const aboutMeText = [
    {
      id:1,
      text:'Hola Mundo! Mi nombre es Lucas Silva y soy un apasionado de la tecnologia. Actualmente vivo en Buenos Aires, Argentina y trabajo como Desarrollador Full Stack para EY GDS Argentina.'
    },
    {
      id:2,
      text:'Mi interes por el desarrollo web nace hace un tiempo cuando empece de manera autodidacta a realizar cursos y challenges de HTML y CSS. Luego ansioso por conocer mas de este mundo, decidi  cursar en Digital House la carrera de Desarrollador Full Stack la cual finalice. Hoy en dia sigo capacitandome  y esforzandome en incorporar nuevas tecnologias.'
    },
    {
      id:3,
      text:'En mis ratos libres (ademas de tocar la guitarra) trabajo en mis propios proyectos para profundizar mis conocimientos y sumar nuevos.'
    },
    {
      id:4,
      text:'Ahora que ya me conociste un poco te invito a que veas mis proyectos y mi CV.'
    }
  ]

  return (
    <Box
    minH='100vh'
    bg='#0a0a0a'
    as='section'
    id='about-me'
    >
        <Flex
        w={{base: '90%', md: '80%', xl:'70%'}}
        mx='auto'
        justify='center'
        direction='column'
        py='150px'
        >
          <Flex justify='left' w='100%'>
            <Heading
            fontSize={['40px', '45px', '55px', '65px', '75px' ]}
            color='#eff0f3'
            mb={17}
            fontWeight='200'
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-easing="linear"
            data-aos-anchor-placement="bottom-bottom"
            >About Me</Heading>
          </Flex>
          {aboutMeText.map((oneText, i) => {
              return(
                <Text
                key={i} 
                my={3} 
                color='#fffffe' 
                fontSize={['16px', '18px', '20px' , '22px', '24px']} 
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-easing="linear"
                data-aos-anchor-placement="bottom-bottom"
                >
                  { oneText.text }
                </Text>
              )
          })}
          <Button
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="linear"
          data-aos-anchor-placement="bottom-bottom"
          variant='outline'
          mt={10} 
          py={5} 
          w='20%'
          colorScheme='whiteAlpha'
          ><chakra.a href={cvSpanish} target='_blank'>Descargar CV</chakra.a></Button>
        </Flex>
    </Box>
  )
}

export default AboutMe