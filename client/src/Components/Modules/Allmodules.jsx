import PropTypes from 'prop-types';
import { FaAngleRight } from 'react-icons/fa6';
import { PiFolderStarThin } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import { allModules } from '../../Data/Modules.js';

const Allmodules = ({ progress }) => {
  const modules = Object.keys(progress);
  const filteredModules = allModules.filter(module => !modules.includes(module.unique));

  return (
    <div>
      {filteredModules.length <= 0 && (
        <div className="w-full text-center mt-5">
          <p>No modules available. We will notify you when more modules are created.</p>
        </div>
      )}
      <div className="grid lg:grid-cols-2 gap-3 mt-5 mb-36">
        {filteredModules.map((lang) => {
          const limitedDescription = lang.description.split(' ').slice(0, 20).join(' ');
          return (
            <div key={lang.id} className="w-full max-w-lg bg-blue-500/5 border border-blue-500/15 rounded-2xl hover:bg-blue-500/10 hover:border-blue-500/20 duration-200">
              <div className="cursor-pointer flex p-4">
                <div className="hidden lg:flex-[0.15] lg:flex items-center justify-center">
                  <div className="w-14 h-14 bg-blue-500/35 rounded-full flex items-center justify-center text-white">
                    <PiFolderStarThin size={30} />
                  </div>
                </div>
                <div className="lg:flex-[0.85] flex-1 flex flex-col justify-start gap-2">
                  <p className="font-semibold text-left text-xl">{lang.name}</p>
                  <p className="text-xs lg:text-sm">{limitedDescription}...</p>
                  <Link to={`/learn/register/${lang.id}`}>
                    <button className="mr-auto flex items-center gap-[5px] text-blue-500 group">
                      <span>Register module</span>
                      <FaAngleRight className="group-hover:translate-x-1 duration-200 mt-[1px]" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

Allmodules.propTypes = {
  progress: PropTypes.object.isRequired,
};

export default Allmodules;
