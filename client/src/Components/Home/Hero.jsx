import { ReactTyped } from 'react-typed';
import { Banner } from '../General/Banner';
import { homeHeroScrollImages } from '../../Data/Data';

const Hero = () => {
	const fetchedImages = homeHeroScrollImages();
	const images = [];
	fetchedImages.map((image) =>
		images.push({
			id: crypto.randomUUID(),
			image,
		})
	);

	return (
		<>
			<div className='flex flex-col lg:flex-row items-center justify-between gap-5 pt-10 lg:pt-0'>
				<div className='lg:max-w-[45%] flex flex-col gap-5'>
					<h2 className='text-2xl sm:text-4xl lg:text-6xl text-center lg:text-left'>
						<span className='text-blue-500'>Learn Faster</span> with
						comprehensive tutorials.
					</h2>
					<div>
						<p className='text-center text-sm md:text-base lg:text-left'>
							Free Learning Hub provides comprehensive tutorials, questions and
							projects on various programming languages. Take your first step
							into programming by studying with us. Get your hands on tutorials
							covering:-
						</p>
						<div className='text-blue-500 text-xl w-full flex items-center justify-center lg:justify-start'>
							<ReactTyped
								strings={[
									'HTML',
									'CSS',
									'JavaScript',
									'Python',
									'C',
									'C++',
									'C#',
									'Java',
								]}
								typeSpeed={70}
								backSpeed={80}
								loop
							/>
						</div>
					</div>
				</div>
				<div className='mt-10 lg:mt-2 border-b border-l rounded-bl-3xl border-primary-600 bg-gradient-to-bl from-transparent via-25% via-transparent pr-20 pl-6 to-primary-700'>
					<img
						src='./landing-top.png'
						alt='Landing Page Top Image'
						className='w-full h-full object-cover'
					/>
				</div>
			</div>
			<div>
				<Banner
					images={images}
					speed={15000}
				/>
			</div>
		</>
	);
};

export default Hero;
