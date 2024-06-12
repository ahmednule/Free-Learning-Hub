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

  const noName = [
    {
      name: 'Certifications',
      count: '0',
      icons: <FaGraduationCap size={30} />,
    },
    {
      name: 'Your modules',
      count: modules,
      icons: <PiBookOpenTextFill size={30} />,
    },
    {
      name: 'All modules',
      count: '2',
      icons: <TbTextPlus size={30} />,
    },
    {
      name: 'Badges',
      count: '0',
      icons: <FaAward size={30} />,
    },
  ]

  return (
    <div className='w-full bg-primary-700 px-2 py-5 rounded-sm'>

      <div className='flex flex-col md:flex-row flex-wrap gap-8'>

        <div className='bg-primary-600 rounded-md py-4 px-7'>
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

        <div className='w-[340px] py-4 px-6 bg-primary-600 rounded-md grid grid-cols-2 gap-5'>
          {noName.map((item, index) => {
            return (
              <div key={index} className='h-[90px] w-[140px] bg-primary-400/30 border cursor-pointer border-primary-300/50 hover:scale-105 hover:bg-primary-700 duration-200 rounded'>
                <div className='flex items-center gap-4 px-4 mt-2'>
                  {item.icons}
                  <span className='text-3xl'>{item.count}</span>
                </div>
                <p className='pl-4 mt-2'>{item.name}</p>
              </div>
            )
          })}
        </div>

      </div>

      <div></div>
      
    </div>
  );
}

export default Dashboard;
