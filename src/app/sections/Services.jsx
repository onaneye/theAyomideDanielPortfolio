import { Container, Box, Typography, Grid, Paper, Button } from '@mui/material';
import React from 'react';
import BookIcon from '@mui/icons-material/Book';
import CodeIcon from '@mui/icons-material/Code';
import BrushIcon from '@mui/icons-material/Brush';
import ShowChartIcon from '@mui/icons-material/ShowChart';

const Services = () => {
  const servicesData = [
    { icon: <BookIcon sx={{ fontSize: '80px' }} />, title: 'Consulting', description: 'Expert consulting services tailored to your needs.' },
    { icon: <CodeIcon sx={{ fontSize: '80px' }} />, title: 'Development', description: 'High-quality software development solutions.' },
    { icon: <BrushIcon sx={{ fontSize: '80px' }} />, title: 'Design', description: 'Creative and responsive design services.' },
    { icon: <ShowChartIcon sx={{ fontSize: '80px' }} />, title: 'Analytics', description: 'Data-driven insights for better decision-making.' },
  ];

  return (
    <section className='mt-24'>
      <Box>
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
          <Box sx={{ ml: 2, maxWidth: { xs: '1200px', md: '700px', lg: '600px' }, mb: 4 }}>
            <Typography variant="body1" className="text-[#868688] font-light">
              OUR SERVICES
            </Typography> 
            <Typography 
              variant='h2' 
              className='font-montserrat font-bold'
              sx={{ fontSize: { xs: '2.5rem', lg: '2.5rem' } }}
            >
              What We <strong className="text-[#3bbbf2]">Do</strong>
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
            {/* Button added below the content */}
            <Button 
              variant="contained" 
              sx={{ mt: 4, backgroundColor: '#3bbbf2', color: '#fff' }}
            >
              Learn More
            </Button>
          </Box>

          {/* Grid Layout for Service Papers */}
          <Grid container spacing={2} sx={{ mt: 4 }}>
            {servicesData.map((service, index) => (
              <Grid item xs={12} sm={6} md={3} lg={6} key={index}>
                <Paper elevation={1} sx={{ 
                  p: 2, 
                  textAlign: 'center', 
                  backgroundColor: '#333', 
                  color: '#fff', 
                  width: '100%', 
                  height: '250px', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '8px' 
                }}>
                  <Box sx={{ mb: 1 }} className="text-[#3bbbf2]">
                    {service.icon}
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body2">
                    {service.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </section>
  );
};

export default Services;
