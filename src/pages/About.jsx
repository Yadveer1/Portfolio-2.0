import ProfileCard from '../ui/ProfileCard';
import DecryptLine from '../ui/DecryptLine';

function About() {
  return (
    <div id="about" className="h-240 lg:h-200 lg:mt-20 flex items-center justify-center">
      <div className="lg:grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 w-full max-w-7xl mx-auto px-4">
        <div className="md:col-span-1 lg:col-span-1 flex items-center justify-center">
            <div className="w-70 sm:w-80 md:w-90 lg:w-100 m-auto">
                <ProfileCard
                    name="Yadveer Singh Pawar"
                    title="Software Engineer"
                    handle="Yadveer1"
                    status=""
                    contactText="Contact Me"
                    avatarUrl="./profile.png"
                    miniAvatarUrl="./profile.png"
                    showUserInfo={true}
                    enableTilt={true}
                    enableMobileTilt={true}
                    onContactClick={() => console.log('Contact clicked')}
                />
            </div>
      </div>

      <div className="  px-8 md:p-0 py-4 md:py-0 md:col-span-2 lg:col-span-2 ">
        <div className="w-full lg:p-5 block">
          <DecryptLine texts="Hi, I'm Yadveer Singh Pawar, a passionate Computer Engineering student and aspiring full-stack developer." />
          <DecryptLine texts="I love building creative, efficient, and user-friendly web applications." />
          <DecryptLine texts="Over the past few months, I've honed my skills in the MERN stack, Java, and problem-solving." />
          <DecryptLine texts="I'm excited to contribute to innovative projects and collaborate with like-minded professionals." />
          <DecryptLine texts="What Inspires Me: " />
          {/* <DecryptLine texts="I thrive at the intersection of design and functionality, striving to craft websites that are not only visually appealing but also seamless in performance" /> */}
          <DecryptLine texts="Tackling the challenge of merging aesthetics with robust functionality excites me the most." />
        </div>
      </div>

    </div>
    </div>
  );
}
export default About;