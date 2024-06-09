import PropTypes from 'prop-types';
import LoginComponent from '../Components/Auth/LoginComponent';

const Login = ({ redirectUrl = '/profile' }) => {
  return (
    <div className='mt-24'>
      <LoginComponent redirectUrl={redirectUrl} />
    </div>
  );
}

Login.propTypes = {
  redirectUrl: PropTypes.string,
};

export default Login;
