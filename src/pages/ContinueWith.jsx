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
      // navigate('/');
    } catch (err) {
      console.error(err);
      toast.error("Could not sign you in!");
    }
  };

  useEffect(() => {
    
  
    
  }, []);
  

  

  return (
    <div className='bg-gray-50 text-black dark:text-white dark:bg-gray-950 mx-auto w-full min-h-screen'>
      <div className='container max-w-7xl w-full h-screen mx-auto'>
        <div>
          <Navbar />
        </div>
        <div className="pt-32 h-[80vh] mx-auto">
          <div className="flex justify-center cursor-pointer w-fit py-2 px-12 border border-yellow-200 hover:border-transparent hover:text-gray-50 hover:dark:text-gray-950 dark:border-blue-200 text-gray-950 dark:text-gray-50 text-2xl rounded-3xl mx-auto gap-8 hover:bg-yellow-500 hover:dark:bg-blue-600 duration-300 transition-colors">
            <FcGoogle className="mt-1" />
            <button onClick={signInWithGoogle}>Continue With Google</button>
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

