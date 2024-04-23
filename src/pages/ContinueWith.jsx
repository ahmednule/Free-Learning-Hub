import { toast } from "react-toastify";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { auth, googleProvider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ContinueWith = () => {
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    try {
      const userData = await signInWithPopup(auth, googleProvider);
      toast.success("Sign In Successfull");
      console.log(userData);
      navigate('/profile');
    } catch (err) {
      console.error(err);
      toast.error("Could not sign you in!");
    }
  };

  return (
    <div className='bg-gray-50 text-black dark:text-white dark:bg-gray-950 mx-auto w-full min-h-screen'>
      <div className='container max-w-7xl w-full h-screen mx-auto'>
        <div>
          <Navbar />
        </div>
        <div className="pt-32 h-[80vh] mx-auto">
          <div className="flex justify-center mt-16" >
            <div className="shadow shadow-gray-950 dark:shadow-gray-50 px-10 rounded-md">
              <div onClick={signInWithGoogle} className="flex justify-center border cursor-pointer border-yellow-500 dark:border-blue-600 hover:bg-yellow-500 dark:hover:bg-blue-600 hover:dark:text-gray-950 rounded-md px-12 gap-3 my-14 duration-300">
                <FcGoogle className="mt-[7px]" size={30} />
                <button className="text-base sm:text-xl py-2">Login With Google</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ContinueWith;

