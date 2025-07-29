import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Home() {
return (
    <Box
        sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'center',
            alignItems: 'center',
            gap: 7,
            height:{ xs: 'auto', md: '500px', lg:'400px' },
            paddingTop: { xs: 2, md: 0, lg: 7 },
        }}
    >
        <Box
            sx={{
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                mb: { xs: 2, md: 0 },
            }}
        >
            <img
                src="home1.gif"
                alt="Home"
                style={{
                    width: '100%',
                    height: 'auto',
                    maxWidth: 600,
            }}
            />
        </Box>
        <Box
            sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: { xs: 'center', md: 'flex-start' },
                textAlign: { xs: 'center', md: 'left' },
            }}
        >
            <Typography
                variant="h4"
                component="h1"
                gutterBottom
                sx={{ fontWeight:'600',fontFamily: '"Pacifico", cursive' }}
            >
                Hi My Name is Yadveer Singh Pawar
            </Typography>
            <Typography variant="body1">
                I am a passionate developer with experience in building web applications.
            </Typography>
        </Box>
    </Box>
);
}

export default Home;

