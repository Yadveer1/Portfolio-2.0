import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

function Index() {
  return (
    <div className="h-100vh w-full bg-black">
          <Navbar />
          <Home />
          <About />
          <Projects />
          <Contact />
    </div>

  );
}

export default Index;