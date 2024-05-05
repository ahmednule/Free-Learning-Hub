import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className='flex flex-col lg:flex-row items-center justify-between gap-5 pt-10'>
      <div className='lg:max-w-[45%] flex flex-col gap-5'>
        <h2 className='text-2xl sm:text-4xl lg:text-6xl text-center lg:text-left'><span className='text-blue-500'>Learn Faster</span> with comprehensive tutorials.</h2>
        <div className=''>
          <p className='text-center text-sm md:text-base lg:text-left'>Free Learning Hub provides comrehensive tutorials, questions and projects on various programming languages. Take your first step into being getting to know programming by studying with us. Get your hands on tutorals covering:-</p>
          <div className='text-blue-500 text-xl w-full flex items-center justify-center lg:justify-start'>
            <ReactTyped
              strings={[
                "HTML",
                "CSS",
                "JavaScript",
                "Python",
                "C",
                "C++",
                "C#",
                "Java",
              ]}
              typeSpeed={70}
              backSpeed={80}
              loop
            >
            </ReactTyped>
          </div>
        </div>
      </div>
      <div className='mt-10 lg:mt-2 border-b border-l rounded-bl-3xl border-gray-800 bg-gradient-to-bl from-transparent via-25% via-transparent pr-20 pl-6 to-gray-900'>
        <img src="./landing-top.png" alt="Landing Page Top Image" className='w-full h-full object-cover' />
      </div>
    </div>
  );
}

export default Hero;