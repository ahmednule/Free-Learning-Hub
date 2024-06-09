import PropTypes from 'prop-types';
import toast from 'react-hot-toast';

const CreateNotification = ({ status, message }) => {
  if (status === 'success') success(message);
  if (status === 'error') error(message);
}

function success (message) {
  toast.success(message);
}

function error (message) {
  toast.error(message);
}

CreateNotification.propTypes = {
  status: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default CreateNotification;
