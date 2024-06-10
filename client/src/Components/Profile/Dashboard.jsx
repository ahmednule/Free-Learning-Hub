import { useSelector } from 'react-redux';
import { getReduxUserData } from '../../Redux/user.slice';
import { CircularProgressbar } from 'react-circular-progressbar';
import { FaGraduationCap, FaAward } from 'react-icons/fa6';
import { PiBookOpenTextFill } from 'react-icons/pi';
import { TbTextPlus } from 'react-icons/tb';
import 'react-circular-progressbar/dist/styles.css';

const Dashboard = () => {
  const userDataMain = useSelector(getReduxUserData);
  const modules = Object.keys(userDataMain.userProgress.progress).length;
  const cubesPercentage = Math.floor(userDataMain.userCubes / userDataMain.cubes * 100);

  return (
    <div className='w-full bg-gray-900 px-2 py-5 rounded-sm'>

      <div className='flex flex-col md:flex-row flex-wrap gap-8'>

        <div className='bg-gray-500/15 rounded-md py-4 px-7'>
          <h2 className='text-2xl md:text-3xl text-center sm:text-left'>Your progress</h2>
          <div className='flex flex-col sm:flex-row items-center gap-10'>
            <div className="w-32 h-32 mt-5">
              <CircularProgressbar
                value={cubesPercentage}
                text={`${cubesPercentage}%`}
                styles={{
                  path: {
                    stroke: `rgba(214, 73, 99, 1)`,
                    strokeLinecap: 'round',
                  },
                  trail: {
                    stroke: '#4a5568',
                  },
                  text: {
                    fill: '#3B82F6',
                    fontSize: '24px',
                  },
                }}
              />
            </div>
            <div>
              <p className='md:text-2xl font-light mb-4 text-reds-400'>FLH Cubes</p>
              <p className='text-sm md:text-base'>{userDataMain.userCubes} cubes</p>
            </div>
          </div>
        </div>

        <div className='w-[340px] py-4 px-6 bg-gray-500/15 rounded-md grid grid-cols-2 gap-5'>
          <div className='h-[90px] w-[140px] bg-gray-500/25 border cursor-pointer border-gray-500/40 hover:scale-105 hover:bg-gray-900 duration-200 rounded'>
            <div className='flex items-center gap-4 px-4 mt-2'>
              <FaGraduationCap size={30} />
              <span className='text-3xl'>0</span>
            </div>
            <p className='pl-4 mt-2'>Certifications</p>
          </div>
          <div className='h-[90px] w-[140px] bg-gray-500/25 border cursor-pointer border-gray-500/40 hover:scale-105 hover:bg-gray-900 duration-200 rounded'>
          <div className='flex items-center gap-4 px-4 mt-2'>
              <PiBookOpenTextFill size={30} />
              <span className='text-3xl'>{modules}</span>
            </div>
            <p className='pl-4 mt-2'>Your Modules</p>
          </div>
          <div className='h-[90px] w-[140px] bg-gray-500/25 border cursor-pointer border-gray-500/40 hover:scale-105 hover:bg-gray-900 duration-200 rounded'>
          <div className='flex items-center gap-4 px-4 mt-2'>
              <TbTextPlus size={30} />
              <span className='text-3xl'>2</span>
            </div>
            <p className='pl-4 mt-2'>All Modules</p>
          </div>
          <div className='h-[90px] w-[140px] bg-gray-500/25 border cursor-pointer border-gray-500/40 hover:scale-105 hover:bg-gray-900 duration-200 rounded'>
          <div className='flex items-center gap-4 px-4 mt-2'>
              <FaAward size={30} />
              <span className='text-3xl'>0</span>
            </div>
            <p className='pl-4 mt-2'>Badges</p>
          </div>
        </div>

      </div>

      <div></div>
      
    </div>
  );
}

export default Dashboard;
