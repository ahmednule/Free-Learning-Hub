import Axios from 'axios';
import PropTypes from 'prop-types';

const backendURL = import.meta.env.VITE_BACKEND_URL;

const Post = async (apiUrl, apiData) => {
  try {
    const response = await Axios.post(`${backendURL}${apiUrl}`, apiData);
    if (response.data.success) {
      return {
        success: true,
        data: response.data.data,
        message: response.data.message,
      }
    }
    return {
      success: false,
      data: '',
      message: response.data.message,
    }
  } catch (err) {
    console.log(err);
    return {
      success: false,
      data: '',
      message: 'Something went wrong',
    };
  }
};

Post.propTypes = {
  apiUrl: PropTypes.string.isRequired,
  apiData: PropTypes.object.isRequired,
};

export { Post };
