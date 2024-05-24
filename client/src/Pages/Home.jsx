import Hero from '../Components/Home/Hero';
import Languages from '../Components/Home/Languages';
import Testimonials from '../Components/Home/Testimonials';
import Newsletter from '../Components/Home/Newsletter';
import { TfiPlus } from 'react-icons/tfi';

const Home = () => {
  return (
    <div className='flex flex-col gap-32'>
      <Hero />

      <div className='w-full h-20 border-t border-gray-600 bg-gradient-to-b from-gray-900 relative to-transparent'>
        <div className='hidden md:block absolute top-0 left-0 -translate-x-[14px] -translate-y-[14px] text-white'>
          <TfiPlus size={30} />
        </div>
        <div className='hidden md:block absolute top-0 right-0 translate-x-[14px] -translate-y-[14px] text-white'>
          <TfiPlus size={30} />
        </div>
      </div>

      <Languages />

      <div>
        <Newsletter />
        <Testimonials />
      </div>

    </div>
  );
}

export default Home;
