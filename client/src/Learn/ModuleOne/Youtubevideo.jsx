import PropTypes from 'prop-types';
import { useState } from 'react';
import Spinner from '../../Components/General/Spinner';

const Youtubevideo = ({ videoId }) => {
  const [preLoader, setPreloader] = useState(true);

  return (
    <div className='w-full h-screen pt-10 flex justify-center items-center mx-auto px-5'>
      <div className='w-full max-w-3xl mx-auto'>
        <div className='w-full flex justify-center'>
          {preLoader && <Spinner width={40} />}
        </div>
        <iframe
          className='w-[90%] md:h-96 sm:h-72 h-56'
          src={`https://www.youtube.com/embed/${videoId}?controls=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          onLoad={() => setPreloader(!preLoader)}
          style={{ display: preLoader ? 'none' : 'block',}}
        ></iframe>
      </div>
    </div>
  );
}

Youtubevideo.propTypes = {
  videoId: PropTypes.string.isRequired,
}

export default Youtubevideo;
