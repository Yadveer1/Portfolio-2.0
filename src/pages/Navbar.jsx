import GooeyNav from "../ui/GooeyNav";

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

const items = [
  { 
    label: "Home", 
    href: "#home",
    onClick: () => {
      scrollToSection('home');
    }
  },
  { 
    label: "About", 
    href: "#about",
    onClick: () => {
      scrollToSection('about');
    }
  },
  { 
    label: "Projects", 
    href: "#projects",
    onClick: () => {
      scrollToSection('projects');
    }
  },
  { 
    label: "Contact", 
    href: "#contact",
    onClick: () => {
      scrollToSection('contact');
    }
  },
];

function Navbar() {
  return (
    <div >
      <div style={{paddingTop: "25px", height: "100px", position: "relative", justifyContent: "center", alignItems: "center", display: "flex"}}>
        <GooeyNav
          // className="bg-transparent"
          items={items}
          particleCount={15}
          particleDistances={[90, 10]}
          particleR={100}
          initialActiveIndex={0}
          animationTime={600}
          timeVariance={300}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
        />
      </div>
    </div>
  );
}
export default Navbar;
