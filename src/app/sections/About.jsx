import React from 'react'
import { aboutImg } from '../../../public/images'
import { Container, Box, Typography, Button } from '@mui/material'
import Image from 'next/image'
import Stat from '../components/Stat'

const About = () => {
  return (
    <section className='mt-24 bg-[#2a2c33] pt-8 '>
      <Container 
          maxWidth={false}
          sx={{
            maxWidth: { xs: '1200px', lg: '1000px', md: 'lg' },
            height: '100%',
            color: 'white',
            textAlign: 'start',
            gap: "60px"
          }}
          className='lg:flex justify-between items-center'
        >
        <Box sx={{ ml: 2, maxWidth: { xs: '1200px', md: '700px', lg: '400px' }, mb: 4 }}>
            <Image src={aboutImg} loading="lazy" alt='about-image'/>
        </Box>
        <Box sx={{ ml:2, maxWidth: { xs: '1200px', md: '700px', lg: '500px' }}}>
            <Typography variant="body1" className="text-[#868688] font-light">
              ABOUT US
            </Typography> 
            <Typography 
              variant='h2' 
              className='font-montserrat font-bold'
              sx={{ fontSize: { xs: '2.5rem', lg: '2.5rem' } }}
            >
              We Use <strong className="text-[#3bbbf2]">Creativity</strong> to get Our Clients 
            </Typography>
            <hr aria-hidden="true" className="border-t-4 border-[#3bbbf2] w-1/4 mb-6 mt-4" />
            <Box sx={{maxWidth: "sm"}}>
              <Typography 
                variant="body1" 
                className="text-[#868688] font-light text-justify"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate sit excepturi fugiat veniam! Sunt accusamus iusto quas blanditiis ad libero iste ex odio quibusdam delectus? Voluptas ratione sit obcaecati impedit!
              </Typography>
            </Box>
            <Button 
              variant="contained" 
              sx={{ mt: 4, backgroundColor: '#3bbbf2', color: '#fff' }}
            >
              See More
            </Button>
        </Box>  
      </Container>
      <Stat/>  
    </section>
  )
}

export default About
