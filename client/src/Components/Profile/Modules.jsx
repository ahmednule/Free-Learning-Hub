import { useSelector } from 'react-redux';
import { getReduxUserData } from '../../Redux/user.slice';
import {
	createInProgress,
	createIsCompleted,
	createAllModules,
} from './Modules.help';
import { Link } from 'react-router-dom';

const Modules = () => {
	const userDataMain = useSelector(getReduxUserData);
	const inProgress = createInProgress(userDataMain);
	const isComplete = createIsCompleted(userDataMain);
	const allModules = createAllModules(userDataMain);

	return (
		<div className='w-full bg-primary-700 px-2 py-5 rounded-sm pb-56'>
			<div>
				<h3 className='text-xl md:text-2xl text-yellow-500'>In progress</h3>
				<div className='border border-primary-400 rounded mt-5'>
					<div
						className='grid md:text-xl bg-primary-900 p-2 rounded-t border-b border-gray-700'
						style={{ gridTemplateColumns: '2fr 1fr 1fr' }}>
						<p>Name</p>
						<p>Progress</p>
						<p>Action</p>
					</div>
					{Array.isArray(inProgress) && inProgress.length === 0 ? (
						<div className='px-2 py-4 bg-primary'>
							<p>You don&apos;t have any registered modules</p>
						</div>
					) : (
						inProgress.map((item, index) => {
							return (
								<div
									key={index}
									className='p-2 grid border-b border-primary-400'
									style={{ gridTemplateColumns: '2fr 1fr 1fr' }}>
									<p className='mt-1'>
										{index + 1}. {item.name}
									</p>
									<p className='mt-1'>{item.progress}% done</p>
									<Link to={item.link}>
										<p className='bg-yellow-500 text-gray-950 hover:bg-yellow-600 duration-200 rounded py-1 px-4'>
											RESUME
										</p>
									</Link>
								</div>
							);
						})
					)}
				</div>

				<h3 className='text-xl md:text-2xl text-green-500 mt-20'>Completed</h3>
				<div className='border border-primary-400 rounded mt-5'>
					<div
						className='grid md:text-xl bg-primary-900 p-2 rounded-t border-b border-gray-700'
						style={{ gridTemplateColumns: '2fr 1fr 1fr' }}>
						<p>Name</p>
						<p>Progress</p>
						<p>Action</p>
					</div>
					{Array.isArray(isComplete) && isComplete.length === 0 ? (
						<div className='px-2 py-4 bg-primary'>
							<p>You haven&apos;t completed any modules</p>
						</div>
					) : (
						isComplete.map((item, index) => {
							return (
								<div
									key={index}
									className='p-2 grid border-b border-primary-400'
									style={{ gridTemplateColumns: '2fr 1fr 1fr' }}>
									<p className='mt-1'>
										{index + 1}. {item.name}
									</p>
									<p className='mt-1'>COMPLETE</p>
									<Link to={item.link}>
										<p className='bg-green-500 text-gray-950 cursor-pointer hover:bg-green-600 duration-200 rounded py-1 px-4'>
											CERTIFICATE
										</p>
									</Link>
								</div>
							);
						})
					)}
				</div>

				<h3 className='text-xl md:text-2xl mt-20'>All modules</h3>
				<div className='border border-primary-400 rounded mt-5'>
					<div
						className='grid md:text-xl bg-primary-900 p-2 rounded-t border-b border-gray-700'
						style={{ gridTemplateColumns: '2fr 1fr 1fr' }}>
						<p>Name</p>
						<p>Progress</p>
						<p>Action</p>
					</div>
					{Array.isArray(allModules) && allModules.length === 0 ? (
						<div className='px-2 py-4 bg-primary'>
							<p>No modules are available</p>
						</div>
					) : (
						allModules.map((item, index) => {
							return (
								<div
									key={index}
									className='p-2 grid border-b border-primary-400'
									style={{ gridTemplateColumns: '2fr 1fr 1fr' }}>
									<p className='mt-1'>
										{index + 1}. {item.name}
									</p>
									<p className='mt-1'>
										{item.progress === 100
											? 'COMPLETE'
											: `${item.progress}% done`}
									</p>
									<Link to={item.link}>
										<p
											className={`text-gray-950 cursor-pointer hover:bg-opacity-80 duration-200 rounded py-1 px-4 ${
												item.type === 'progress'
													? 'bg-yellow-500 hover:bg-yellow-600'
													: item.type === 'done'
													? 'bg-green-500 hover:bg-green-600'
													: item.type === 'register'
													? 'bg-blue-500 hover:bg-blue-600'
													: ''
											}`}>
											{item.type === 'progress' && 'RESUME'}
											{item.type === 'done' && 'CERTIFICATE'}
											{item.type === 'register' && 'REGISTER'}
										</p>
									</Link>
								</div>
							);
						})
					)}
				</div>
			</div>
		</div>
	);
};

export default Modules;
