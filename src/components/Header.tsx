'use client';

import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, useTheme, Container, Box } from '@mui/material';
import { Brightness4, Brightness7, Menu as MenuIcon } from '@mui/icons-material';
import { useThemeToggle } from './ThemeRegistry';
import { styled } from '@mui/material/styles';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  boxShadow: 'none',
  borderBottom: `1px solid ${theme.palette.mode === 'dark' ? '#333' : '#eaeaea'}`,
  transition: 'background-color 0.3s ease-in-out',
}));

const MenuButton = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(2),
  '&:hover': {
    backgroundColor: 'transparent',
    color: theme.palette.primary.main,
  },
}));

const Header = () => {
  const theme = useTheme();
  const { toggleTheme } = useThemeToggle();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 960);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <StyledAppBar
      position="fixed"
      color="inherit"
      sx={{
        backgroundColor: isScrolled
          ? theme.palette.mode === 'dark'
            ? 'rgba(18, 18, 18, 0.95)'
            : 'rgba(255, 255, 255, 0.95)'
          : 'transparent',
        backdropFilter: isScrolled ? 'blur(8px)' : 'none',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between', height: isScrolled ? 70 : 100 }}>
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontWeight: 700,
              color: theme.palette.mode === 'dark' ? '#fff' : '#000',
              fontSize: isScrolled ? '1.5rem' : '1.75rem',
            }}
          >
            Portfolio
          </Typography>

          {isMobile ? (
            <IconButton color="inherit" edge="start">
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <MenuButton href="#about" color="inherit">About</MenuButton>
              <MenuButton href="#skills" color="inherit">Skills</MenuButton>
              <MenuButton href="#projects" color="inherit">Projects</MenuButton>
              <MenuButton href="#experience" color="inherit">Experience</MenuButton>
              <MenuButton href="#certifications" color="inherit">Education</MenuButton>
              <MenuButton href="#contact" color="inherit">Contact</MenuButton>
              <IconButton
                onClick={toggleTheme}
                color="inherit"
                sx={{ ml: 2 }}
              >
                {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
};

export default Header;
