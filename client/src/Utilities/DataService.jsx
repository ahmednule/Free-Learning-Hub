import Axios from 'axios';
import PropTypes from 'prop-types';

const backendURL = import.meta.env.VITE_BACKEND_URL;

const Post = async (apiUrl, apiData) => {
  try {
    const response = await Axios.post(`${backendURL}${apiUrl}`, apiData);
    if(!response || !response.data) {
      return returnMessageCreator(false, false, {}, 'Something went wrong');
    }
    if (!response.data.success) {
      return returnMessageCreator(false, false, {}, response.data.message | 'Something went wrong');
    }
    if (Object.keys(response.data.data).length < 1) {
      return returnMessageCreator(true, false, {}, response.data.message);
    }
    return returnMessageCreator(true, true, response.data.data, response.data.message);
  } catch (err) {
    console.log(err);
    return returnMessageCreator(false, false, {}, 'Something went wrong');
  }
};

function returnMessageCreator(success, isRequired, data, message) {
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
