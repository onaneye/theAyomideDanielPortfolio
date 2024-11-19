// File: Portfolio.js
'use client'
import React, { useState } from 'react';
import { Container, Box, Typography, Button, Grid } from '@mui/material';
import { projects } from '../components/constant'; // Ensure this contains the media info

const Portfolio = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  // Filter projects based on the selected type
  const filteredProjects = selectedFilter === 'all' 
    ? projects 
    : projects.filter(project => project.type === selectedFilter);

  return (
    <section className='bg-[#2a2c33] pt-12 pb-12'>
      <Container
        maxWidth={false}
        sx={{
          maxWidth: { xs: '1200px', lg: '1000px', md: 'lg' },
          height: '100%',
          color: 'white',
          marginTop: "6rem"
        }}
      >
        <Box sx={{maxWidth: 'sm', margin: '0 auto'}}>
          <Typography variant="body1" className="text-[#868688] font-light text-center">
            PORTFOLIO
          </Typography> 
          <Typography 
            variant='h2' 
            className='font-montserrat font-bold text-center mb-12'
            sx={{ fontSize: { xs: '2.5rem', lg: '2.5rem', marginBottom: '3rem' } }}
          >
            We Use <strong className="text-[#3bbbf2]">Creativity</strong> to get Our Clients 
          </Typography>
        </Box>
      
        <Box sx={{ mb: 4, display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          {['all', 'graphic design', 'branding', 'photography', 'social media design', 'motion graphics', 'web design'].map((type) => (
            <Button
              key={type}
              variant={selectedFilter === type ? 'contained' : 'outlined'}
              onClick={() => setSelectedFilter(type)}
              sx={{ mx: 1, mb: 2 }}
            >
              {type === 'all' ? 'All' : type.charAt(0).toUpperCase() + type.slice(1)}
            </Button>
          ))}
        </Box>

        <Grid container spacing={3}>
          {filteredProjects.map(project => (
            <Grid item xs={12} sm={6} md={4} key={project.id}>
              <Box sx={{padding: '16px', textAlign: 'center', backgroundColor: '#15171c' }}>
                {project.mediaType === 'image' ? (
                  <img src={project.media} alt={project.title} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
                ) : project.mediaType === 'video' ? (
                  <video controls style={{ width: '100%', height: 'auto', borderRadius: '8px' }}>
                    <source src={project.media} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : null}
                <Typography variant="h5" sx={{ marginTop: '1rem' }}>{project.title}</Typography>
                <Typography variant="subtitle1" sx={{ color: '#777' }}>{project.type}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default Portfolio;
