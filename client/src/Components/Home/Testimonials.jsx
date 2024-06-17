import testOne from '../../Images/testOne.jpg';
import testTwo from '../../Images/testTwo.jpg';
import testThree from '../../Images/testThree.jpg';
import { FaQuoteLeft } from 'react-icons/fa6';

const Testimonials = () => {
	const reviews = [
		{
			id: 1,
			name: 'Emily Rodriguez',
			occupation: 'Software Engineer',
			image: testOne,
			testimonial:
				"Free Learning Hub has been a game-changer for me. As a software engineer, I'm always looking to expand my skills, and FLH's practical approach to learning has been invaluable. The hands-on projects and supportive community have helped me grow both personally and professionally.",
		},
		{
			id: 2,
			name: 'Michael Patel',
			occupation: 'Student',
			image: testTwo,
			testimonial:
				"I stumbled upon Free Learning Hub during my college years, and I'm so glad I did. As a student with a passion for coding, FLH provided me with the resources and guidance I needed to excel. The interactive lessons and real-world projects helped me build a strong foundation in web development, setting me up for success in my career.",
		},
		{
			id: 3,
			name: 'Vien Thompson',
			occupation: 'Graphic Designer',
			image: testThree,
			testimonial:
				"Free Learning Hub has been an incredible journey for me. As a graphic designer looking to transition into web development, I was initially intimidated by coding. However, FLH's user-friendly platform and supportive community made the learning process enjoyable. The practical projects allowed me to apply what I learned in real-time, and I'm now confident in my ability to create stunning websites.",
		},
	];

	return (
		<div className='bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 py-5 px-3'>
			<p className='text-xl sm:text-2xl text-center underline underline-offset-[30px] mb-10 md:text-4xl'>
				What Our Users Say
			</p>
			<p className='text-center mt-20'>
				Get to know why our users like our <br /> services and why they
				recommend us.
			</p>
			<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3 mt-20 pb-28 mx-auto'>
				{reviews.map((review) => {
					return (
						<div
							key={review.id}
							className='bg-gray-800 rounded-xl px-3 pb-5 mx-auto max-w-sm'>
							<img
								src={review.image}
								alt=''
								className='w-24 h-24 rounded-full object-cover mx-auto mt-4'
							/>
							<p className='text-xl text-center mt-3'> {review.name} </p>
							<p className='italic text-center text-blue-500'>
								{' '}
								{review.occupation}{' '}
							</p>
							<div className='bg-blue-500/5 border mt-8 border-blue-500/15 hover:bg-blue-500/10 hover:border-blue-500/20 duration-200 cursor-pointer rounded-full mx-auto w-fit p-4'>
								<FaQuoteLeft />
							</div>
							<p className='text-gray-500 mt-2'> {review.testimonial} </p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Testimonials;
