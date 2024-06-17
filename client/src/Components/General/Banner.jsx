import PropTypes from 'prop-types';

const Banner = ({ images, speed = 5000 }) => {
	return (
		<div className='inner'>
			<div className='flex'>
				<section
					className='section-banner'
					style={{ '--speed': `${speed}ms` }}>
					{images.map(({ id, image }) => (
						<div
							className='image'
							key={id}>
							<img
								className='banner-img'
								src={image}
								alt={id}
							/>
						</div>
					))}
				</section>
				<section
					className='section-banner'
					style={{ '--speed': `${speed}ms` }}>
					{images.map(({ id, image }) => (
						<div
							className='image'
							key={id}>
							<img
								className='banner-img'
								src={image}
								alt={id}
							/>
						</div>
					))}
				</section>
				<section
					className='section-banner'
					style={{ '--speed': `${speed}ms` }}>
					{images.map(({ id, image }) => (
						<div
							className='image'
							key={id}>
							<img
								className='banner-img'
								src={image}
								alt={id}
							/>
						</div>
					))}
				</section>
			</div>
		</div>
	);
};

Banner.propTypes = {
	images: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			image: PropTypes.string.isRequired,
		})
	).isRequired,
	speed: PropTypes.number,
};

export { Banner };
