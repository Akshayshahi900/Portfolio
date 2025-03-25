'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Certifications from '@/components/Certifications';
import { Box } from '@mui/material';

export default function Home() {
  return (
    <Box 
      component="main"
      sx={{ 
        minHeight: '100vh',
        bgcolor: 'background.default',
        color: 'text.primary',
      }}
    >
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
    </Box>
  );
}
