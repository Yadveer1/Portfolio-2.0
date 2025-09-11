import { lazy, Suspense } from 'react';

// Lazy load the expandable card demo for better performance
const ExpandableCardDemo = lazy(() => import('../components/ui/ExpandableCardDemo'));

function Projects() {
  return (
    <div id="projects" className="px-5 md:px-0 lg:h-210 flex flex-col items-center justify-center">
        <h1 className="text-white text-center text-5xl mb-8">Projects</h1>
        <div>
          <Suspense fallback={
            <div className="flex items-center justify-center p-8">
              <div className="w-8 h-8 border-2 border-purple-400 border-t-transparent rounded-full animate-spin"></div>
            </div>
          }>
            <ExpandableCardDemo />
          </Suspense>
        </div>
    </div>
  );
}

export default Projects;
