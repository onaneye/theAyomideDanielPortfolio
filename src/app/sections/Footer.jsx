import React from 'react';
import { Box, Typography, Grid, Divider, Container, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{bgcolor:'#2a2c33', color: 'white', py: 8, mt: 12 }}>
      <Container maxWidth={false} sx={{maxWidth: { xs: '1200px', lg: '1000px', md: 'lg' },}}>
        {/* Logo Section */}

        {/* Content Section */}
        <Grid container spacing={4}>
        <Grid item xs={12} md={3} display="flex" justifyContent={{ xs: 'center', md: 'flex-start' }}>
            <img src="../images/logo.png" alt="Logo" style={{ width: '100px', transform: 'scale(4)' }} />
          </Grid>
          {/* About Us */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom fontWeight="bold">
              About Us
            </Typography>
            <Typography variant="body2"  sx={{ lineHeight: 1.8, color: 'white' }}>
              We are a professional team dedicated to capturing your special moments with creativity and precision.
            </Typography>
          </Grid>

          {/* Contact Us */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom fontWeight="bold">
              Contact Us
            </Typography>
            <Typography variant="body2" sx={{color: 'white'}}>
              12 Adeoke street, Off Navy School, Ota, Ogun State
            </Typography>
            <Typography variant="body2" sx={{color: 'white'}}>
              Phone: +234 7040 085 037
            </Typography>
            <Typography variant="body2" sx={{color: 'white'}}>
              Email: info@ayomidedaniel.com
            </Typography>
          </Grid>

          {/* Follow Us */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom fontWeight="bold">
              Follow Us
            </Typography>
            <Box display="flex" gap={2}>
              {/* Social Media icons can be added here */}
              {/* Example: */}
              {/* <Link href="https://facebook.com" color="inherit"><FacebookIcon /></Link> */}
            </Box>
          </Grid>
        </Grid>

        {/* Divider */}
        <Divider sx={{ bgcolor: 'grey.700', my: 4 }} />

        {/* Copyright Section */}
        <Box textAlign="center">
          <Typography variant="body2" sx={{color: 'white'}}>
            &copy; {new Date().getFullYear()} TheAyomideDaniel. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
