import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Skills() {
return (
    <Box
        sx={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}
    >
        <Typography
            variant="h4"
            sx={{fontSize: 50, mb:5 ,fontFamily: '"Pacifico", cursive' }}
        >
            Skills
        </Typography>
        <Typography variant="body1" gutterBottom sx={{fontSize: 25, fontFamily: '"Pacifico", cursive' }}>
            Frontend: HTML, CSS, JavaScript, React.js
        </Typography>
        <Typography variant="body1" gutterBottom sx={{fontSize: 25, fontFamily: '"Pacifico", cursive' }}>
            Backend: Node.js, Express.js
        </Typography>
        <Typography variant="body1" gutterBottom sx={{fontSize: 25, fontFamily: '"Pacifico", cursive' }}>
            Databases: MongoDB
        </Typography>
        <Typography variant="body1" gutterBottom sx={{fontSize: 25, fontFamily: '"Pacifico", cursive' }}>
            Programming Languages: Java, C++
        </Typography>
        <Typography variant="body1" gutterBottom sx={{fontSize: 25, fontFamily: '"Pacifico", cursive' }}>
            Tools &amp; Platforms: Git, GitHub, REST APIs, Cloudinary
        </Typography>
        <Typography variant="body1" gutterBottom sx={{fontSize: 25, fontFamily: '"Pacifico", cursive' }}>
            Soft Skills: Problem-solving, teamwork, adaptability, continuous learning
        </Typography>
    </Box>
);
}

export default Skills;
