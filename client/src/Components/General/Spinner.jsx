import { LuLoader2 } from 'react-icons/lu';

const Spinner = () => {
  return (
      <div className="mx-auto">
        <LuLoader2 className="animate-spin" size={20} />
      </div>
  );
}

export default Spinner;
