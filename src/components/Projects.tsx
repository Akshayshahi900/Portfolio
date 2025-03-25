'use client';

import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardActions, Button, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import { GitHub, Launch } from '@mui/icons-material';

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  background: theme.palette.mode === 'dark' ? '#121212' : '#FFFFFF',
}));

const ProjectCard = styled(Card)(({ theme }) => ({
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

const projects = [
  {
    title: 'Crowd Funding Application',
    description: 'A Crowdfunding app based on MERN stack. It uses NextJS for frontend and ExpressJS as backend. It includes dashboard, login page and a landing page, authentication using Auth.js and payment gateway using Razor Pay.',
    technologies: ['Next.js', 'Express.js', 'MongoDB', 'Auth.js', 'Razor Pay'],
    githubLink: 'https://github.com/yourusername/crowdfunding-app',
    liveLink: '#',
  },
  {
    title: 'Password Manager',
    description: 'A React app using ExpressJS in Backend and MongoDB as database. This app provides CRUD operations on database and using bcrypt for password hashing during storage.',
    technologies: ['React', 'Express.js', 'MongoDB', 'Bcrypt'],
    githubLink: 'https://github.com/yourusername/password-manager',
    liveLink: '#',
  },
];

const Projects = () => {
  return (
    <SectionContainer id="projects">
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h2"
          align="center"
          gutterBottom
          sx={{ mb: 6, fontWeight: 700 }}
        >
          Featured Projects
        </Typography>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} key={index}>
              <ProjectCard elevation={0}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
                    {project.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" paragraph>
                    {project.description}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                    {project.technologies.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        sx={{
                          backgroundColor: 'primary.main',
                          color: 'white',
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
                <CardActions sx={{ p: 2 }}>
                  <Button
                    startIcon={<GitHub />}
                    href={project.githubLink}
                    target="_blank"
                    sx={{ mr: 1 }}
                  >
                    Code
                  </Button>
                  <Button
                    startIcon={<Launch />}
                    href={project.liveLink}
                    target="_blank"
                  >
                    Live Demo
                  </Button>
                </CardActions>
              </ProjectCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </SectionContainer>
  );
};

export default Projects;
