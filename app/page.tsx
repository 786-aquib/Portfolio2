"use client";

import { useState, useEffect } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Container, 
  Box, 
  IconButton,
  LinearProgress,
  Card,
  CardContent,
  Avatar,
  Grid,
  useTheme
} from '@mui/material';
import { Github, Linkedin, Facebook, Instagram, ExternalLink } from 'lucide-react';

export default function Home() {
  const theme = useTheme();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const leadershipImages = [
    'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2940&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % leadershipImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box>
      {/* Navigation */}
      <AppBar 
        position="fixed" 
        sx={{ 
          bgcolor: 'rgba(0, 0, 0, 0.9)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}
      >
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Button 
              sx={{ 
                color: 'white',
                mx: 1,
                '&:hover': {
                  bgcolor: 'rgba(255,255,255,0.1)'
                }
              }}
            >
              Projects
            </Button>
            <Button 
              sx={{ 
                color: 'white',
                mx: 1,
                '&:hover': {
                  bgcolor: 'rgba(255,255,255,0.1)'
                }
              }}
            >
              Resume
            </Button>
            <Button 
              sx={{ 
                color: 'white',
                mx: 1,
                '&:hover': {
                  bgcolor: 'rgba(255,255,255,0.1)'
                }
              }}
            >
              About
            </Button>
            <Button 
              sx={{ 
                color: 'white',
                mx: 1,
                '&:hover': {
                  bgcolor: 'rgba(255,255,255,0.1)'
                }
              }}
            >
              Skills
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Toolbar />

      {/* Hero Section with Dark Background */}
      <Box 
        sx={{ 
          background: 'linear-gradient(45deg, #1a1a1a 0%, #2d2d2d 100%)',
          color: 'white',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          transition: 'background 0.5s ease-in-out'
        }}
      >
        <Container>
          <Typography 
            variant="h2" 
            component="h2" 
            gutterBottom
            sx={{ 
              fontWeight: 'bold',
              mb: 4,
              background: 'linear-gradient(45deg, #fff 30%, #f0f0f0 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Aquib Mahmood
          </Typography>
          <Box sx={{ mb: 4 }}>
            <IconButton 
              href="https://github.com/786-aquib" 
              target="_blank"
              sx={{ color: 'white', mx: 1 }}
            >
              <Github />
            </IconButton>
            <IconButton 
              href="https://facebook.com" 
              target="_blank"
              sx={{ color: 'white', mx: 1 }}
            >
              <Facebook />
            </IconButton>
            <IconButton 
              href="https://instagram.com/aquibYt.08" 
              target="_blank"
              sx={{ color: 'white', mx: 1 }}
            >
              <Instagram />
            </IconButton>
            <IconButton 
              href="https://linkedin.com/aquibmahmood" 
              target="_blank"
              sx={{ color: 'white', mx: 1 }}
            >
              <Linkedin />
            </IconButton>
          </Box>
          <Button 
            variant="outlined" 
            sx={{ 
              color: 'white',
              borderColor: 'white',
              '&:hover': {
                borderColor: 'white',
                bgcolor: 'rgba(255,255,255,0.1)'
              }
            }}
          >
            More About Me
          </Button>
        </Container>
      </Box>

      {/* About Section */}
      <Box sx={{ py: 8, bgcolor: '#f5f5f5' }}>
        <Container>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
              <Avatar
                src="Pic"
                sx={{ 
                  width: 300, 
                  height: 300, 
                  margin: 'auto',
                  border: '4px solid white',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                About Me
              </Typography>
              <Typography 
                paragraph
                sx={{ 
                  color: 'text.secondary',
                  mb: 4,
                  fontSize: '1.1rem',
                  lineHeight: 1.8
                }}
              >
                I am a passionate software developer with expertise in building modern web applications.
                 and I've been creating innovative solutions ever since.
              </Typography>
              <Button 
                variant="contained" 
                sx={{ 
                  bgcolor: '#1a1a1a',
                  '&:hover': {
                    bgcolor: '#2d2d2d'
                  }
                }}
              >
                Download Resume
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Experience Section */}
      <Box sx={{ py: 8 }}>
        <Container>
          <Typography 
            variant="h4" 
            gutterBottom 
            textAlign="center"
            sx={{ mb: 6, fontWeight: 'bold' }}
          >
            Experience
          </Typography>
          <Grid container spacing={4}>
            {[1, 2, 3].map((item) => (
              <Grid item xs={12} md={4} key={item}>
                <Box 
                  sx={{ 
                    textAlign: 'center',
                    p: 3,
                    borderRadius: 2,
                    bgcolor: 'white',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateY(-5px)'
                    }
                  }}
                >
                  <Avatar 
                    sx={{ 
                      width: 80, 
                      height: 80, 
                      margin: 'auto', 
                      mb: 2,
                      bgcolor: '#1a1a1a'
                    }}
                  >
                    Company
                  </Avatar>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Front End Developer</Typography>
                  <Typography color="text.secondary">2024 - Present</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Projects Section */}
      <Box sx={{ py: 8, bgcolor: '#f5f5f5' }}>
        <Container>
          <Typography 
            variant="h4" 
            gutterBottom 
            textAlign="center"
            sx={{ mb: 6, fontWeight: 'bold' }}
          >
            Recent Projects
          </Typography>
          <Grid container spacing={4}>
            {[1, 2].map((project) => (
              <Grid item xs={12} md={6} key={project}>
                <Card 
                  sx={{ 
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateY(-5px)'
                    }
                  }}
                >
                  <CardContent>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                      Project {project}
                    </Typography>
                    <Box sx={{ mb: 2 }}>
                      <Button 
                        startIcon={<Github />}
                        sx={{ mr: 2 }}
                      >
                        Clone Project
                      </Button>
                      <Button startIcon={<ExternalLink />}>
                        Repository
                      </Button>
                    </Box>
                    <Typography color="text.secondary" sx={{ mb: 1 }}>
                      React • TypeScript • Node.js
                    </Typography>
                    <Typography variant="caption" display="block" color="text.secondary">
                      Last updated: March 2024
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Leadership Section */}
      <Box sx={{ py: 8 }}>
        <Container>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                Leadership
              </Typography>
              <Typography 
                paragraph
                sx={{ 
                  color: 'text.secondary',
                  fontSize: '1.1rem',
                  lineHeight: 1.8
                }}
              >
                Leading teams to success through effective communication, mentorship, and strategic planning.
                Experienced in managing cross-functional teams and delivering complex projects on time.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src={leadershipImages[currentImageIndex]}
                alt="Leadership"
                sx={{
                  width: '100%',
                  height: 400,
                  objectFit: 'cover',
                  borderRadius: 2,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  transition: 'opacity 0.5s ease-in-out'
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Skills Section */}
      <Box sx={{ py: 8, bgcolor: '#f5f5f5' }}>
        <Container>
          <Typography 
            variant="h4" 
            gutterBottom 
            textAlign="center"
            sx={{ mb: 6, fontWeight: 'bold' }}
          >
            Skills
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                Technical Skills
              </Typography>
              {['React', 'Node.js', 'TypeScript', 'Python'].map((skill) => (
                <Box key={skill} sx={{ mb: 3 }}>
                  <Typography 
                    variant="subtitle1" 
                    sx={{ 
                      mb: 1,
                      fontWeight: 'medium'
                    }}
                  >
                    {skill}
                  </Typography>
                  <LinearProgress 
                    variant="determinate" 
                    value={Math.random() * 40 + 60}
                    sx={{
                      height: 8,
                      borderRadius: 4,
                      bgcolor: 'rgba(0,0,0,0.1)',
                      '& .MuiLinearProgress-bar': {
                        bgcolor: '#1a1a1a'
                      }
                    }}
                  />
                </Box>
              ))}
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                Soft Skills
              </Typography>
              {['Leadership', 'Communication', 'Problem Solving', 'Team Work'].map((skill) => (
                <Box key={skill} sx={{ mb: 3 }}>
                  <Typography 
                    variant="subtitle1" 
                    sx={{ 
                      mb: 1,
                      fontWeight: 'medium'
                    }}
                  >
                    {skill}
                  </Typography>
                  <LinearProgress 
                    variant="determinate" 
                    value={Math.random() * 40 + 60}
                    sx={{
                      height: 8,
                      borderRadius: 4,
                      bgcolor: 'rgba(0,0,0,0.1)',
                      '& .MuiLinearProgress-bar': {
                        bgcolor: '#1a1a1a'
                      }
                    }}
                  />
                </Box>
              ))}
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box 
        sx={{ 
          py: 8, 
          textAlign: 'center',
          background: 'linear-gradient(45deg, #1a1a1a 0%, #2d2d2d 100%)',
          color: 'white'
        }}
      >
        <Container>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
            Get in Touch
          </Typography>
          <Typography 
            paragraph
            sx={{ 
              mb: 4,
              fontSize: '1.1rem'
            }}
          >
            I'm always open to new opportunities and collaborations.
          </Typography>
          <Button 
            variant="outlined" 
            size="large"
            sx={{ 
              color: 'white',
              borderColor: 'white',
              '&:hover': {
                borderColor: 'white',
                bgcolor: 'rgba(255,255,255,0.1)'
              }
            }}
          >
            Contact Me
          </Button>
        </Container>
      </Box>
    </Box>
  );
}
