'use client';

import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Launch, School } from '@mui/icons-material';

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  background: theme.palette.mode === 'dark' ? '#121212' : '#FFFFFF',
}));

const CertificationCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  background: theme.palette.mode === 'dark' ? '#1A1A1A' : '#FFFFFF',
  border: `1px solid ${theme.palette.mode === 'dark' ? '#333' : '#eaeaea'}`,
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
}));

const certifications = [
  {
    title: 'Bachelor in Computer Science and Engineering',
    organization: 'Raja Balwant Singh Engineering Technical Campus Bichpuri, Agra',
    date: 'Sept 2023 - Sept 2027',
    grade: '7.3',
    image: '/education.jpg', // Add an image for your university
    link: '#',
  },
  // Add more certifications here
];

const Certifications = () => {
  return (
    <SectionContainer id="certifications">
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h2"
          align="center"
          gutterBottom
          sx={{ mb: 6, fontWeight: 700 }}
        >
          Education & Certifications
        </Typography>

        <Grid container spacing={4}>
          {certifications.map((cert, index) => (
            <Grid item xs={12} md={6} key={index}>
              <CertificationCard elevation={0}>
                <CardContent sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                  <School 
                    color="primary" 
                    sx={{ 
                      fontSize: 40,
                      mt: 1
                    }} 
                  />
                  <Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
                        {cert.title}
                      </Typography>
                      {cert.link && (
                        <IconButton 
                          href={cert.link}
                          target="_blank"
                          size="small"
                          sx={{ ml: 1 }}
                        >
                          <Launch />
                        </IconButton>
                      )}
                    </Box>
                    <Typography color="primary" gutterBottom>
                      {cert.organization}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      {cert.date}
                    </Typography>
                    {cert.grade && (
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          mt: 1,
                          backgroundColor: 'primary.main',
                          color: 'white',
                          px: 1,
                          py: 0.5,
                          display: 'inline-block',
                          borderRadius: 1
                        }}
                      >
                        CGPA: {cert.grade}
                      </Typography>
                    )}
                  </Box>
                </CardContent>
              </CertificationCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </SectionContainer>
  );
};

export default Certifications;
