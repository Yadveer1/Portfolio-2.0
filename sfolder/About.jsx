import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function About() {
  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: '600', fontFamily: '"Pacifico", cursive' }}>
        About Me
      </Typography>
      <Typography variant="body1" component="h1" gutterBottom sx={{ fontSize:25 ,fontFamily: '"Pacifico", cursive' }}>
        Hi, I’m Yadveer Singh Pawar, a passionate Computer Engineering student and aspiring full-stack developer. I love building creative, efficient, and user-friendly web applications. Over the past few months, I’ve honed my skills in the MERN stack, Java, and problem-solving, and I’m always eager to learn new technologies.
      </Typography>
      <Typography variant="body1" component="h1" gutterBottom sx={{ fontSize:25 ,fontFamily: '"Pacifico", cursive' }}>
        When I’m not coding, I’m exploring innovative ideas, contributing to hackathons, and pushing myself to grow as a developer. My goal is to create impactful digital solutions that make people’s lives easier and more enjoyable.
      </Typography>
    </Box>
  );
}

export default About;
