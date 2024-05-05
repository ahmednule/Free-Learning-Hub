import { useEffect, useState } from "react";

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
      <div className="border-t border-gray-700 py-8 flex flex-col-reverse md:flex-row">
        <div className="font-extralight text-xs">
          <p>Copyright &copy; {currentYear} Free Learning Hub</p>
        </div>
        <div>

        </div>
      </div>
    </div>
  )
}

export default Footer