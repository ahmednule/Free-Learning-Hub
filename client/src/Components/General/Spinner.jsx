import PropTypes from 'prop-types';
import { LuLoader2 } from 'react-icons/lu';

const Spinner = ({ width }) => {
  return (
    <div className="mx-auto">
      <LuLoader2 className="animate-spin" size={width} />
    </div>
  );
}

Spinner.propTypes = {
  width: PropTypes.number.isRequired,
}

export default Spinner;
