import PropTypes from 'prop-types';
import { FaAngleRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Subfooter = ({ t1, l1, t2, l2, edit }) => {
	return (
		<div>
			<div className='flex flex-col md:flex-row w-full gap-3 md:justify-between'>
				<Link
					to={l1}
					className='flex'>
					<button className='flex group justify-center w-full md:w-fit duration-200 transition-all bg-blue-500/15 border border-blue-500/25 hover:bg-blue-500/20 hover:border-blue-500/30 py-2 rounded-lg px-5 gap-2'>
						<span>
							<FaAngleRight className='group-hover:-translate-x-[5px] duration-200 rotate-180 mt-1' />
						</span>
						<span> {t1} </span>
					</button>
				</Link>
				<Link
					to={l2}
					className='flex'>
					<button className='flex group justify-center w-full md:w-fit duration-200 transition-all bg-blue-500/15 border border-blue-500/25 hover:bg-blue-500/20 hover:border-blue-500/30 py-2 rounded-lg px-5 gap-2'>
						<span> {t2} </span>
						<span>
							<FaAngleRight className='group-hover:translate-x-[5px] duration-200 mt-1' />
						</span>
					</button>
				</Link>
			</div>
			<p className='linkOne mt-10'>
				<a
					href={edit}
					target='_blank'
					rel='noreferer'>
					Edit this page on GitHub
				</a>
			</p>
		</div>
	);
};

Subfooter.propTypes = {
	t1: PropTypes.string.isRequired,
	t2: PropTypes.string.isRequired,
	l1: PropTypes.string.isRequired,
	l2: PropTypes.string.isRequired,
	edit: PropTypes.string.isRequired,
};

export default Subfooter;
