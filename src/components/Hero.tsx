'use client';

import React from 'react';
import { Box, Container, Typography, Grid, Button, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { GitHub, LinkedIn, Email, LocationOn } from '@mui/icons-material';

const HeroContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  background: theme.palette.mode === 'dark' ? '#121212' : '#FFFFFF',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `linear-gradient(45deg, ${theme.palette.primary.main}20, transparent)`,
    zIndex: 1,
  },
}));

const ContentContainer = styled(Container)(({ theme }) => ({
  position: 'relative',
  zIndex: 2,
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(8),
}));

const AnimatedTypography = styled(Typography)(({ theme }) => ({
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-10px',
    left: 0,
    width: '60px',
    height: '4px',
    background: theme.palette.primary.main,
  },
}));

const ContactInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  marginBottom: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

const HeroImage = styled('div')({
  position: 'absolute',
  right: 0,
  top: 0,
  width: '50%',
  height: '100%',
  backgroundImage: 'url("/profile.jpg")', // Add your professional image here
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  '@media (max-width: 960px)': {
    display: 'none',
  },
});

const Hero = () => {
  return (
    <HeroContainer>
      <HeroImage />
      <ContentContainer maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box sx={{ mb: 6 }}>
              <AnimatedTypography variant="h1" gutterBottom sx={{ fontWeight: 700 }}>
                Akshay Shahi
              </AnimatedTypography>
              <Typography variant="h4" color="primary" gutterBottom sx={{ fontWeight: 500 }}>
                Full Stack Web Developer
              </Typography>
              
              <Box sx={{ my: 3 }}>
                <ContactInfo>
                  <Email fontSize="small" />
                  <Typography>shahiakshay900@gmail.com</Typography>
                </ContactInfo>
                <ContactInfo>
                  <LocationOn fontSize="small" />
                  <Typography>Agra, India</Typography>
                </ContactInfo>
              </Box>

              <Typography variant="body1" sx={{ mb: 4, fontSize: '1.1rem', maxWidth: 500 }}>
                Passionate Full Stack Developer specializing in MERN stack development. 
                Experienced in building responsive web applications with modern technologies 
                and best practices.
              </Typography>

              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  href="#contact"
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                  }}
                >
                  Contact Me
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  href="#projects"
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                  }}
                >
                  View Projects
                </Button>
              </Box>

              <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
                <IconButton 
                  href="https://github.com/Akshayshahi" 
                  target="_blank"
                  color="primary"
                  sx={{ border: 1, borderColor: 'primary.main' }}
                >
                  <GitHub />
                </IconButton>
                <IconButton 
                  href="https://linkedin.com/in/akshay-shahi-581560247" 
                  target="_blank"
                  color="primary"
                  sx={{ border: 1, borderColor: 'primary.main' }}
                >
                  <LinkedIn />
                </IconButton>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', gap: 4, mt: 8 }}>
              <Box>
                <Typography variant="h4" color="primary" sx={{ fontWeight: 700 }}>
                  2+
                </Typography>
                <Typography variant="body1">Years Experience</Typography>
              </Box>
              <Box>
                <Typography variant="h4" color="primary" sx={{ fontWeight: 700 }}>
                  5+
                </Typography>
                <Typography variant="body1">Projects Completed</Typography>
              </Box>
              <Box>
                <Typography variant="h4" color="primary" sx={{ fontWeight: 700 }}>
                  MERN
                </Typography>
                <Typography variant="body1">Stack Expert</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ContentContainer>
    </HeroContainer>
  );
};

export default Hero;
