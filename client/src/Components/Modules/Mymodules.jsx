import { FaAngleRight } from 'react-icons/fa6';
import { PiFolderStarThin } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import { allModules } from '../../Data/Modules.js';

const Mymodules = (props) => {
  const { progress } = props;

  const modules = Object.keys(progress);
  const filteredModules = allModules.filter(module => modules.includes(module.unique));

  return (
    <div>
      <div className="grid lg:grid-cols-2 gap-3 mt-14 mb-36">
      {modules.length <= 0 && (
        <div className='w-full text-center px-3'>
          <p>You don't have any registered module. Switch to <span className='code'>all modules</span> to register a module and start learning.</p>
        </div>
      )}
      {filteredModules.map((lang) => {
        return (
          <div key={lang.id} className="w-full bg-blue-500/5 border border-blue-500/15 rounded-2xl hover:bg-blue-500/10 hover:border-blue-500/20 duration-200"  >
          <div className=" cursor-pointer flex p-4">
            <div className="hidden lg:flex-[0.15] lg:flex items-center justify-center">
              <div className="w-14 h-14 bg-blue-500/35 rounded-full flex items-center justify-center text-white">
                <PiFolderStarThin size={30} />
              </div>
            </div>
            <div className="lg:flex-[0.85] flex-1 flex flex-col justify-start gap-2">
              <p className="font-semibold text-left text-xl"> {lang.name} </p>
              <p className="text-xs lg:text-sm"> {lang.description} </p>
              <Link to={`${lang.linkTwo}`}>
                <button className="mr-auto flex items-center gap-[5px] text-blue-500 group">
                  <span>Continue learning</span>
                  <FaAngleRight className="group-hover:translate-x-1 duration-200 mt-[1px]" />
                </button>
              </Link>
            </div>
          </div>

            <div className='w-[90%] bg-gray-800 rounded-md h-12 mx-auto mb-4 border border-gray-700'>
              <div className='min-w-[30px] w-fit bg-lime-600 h-full rounded-md'>
                <p className='text-gray-950 pt-[10px] font-semibold text-center'>
                  0%
                </p>
              </div>
            </div>
          </div>
        )
      })}
      </div>
    </div>
  )
}

export default Mymodules