import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import SignupComponent from '../Components/Auth/SignupComponent';
import fetchParams from '../Utilities/fetchParams';

const Signup = ({ redirectUrl: defaultRedirectUrl = '/profile' }) => {
  const [queryParams, setQueryParams] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const hash = window.location.hash;
    setQueryParams(fetchParams(hash));
    setIsLoaded(true);
  }, []);

  let redirectUrl = defaultRedirectUrl;
  if (Object.keys(queryParams).length > 0) {
    redirectUrl = queryParams.redirect || defaultRedirectUrl;
  }

  return (
    <div className='mt-24'>
      {isLoaded && <SignupComponent redirectUrl={redirectUrl} />}
    </div>
  );
}

Signup.propTypes = {
  redirectUrl: PropTypes.string,
};

export default Signup;
