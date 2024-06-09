import PropTypes from 'prop-types';
import SignupComponent from '../Components/Auth/SignupComponent';

const Signup = ({ redirectUrl = '/profile' }) => {
  return (
    <div className='mt-24'>
      <SignupComponent redirectUrl={redirectUrl} />
    </div>
  );
}

Signup.propTypes = {
  redirectUrl: PropTypes.string,
};

export default Signup;
