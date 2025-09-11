import { lazy, Suspense } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';

// Lazy load components for better performance
const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));
const Projects = lazy(() => import('./Projects'));
const Contact = lazy(() => import('./Contact'));
import Navbar from './Navbar';

// Preload critical components
const preloadComponents = () => {
  // Preload the most important components
  import('./About');
  import('./Projects');
  import('./Contact');
};

// Call preload after a short delay to not block initial render
setTimeout(preloadComponents, 100);

function Index() {
  return (
    <div className="h-100vh w-full bg-black">
      <Navbar />
      <Suspense fallback={<LoadingSpinner />}>
        <Home />
        <About />
        <Projects />
        <Contact />
      </Suspense>
    </div>
  );
}

export default Index;