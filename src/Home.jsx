import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LaunchIcon from '@mui/icons-material/Launch';
import EmailIcon from '@mui/icons-material/Email';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { keyframes } from "@mui/system";
import Navbar from "./Navbar";

// Animation keyframes
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const gradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

function Home() {
    return(
        <Box sx={{
            width:'100%', 
            minHeight:'100vh', 
            position: 'relative',
            scrollBehavior: 'smooth'
        }}>
            <Navbar />
            {/* Hero Section - Home colors */}
            <Box 
                className="home" 
                sx={{
                    height:'100vh', 
                    width:'100%', 
                    display:'flex', 
                    justifyContent:'center', 
                    alignItems:'center', 
                    flexDirection:'column',
                    background: 'linear-gradient(135deg, #90f188 0%, #0f1d07 100%)',
                    color: '#fbfbf8',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'rgba(15, 29, 7, 0.3)',
                        zIndex: 1
                    },
                    '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '10px',
                        background: 'linear-gradient(180deg, transparent 50%, #e0edeb 100%)',
                        zIndex: 2
                    }
                }}
            >
                <Container maxWidth="lg" sx={{position: 'relative', zIndex: 2, textAlign: 'center'}}>
                    <Box sx={{
                        animation: `${fadeInUp} 1s ease-out`,
                        animationDelay: '0.2s',
                        animationFillMode: 'both'
                    }}>
                        <Typography 
                            variant="h1" 
                            sx={{
                                fontSize: {xs: '2.5rem', md: '4rem', lg: '5rem'},
                                fontWeight: 800,
                                mb: 2,
                                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                                animation: `${float} 3s ease-in-out infinite`,
                                fontFamily: '"Inter", sans-serif',
                                letterSpacing: '-0.02em'
                            }}
                        >
                            Hi, I'm Yadveer
                        </Typography>
                        <Typography 
                            variant="h3" 
                            sx={{
                                fontSize: {xs: '1.2rem', md: '1.8rem', lg: '2.2rem'},
                                fontWeight: 400,
                                mb: 4,
                                opacity: 0.9,
                                animation: `${fadeInUp} 1s ease-out`,
                                animationDelay: '0.5s',
                                animationFillMode: 'both',
                                fontFamily: '"Poppins", sans-serif',
                                letterSpacing: '0.01em'
                            }}
                        >
                            Full Stack Developer & Problem Solver
                        </Typography>
                        <Button
                            variant="contained"
                            size="large"
                            sx={{
                                background: 'rgba(255,255,255,0.2)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255,255,255,0.3)',
                                color: 'white',
                                px: 4,
                                py: 2,
                                fontSize: '1.1rem',
                                fontWeight: 600,
                                borderRadius: '50px',
                                textTransform: 'none',
                                animation: `${fadeInUp} 1s ease-out`,
                                animationDelay: '0.8s',
                                animationFillMode: 'both',
                                '&:hover': {
                                    background: 'rgba(255,255,255,0.3)',
                                    transform: 'translateY(-2px)',
                                    boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
                                },
                                transition: 'all 0.3s ease'
                            }}
                            href="#projects"
                        >
                            View My Work
                        </Button>
                    </Box>
                </Container>
            </Box>

            {/* About Section - About colors */}
            <Box 
                className="about"
                sx={{
                    py: 10,
                    background: 'linear-gradient(135deg, #82d7ff 0%, #070035 100%)',
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    position: 'relative',
                    color: '#e0edeb',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '100px',
                        background: 'linear-gradient(0deg, transparent 50%, #e0edeb 100%)',
                        zIndex: 1
                    },
                    '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '10px',
                        background: 'linear-gradient(180deg, transparent 50%,  #fff 100%)',
                        zIndex: 1
                    }
                }}
            >
                <Container maxWidth="lg" sx={{position: 'relative', zIndex: 2}}>
                    <Grid container spacing={6} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <Box sx={{
                                width: {xs: 250, md: 350},
                                height: {xs: 250, md: 350},
                                borderRadius: '50%',
                                background: 'linear-gradient(45deg, #82d7ff, #070035)',
                                mx: 'auto',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0 20px 40px rgba(7, 0, 53, 0.3)',
                                animation: `${float} 4s ease-in-out infinite`,
                                overflow: 'hidden',
                                position: 'relative'
                            }}>
                                <Box
                                    component="img"
                                    src="/Profile.jpeg"
                                    alt="Yadveer Singh Pawar"
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        borderRadius: '50%'
                                    }}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography 
                                variant="h2" 
                                sx={{
                                    fontWeight: 700,
                                    mb: 3,
                                    background: 'linear-gradient(45deg, #82d7ff, #e0edeb)',
                                    backgroundClip: 'text',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    fontSize: {xs: '2.5rem', md: '3.5rem'},
                                    fontFamily: '"Inter", sans-serif',
                                    letterSpacing: '-0.01em'
                                }}
                            >
                                About Me
                            </Typography>
                            <Typography 
                                variant="h6" 
                                sx={{
                                    color: '#e0edeb',
                                    lineHeight: 1.8,
                                    fontSize: {xs: '1rem', md: '1.2rem'},
                                    mb: 4,
                                    fontFamily: '"Poppins", sans-serif',
                                    fontWeight: 400,
                                    letterSpacing: '0.01em',
                                    opacity: 0.9
                                }}
                            >
                                Hi, I'm Yadveer Singh Pawar, a passionate Computer Engineering student and aspiring full-stack developer. I love building creative, efficient, and user-friendly web applications. Over the past few months, I've honed my skills in the MERN stack, Java, and problem-solving.
                            </Typography>
                            <Box sx={{display: 'flex', gap: 2, flexWrap: 'wrap'}}>
                                {['React', 'Node.js', 'MongoDB', 'Express', 'Java', 'JavaScript'].map((skill, index) => (
                                    <Box
                                        key={skill}
                                        sx={{
                                            px: 3,
                                            py: 1,
                                            background: 'linear-gradient(45deg, #82d7ff, #523ce0ff)',
                                            color: '#e0edeb',
                                            borderRadius: '25px',
                                            fontSize: '0.9rem',
                                            fontWeight: 600,
                                            animation: `${fadeInUp} 0.6s ease-out`,
                                            animationDelay: `${0.2 * index}s`,
                                            animationFillMode: 'both',
                                            '&:hover': {
                                                transform: 'translateY(-2px)',
                                                boxShadow: '0 5px 15px rgba(7, 0, 53, 0.3)'
                                            },
                                            transition: 'all 0.3s ease'
                                        }}
                                    >
                                        {skill}
                                    </Box>
                                ))}
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Projects Section - Portfolio colors */}
            <Box 
                id="projects"
                className="projects"
                sx={{
                    py: 10,
                    background: 'linear-gradient(135deg, #90f188 0%, #0f1d07 100%)',
                    minHeight: '100vh',
                    color: '#fbfbf8',
                    position: 'relative',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '50px',
                        background: 'linear-gradient(180deg, #fff 0%, transparent 100%)',
                        zIndex: 1
                    },
                    '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '10px',
                        background: 'linear-gradient(180deg, transparent 50%, #fff 100%)',
                        zIndex: 1
                    }
                }}
            >
                <Container maxWidth="lg" sx={{position: 'relative', zIndex: 2}}>
                    <Typography 
                        variant="h2" 
                        sx={{
                            textAlign: 'center',
                            fontWeight: 700,
                            mb: 8,
                            fontSize: {xs: '2.5rem', md: '4rem'},
                            textShadow: '2px 2px 4px rgba(15, 29, 7, 0.5)',
                            fontFamily: '"Inter", sans-serif',
                            letterSpacing: '-0.01em'
                        }}
                    >
                        Featured Projects
                    </Typography>
                    <Grid container spacing={4}>
                        {[{
                            title: "Wanderlust – Airbnb Clone",
                            description: "A full-stack web application built with the MERN stack that allows users to create, browse, and manage vacation rental listings. Features include authentication, image uploads with Cloudinary, reviews, and an interactive map.",
                            github: "https://github.com/Yadveer1/Wanderlust",
                            tech: ["React", "Node.js", "MongoDB", "Express", "Cloudinary"]
                        },
                        {
                            title: "StockVerse",
                            description: "A real-time stock market analysis platform that provides live stock data, interactive charts, and personalized watchlists. Built with the MERN stack, it features secure user authentication, RESTful APIs for market data.",
                            github: "https://github.com/Yadveer1/Stockverse",
                            tech: ["React", "Node.js", "API Integration", "Charts", "Authentication"]
                        }].map((project, index) => (
                            <Grid item xs={12} md={6} key={index}>
                                <Card 
                                    sx={{
                                        height: '100%',
                                        background: 'rgba(15, 29, 7, 0.3)',
                                        backdropFilter: 'blur(10px)',
                                        border: '1px solid rgba(144, 241, 136, 0.3)',
                                        borderRadius: '20px',
                                        color: '#fbfbf8',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-10px)',
                                            boxShadow: '0 20px 40px rgba(15, 29, 7, 0.4)',
                                            background: 'rgba(15, 29, 7, 0.4)',
                                            borderColor: 'rgba(144, 241, 136, 0.5)'
                                        }
                                    }}
                                >
                                    <CardContent sx={{p: 4, height: '100%', display: 'flex', flexDirection: 'column'}}>
                                        <Typography variant="h4" sx={{fontWeight: 700, mb: 3}}>
                                            {project.title}
                                        </Typography>
                                        <Typography variant="body1" sx={{mb: 3, lineHeight: 1.6, flex: 1, opacity: 0.9}}>
                                            {project.description}
                                        </Typography>
                                        <Box sx={{mb: 3}}>
                                            {project.tech.map((tech, techIndex) => (
                                                <Box
                                                    key={tech}
                                                    component="span"
                                                    sx={{
                                                        display: 'inline-block',
                                                        px: 2,
                                                        py: 0.5,
                                                        mr: 1,
                                                        mb: 1,
                                                        background: 'rgba(144, 241, 136, 0.2)',
                                                        borderRadius: '15px',
                                                        fontSize: '0.8rem',
                                                        fontWeight: 500,
                                                        border: '1px solid rgba(144, 241, 136, 0.3)'
                                                    }}
                                                >
                                                    {tech}
                                                </Box>
                                            ))}
                                        </Box>
                                        <Link 
                                            href={project.github}
                                            target="_blank" 
                                            rel="noopener"
                                            underline="none"
                                            sx={{
                                                color: '#fbfbf8',
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                transition: 'all 0.3s ease',
                                                '&:hover': {
                                                    color: '#90f188',
                                                    transform: 'translateX(5px)'
                                                }
                                            }}
                                        >
                                            <GitHubIcon sx={{fontSize: 30, mr: 1}} />
                                            <LaunchIcon sx={{fontSize: 20}} />
                                            <Typography sx={{ml: 1, fontWeight: 600}}>View Project</Typography>
                                        </Link>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Contact Section - Contact colors */}
            <Box
                className="contact"
                sx={{
                    py: 10,
                    background: 'linear-gradient(135deg, #b488f1 0%, #12032a 100%)',
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    color: '#eae8ee',
                    position: 'relative',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '50px',
                        background: 'linear-gradient(180deg, #fff 0%, transparent 100%)',
                        zIndex: 1
                    }
                }}
            >
                <Container maxWidth="md" sx={{textAlign: 'center', position: 'relative', zIndex: 2}}>
                    <Typography 
                        variant="h2" 
                        sx={{
                            fontWeight: 700,
                            mb: 4,
                            fontSize: {xs: '2.5rem', md: '4rem'},
                            textShadow: '2px 2px 4px rgba(18, 3, 42, 0.5)',
                            fontFamily: '"Inter", sans-serif',
                            letterSpacing: '-0.01em'
                        }}
                    >
                        Let's Connect
                    </Typography>
                    <Typography 
                        variant="h5" 
                        sx={{
                            mb: 6,
                            opacity: 0.9,
                            fontSize: {xs: '1.2rem', md: '1.5rem'},
                            lineHeight: 1.6,
                            fontFamily: '"Poppins", sans-serif',
                            fontWeight: 400,
                            letterSpacing: '0.01em'
                        }}
                    >
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                    </Typography>
                    
                    <Card sx={{
                        background: 'rgba(18, 3, 42, 0.3)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(180, 136, 241, 0.3)',
                        borderRadius: '20px',
                        p: 4,
                        mb: 6,
                        color: '#eae8ee'
                    }}>
                        <Typography variant="h6" sx={{mb: 2, fontWeight: 600}}>
                            Get in Touch
                        </Typography>
                        <Typography variant="body1" sx={{fontSize: '1.1rem'}}>
                            yadveersinghpawar12345@gmail.com
                        </Typography>
                    </Card>

                    <Box sx={{display: 'flex', justifyContent: 'center', gap: 4}}>
                        {[
                        {
                            icon: <GitHubIcon sx={{fontSize: 40}} />,
                            href: "https://github.com/Yadveer1",
                            label: "GitHub"
                        },
                        {
                            icon: <LinkedInIcon sx={{fontSize: 40}} />,
                            href: "https://www.linkedin.com/in/yadveersingh/",
                            label: "LinkedIn"
                        }
                        ].map((social, index) => (
                            <Link 
                                key={index}
                                href={social.href}
                                target={social.href.includes('mailto') ? '_self' : '_blank'}
                                rel="noopener"
                                underline="none"
                                sx={{
                                    color: '#eae8ee',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    p: 3,
                                    borderRadius: '15px',
                                    background: 'rgba(18, 3, 42, 0.3)',
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid rgba(180, 136, 241, 0.3)',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        background: 'rgba(18, 3, 42, 0.4)',
                                        transform: 'translateY(-5px)',
                                        boxShadow: '0 10px 30px rgba(18, 3, 42, 0.4)',
                                        borderColor: 'rgba(180, 136, 241, 0.5)',
                                        color: '#b488f1'
                                    }
                                }}
                            >
                                {social.icon}
                                <Typography sx={{mt: 1, fontWeight: 600, fontSize: '0.9rem'}}>
                                    {social.label}
                                </Typography>
                            </Link>
                        ))}
                    </Box>
                </Container>
            </Box>
        </Box>
    )
}
export default Home;