'use client';

import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Code, Storage, Build, GitHub as GitHubIcon } from '@mui/icons-material';

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  background: theme.palette.mode === 'dark' ? '#1A1A1A' : '#F5F5F5',
}));

const SkillCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  height: '100%',
  background: theme.palette.mode === 'dark' ? '#222' : '#fff',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
}));

const skills = {
  frontend: {
    title: 'Frontend',
    icon: <Code />,
    skills: ['React', 'Next.js', 'HTML', 'CSS', 'Tailwind CSS', 'Material-UI'],
  },
  backend: {
    title: 'Backend & Authentication',
    icon: <Storage />,
    skills: ['Node.js', 'Express.js', 'REST APIs', 'Redux Toolkit', 'JSON Web Tokens (JWT)', 'Auth.js', 'Bcrypt', 'Mongoose'],
  },
  languages: {
    title: 'Programming Languages',
    icon: <Build />,
    skills: ['TypeScript', 'JavaScript', 'C', 'C++', 'Python'],
  },
  tools: {
    title: 'Version Control & Tools',
    icon: <GitHubIcon />,
    skills: ['Git', 'GitHub', 'VS Code', 'Figma', 'Postman', 'MongoDB'],
  },
};

const Skills = () => {
  return (
    <SectionContainer id="skills">
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h2"
          align="center"
          gutterBottom
          sx={{ mb: 6, fontWeight: 700 }}
        >
          Skills & Technologies
        </Typography>

        <Grid container spacing={4}>
          {Object.entries(skills).map(([key, category]) => (
            <Grid item xs={12} sm={6} md={3} key={key}>
              <SkillCard elevation={0}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Box sx={{ color: 'primary.main', mr: 1 }}>{category.icon}</Box>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {category.title}
                  </Typography>
                </Box>
                <Box component="ul" sx={{ pl: 2 }}>
                  {category.skills.map((skill) => (
                    <Typography
                      component="li"
                      key={skill}
                      sx={{
                        mb: 1,
                        '&::marker': {
                          color: 'primary.main',
                        },
                      }}
                    >
                      {skill}
                    </Typography>
                  ))}
                </Box>
              </SkillCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </SectionContainer>
  );
};

export default Skills;
