import Axios from 'axios';
import PropTypes from 'prop-types';

const backendURL = import.meta.env.VITE_BACKEND_URL;

const Post = async (apiUrl, apiData) => {
  try {
    const response = await Axios.post(`${backendURL}${apiUrl}`, apiData);
    const { success, data, message } = response.data;

    if (!response || !response.data) return createReturnMessage(false, false, {}, 'Something went wrong');
    if (!success) return createReturnMessage(false, false, {}, message || 'Something went wrong');
    if (Object.keys(data).length < 1) return createReturnMessage(true, false, {}, message);
    
    return createReturnMessage(true, true, data, message);
  } catch (err) {
    console.log(err);
    return createReturnMessage(false, false, {}, 'Something went wrong');
  }
};

function createReturnMessage(success, isRequired, data, message) {
  return {
    success,
    isRequired,
    data,
    message,
  }
}

Post.propTypes = {
  apiUrl: PropTypes.string.isRequired,
  apiData: PropTypes.object.isRequired,
};

export { Post };
