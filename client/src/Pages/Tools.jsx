import { FaAngleRight, FaTools } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Tools = () => {
	const toolsCollection = [
		{
			id: 1,
			name: 'JSON Validator',
			link: '/tools/json-validator',
			description: 'Lorem Lorem Lorem LoremLorem Lorem Lorem',
		},
	];

	return (
		<div>
			<h1 className='font-xl md:text-2xl lg:text-4xl text-center'>
				Find all tools you need to go about your online tasks.
			</h1>
			<div className='grid lg:grid-cols-2 gap-3 mt-14 mb-36'>
				{toolsCollection.map((tool) => (
					<div
						key={tool.id}
						className='flex group w-full h-32 bg-blue-500/5 border border-blue-500/15 rounded-2xl hover:bg-blue-500/10 hover:border-blue-500/20 duration-200'>
						<div className='flex-[0.15] flex h-full text-white items-center justify-center'>
							<FaTools size={30} />
						</div>
						<div className='flex-[0.85]'>
							<h4 className='text-base md:text-xl mt-3'>{tool.name}</h4>
							<p className='mt-1 mb-6'>{tool.description}</p>
							<Link
								to={tool.link}
								className='text-blue-500 hover:text-bl duration-200 flex gap-3 items-center'>
								<span>Check it out...</span>
								<FaAngleRight className='text-white mt[1px] hidden group-hover:block duration-200' />
							</Link>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Tools;
