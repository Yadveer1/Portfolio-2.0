import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from '@mui/material/Link';
import LaunchIcon from '@mui/icons-material/Launch';

function Projects() {
    return (
        <Box
            sx={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                fontFamily: '"Pacifico", cursive',
            }}
        >
            <Typography variant="h3" gutterBottom sx={{mb: 7, fontSize: 60, fontFamily: '"Pacifico", cursive' }}>
                Projects
            </Typography>
            <Typography variant="h5" gutterBottom sx={{fontSize: 28, fontFamily: '"Pacifico", cursive' }}>
                Wanderlust – Airbnb Clone
            </Typography>
            <Typography variant="body1" component="p" sx={{fontSize: 20,mb: 3, fontFamily: '"Pacifico", cursive' }}>
                A full-stack web application built with the MERN stack that allows users to create, browse, and manage vacation rental listings. Features include authentication, image uploads with Cloudinary, reviews, and an interactive map.
            </Typography>
            <Link 
                href="https://github.com/Yadveer1/Wanderlust" 
                target="_blank" 
                rel="noopener"
                underline="none"
                sx={{
                    color: 'inherit',
                    display: 'inline-flex',
                    alignItems: 'center',
                    transition: 'color 0.2s',
                    '&:hover': {
                        color: 'blue',
                    }
                }}
            >
                <GitHubIcon sx={{fontSize: 30,mb: 3 }} />
                <LaunchIcon sx={{ml:1, fontSize: 20,mb: 3 }} />
            </Link>
            <Typography variant="h5" gutterBottom sx={{ fontSize: 28, fontFamily: '"Pacifico", cursive' }}>
                StockVerse
            </Typography>
            <Typography variant="body1" component="p" sx={{ fontSize: 20, mb: 3, fontFamily: '"Pacifico", cursive' }}>
                A real-time stock market analysis platform that provides live stock data, interactive charts, and personalized watchlists. Built with the MERN stack, it features secure user authentication, RESTful APIs for market data, and a clean, responsive UI for an enhanced trading experience.
            </Typography>
            <Link 
                href="https://github.com/Yadveer1/Stockverse" 
                target="_blank" 
                rel="noopener"
                underline="none"
                sx={{
                    color: 'inherit',
                    display: 'inline-flex',
                    alignItems: 'center',
                    transition: 'color 0.2s',
                    '&:hover': {
                        color: 'blue',
                    }
                }}
            >
                <GitHubIcon sx={{fontSize: 30,mb: 3 }} />
                <LaunchIcon sx={{ml:1, fontSize: 20,mb: 3 }} />
            </Link>
        </Box>
    );
}

export default Projects;
