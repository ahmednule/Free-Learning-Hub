import { LuLoader2 } from 'react-icons/lu';

const Spinner = ({ width }) => {
  return (
      <div className="mx-auto">
        <LuLoader2 className="animate-spin" size={width} />
      </div>
  );
}

export default Spinner;
