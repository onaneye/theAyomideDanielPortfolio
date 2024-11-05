// File: ProductOverview.js
import React from 'react';
import { Container, Box, Typography, Grid } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work'; // Icon for Experience
import PeopleIcon from '@mui/icons-material/People'; // Icon for Satisfied Clients
import AssignmentIcon from '@mui/icons-material/Assignment'; // Icon for Jobs Done

// Reusable StatItem component
const StatItem = ({ icon: Icon, count, label }) => (
  <Grid item xs={12} sm={4}>
    <Icon sx={{ fontSize: 40, mb: 1, color: '#3bbbf2' }} /> {/* Set custom color here */}
    <Typography variant="h4" sx={{ fontWeight: 700 }}>{count}</Typography>
    <Typography variant="subtitle1">{label}</Typography>
  </Grid>
);

const Stat = () => {
  return (
    <div className='mt-24'>
      <Box 
        sx={{  
          color: '#ffffff', 
          padding: '40px 20px', 
          borderRadius: '8px',
          textAlign: 'center',
          backgroundColor: '#15171c', // Optional: Add a background color for contrast
        }}
      >
        <Container maxWidth="md">
          {/* Statistics */}
          <Grid container spacing={3} justifyContent="center">
            <StatItem icon={WorkIcon} count="6 Years" label="EXPERIENCE" />
            <StatItem icon={PeopleIcon} count="500+" label="SATISFIED CLIENTS" />
            <StatItem icon={AssignmentIcon} count="1000+" label="JOBS DONE" />
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Stat;
