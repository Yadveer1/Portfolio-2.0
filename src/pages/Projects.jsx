// import RollingGallery from '../ui/RollingGallery';
import ExpandableCardDemo from '../components/ui/ExpandableCardDemo';

function Projects() {
  return (
    <div id="projects" className=" px-5 md:px-0 lg:h-210 flex flex-col items-center justify-center">
        <h1 className="text-white text-center text-5xl mb-8">Projects</h1>
        <div>
          <ExpandableCardDemo />
        </div>
    </div>
  );
}
export default Projects;
