import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Contact() {
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
                Contact
            </Typography>
            <Typography variant="h5" gutterBottom sx={{fontSize: 28, fontFamily: '"Pacifico", cursive' }}>
                Get in Touch
            </Typography>
            <Typography variant="body1" component="p" sx={{fontSize: 20,mb: 3, fontFamily: '"Pacifico", cursive' }}>
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </Typography>
            <Typography variant="body1" component="p" sx={{mb:3,fontSize: 20, fontFamily: '"Pacifico", cursive' }}>
                Email: yadveersinghpawar12345@gmail.com                
            </Typography>
            <Box sx={{gap: 4, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>


            <Link 
                href="mailto:your-email@example.com" 
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
                <GitHubIcon sx={{fontSize: 50,mb: 3 }} />
            </Link>
            <Link 
                href="https://www.linkedin.com/in/yadveersingh/" 
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
                <LinkedInIcon sx={{fontSize: 50,mb: 3 }} />
            </Link>
            </Box>
        </Box>
    );
}

export default Contact;
