import SplitText from "../ui/SplitText";
import SparklesPreview from "../components/SparklesPreview";

const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};

function Home() {
  return (
    // <div id="home" className=" h-130 sm:h-150 lg:h-280 mt-40 md:mt-35 overflow-hidden">
    <div id="home" className=" h-130 sm:h-80 lg:h-110 mt-40 md:mt-35 overflow-hidden">

        <div>
          <div className="flex justify-center w-full"> 
            <SplitText
              text="Hi, I'm Yadveer!"
              className="text-7xl lg:text-9xl font-semibold text-center text-white"
              delay={100}
              duration={2}
              ease="elastic.out(1,0.3)"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
              onLetterAnimationComplete={handleAnimationComplete}
            />

          </div>
            <SparklesPreview />
        </div>

        {/* <div className="h-170 w-full mt-10 scale-80 hidden md:block lg:block ">
        <Spline  scene="https://prod.spline.design/gaCvrWIJFd9x8xu1/scene.splinecode" />
        <div className="h-20 w-10 sm:w-20 md:w-40 lg:w-80 bg-black absolute right-0 bottom-5 "></div>
        </div> */}
        
    </div>
  );
}
export default Home;