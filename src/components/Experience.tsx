'use client';

import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { styled } from '@mui/material/styles';
import { Work } from '@mui/icons-material';

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  background: theme.palette.mode === 'dark' ? '#1A1A1A' : '#F5F5F5',
}));

const experiences = [
  {
    title: 'Web Developer Intern',
    company: 'GAO Tek Inc',
    duration: 'Oct 2024 - Jan 2025',
    description: 'Working as a Web Developer Intern',
  },
  {
    title: 'Web Developer Intern',
    company: 'CodKo',
    duration: 'July 2024 - July 2024',
    description: 'Worked on various projects such as tribute page, weather app, to-do list using React, HTML, CSS and JS.',
  },
];

const StyledTimelineContent = styled(TimelineContent)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: theme.palette.mode === 'dark' ? '#222' : '#fff',
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[1],
  marginBottom: theme.spacing(3),
}));

const Experience = () => {
  return (
    <SectionContainer id="experience">
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h2"
          align="center"
          gutterBottom
          sx={{ mb: 6, fontWeight: 700 }}
        >
          Work Experience
        </Typography>

        <Timeline position="alternate">
          {experiences.map((exp, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot color="primary">
                  <Work />
                </TimelineDot>
                {index !== experiences.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <StyledTimelineContent>
                <Typography variant="h6" component="h3" sx={{ fontWeight: 600 }}>
                  {exp.title}
                </Typography>
                <Typography color="primary" sx={{ mb: 1 }}>
                  {exp.company}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  {exp.duration}
                </Typography>
                <Typography variant="body1">
                  {exp.description}
                </Typography>
              </StyledTimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </SectionContainer>
  );
};

export default Experience;
