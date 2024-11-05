'use client';
import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';

function VideoHero() {
  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      >
        <source src="../videos/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <Container
        maxWidth={false}
        sx={{
          maxWidth: { xs: '1200px', lg: '1000px', md: 'lg' },
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'start',
          height: '100%',
          color: 'white',
          textAlign: 'start',
        }}
      >
        <Box sx={{ ml: 2, maxWidth: { xs: '1200px', md: '700px', lg: '600px' } }}>
          <Typography variant="p" component="p" className="text-[#868688] font-light">
            CREATIVE AGENCY
          </Typography>
          <Typography 
            component="h1" 
            className="font-montserrat font-bold"
            sx={{ fontSize: { xs: '2.5rem', sm: '4rem', md: '4rem', lg: '4rem', lineHeight:{xs: '4rem', lg:'5rem'}} }}
          >
            WE ARE <strong className="text-[#3bbbf2]">CREATIVE</strong> DESIGN AGENCY
          </Typography>
          <hr className="border-t-4 border-[#3bbbf2] w-1/4 mb-6" />
          <Typography variant="p" sx={{ mb: 6, mt: 4 }}>
            Your journey begins here. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quae tempora omnis autem, eum dolorem.
          </Typography>

          {/* Flex container for play icon and "About Us" */}
          <Box sx={{ display: 'flex', alignItems: 'center', mt: 6, gap: 1 }}>
            <PlayCircleFilledIcon sx={{ fontSize: 50, color: '#3bbbf2', cursor: 'pointer' }} className='animated animate-pulse' />
            <Typography variant="p" component="span" sx={{ ml: 1, fontSize: '1rem', color: 'white' }}>
              About Us <br /> <em className='text-[#3bbbf2]'>lorem somethong</em> 
            </Typography>
          </Box>
        </Box>
      </Container>

      {/* Dark gradient overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 1))',
          zIndex: 1,
        }}
      />
    </Box>
  );
}

export default VideoHero;
