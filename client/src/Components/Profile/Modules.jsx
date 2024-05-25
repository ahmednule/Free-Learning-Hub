import { useSelector } from 'react-redux';
import { getReduxUserData } from '../../Redux/user.slice';

const Modules = () => {
  const userDataMain = useSelector(getReduxUserData);

  console.log(userDataMain);

  return (
    <div className='w-full bg-gray-900 px-2 py-5 rounded-sm'>
      <div>
        <h3 className='text-xl md:text-2xl text-yellow-500'>In progress</h3>
        <div className='px-2'>
          <div className='flex justify-between'>
            <p>Name</p>
            <p>Progress</p>
            <p>Action</p>
          </div>

        </div>
        <h3 className='text-xl md:text-2xl text-green-500 mt-5'>Completed</h3>
        <div className='px-2'>

        </div>
        <h3 className='text-xl md:text-2xl mt-5'>All modules</h3>
        <div className='px-2'>

        </div>
      </div>
    </div>
  );
}

export default Modules;
