import PropTypes from 'prop-types';
import { FaAngleRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getReduxUserData } from '../../Redux/user.slice';
import { allModules } from '../../Data/Modules.js';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Mymodules = ({ progress }) => {
  const userDataMain = useSelector(getReduxUserData);
  let htmlCssProgress = progress['html-css'] ? progress['html-css'].progress : 0;
  let pythonProgress = progress['python'] ? progress['python'].progress : 0;

  htmlCssProgress = Object.keys(htmlCssProgress).length;
  pythonProgress = Object.keys(pythonProgress).length;

  const modules = Object.keys(progress);
  const filteredModules = allModules.filter(module => modules.includes(module.unique));

  return (
    <div>
      {modules.length <= 0 && (
        <div className='w-full text-center mt-5'>
          <p>You don&apos;t have any registered module. Switch to <span className='code'>all modules</span> to register a module and start learning.</p>
        </div>
      )}
      <div className="flex flex-wrap gap-3 mt-5 mb-36">
        {filteredModules.map((lang) => {
          let progressPercent = 0;
          if (lang.unique === 'html-css') {
            progressPercent = Math.round(htmlCssProgress / userDataMain.htmlCss * 100);
          } else if (lang.unique === 'python') {
            progressPercent = Math.round(pythonProgress / userDataMain.python * 100);
          }

          if (lang.unique === 'html-css') {
            lang.link = '/learn/html-css/basic-elements';
          } else if (lang.unique === 'python') {
            lang.link = '/learn/python/basic-syntax';
          }

          return (
            <div key={lang.id} className="w-full max-w-sm bg-blue-500/5 border p-4 border-blue-500/15 rounded-2xl hover:bg-blue-500/10 hover:border-blue-500/20 duration-200">
              <p className="font-semibold text-xl">{lang.name}</p>
              <div className="w-32 h-32 mt-3">
                <CircularProgressbar
                  value={progressPercent}
                  text={`${progressPercent}%`}
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
              <Link to={`${lang.link}`}>
                <button className="flex items-center mt-3 gap-[5px] text-blue-500 group">
                  <span>Continue learning</span>
                  <FaAngleRight className="group-hover:translate-x-1 duration-200 mt-[1px]" />
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

Mymodules.propTypes = {
  progress: PropTypes.object.isRequired,
};

export default Mymodules;
