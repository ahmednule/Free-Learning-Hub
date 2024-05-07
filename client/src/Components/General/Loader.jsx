import { LuLoader2 } from "react-icons/lu";

const Loader = () => {
  return (
    <div className='w-full h-screen'>
      <div className="mx-auto mt-36">
        <LuLoader2 className="animate-spin" size={35} />
      </div>
    </div>
  )
}

export default Loader