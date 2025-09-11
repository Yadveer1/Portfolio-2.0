import ResponsiveAppBar from './ResponsiveAppBar';
import Home from './Home';
import About from './About';
import Container from '@mui/material/Container';
import Skills from './Skills';
import Projects from './Project';
import Contact from './Contact';
import BackToTopButton from './BackToTopButton';

function Index() {
  return (
    <Container sx={{width:{ xs: '100%', sm: '90%', md: '100%', lg:'100%' }, marginTop: 2}}>
      <ResponsiveAppBar />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <BackToTopButton />
    </Container>
  );
}

export default Index;