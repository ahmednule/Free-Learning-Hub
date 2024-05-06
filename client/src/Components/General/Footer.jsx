import { useEffect, useState } from "react";
import { FaDiscord, FaGithub, FaMailchimp } from "react-icons/fa6";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(0);

  useEffect(() => {
    const fetchCurrentYear = () => {
      const currentDate = new Date();
      setCurrentYear(currentDate.getFullYear());
    }
    
    fetchCurrentYear();
  }, []);

  return (
    <div className="border-t border-gray-700">
      <div>
        Main Footer Elements
      </div>
      <div className="border-t border-gray-700 py-8 flex flex-col-reverse gap-5 md:justify-between md:flex-row">
        <div className="font-extralight text-xs">
          <p className="pl-2">Copyright &copy; {currentYear} Free Learning Hub</p>
        </div>
        <div className="flex gap-1 text-xl items-center">
          <a href="https://github.com/developer-assets/Free-Learning-Hub" target="_blank" rel="noreferer" className="p-2 hover:bg-gray-700 duration-200 cursor-pointer rounded-full">
            <FaGithub />
          </a>
          <a href="https://discord.gg/BYDg4NXDZx" target="_blank" rel="noreferer" className="p-2 hover:bg-gray-700 duration-200 cursor-pointer rounded-full">
            <FaDiscord />
          </a>
          <a href="mailto:999patrickobama@gmail.com" target="_blank" rel="noreferer" className="p-2 hover:bg-gray-700 duration-200 cursor-pointer rounded-full">
            <FaMailchimp />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer