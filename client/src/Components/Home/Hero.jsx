import React, { useState, useEffect } from 'react'
import Axios from 'axios'

const Hero = () => {
  const [quote, setQuote] = useState({});

  useEffect(() => {
    const fetchQuote = () => {
      try {
        const response = Axios.get('http://programming-quotes-api.herokuapp.com/quotes/random');
        setQuote(response.data);
      } catch (err) {
        console.log(`Error fetching data.`);
      }
    }
  
    fetchQuote();
  }, []);

  console.log(quote);
  


  return (
    <div className='flex flex-col items-center justify-center gap-5'>
      <div className='w-full pt-14'>
        <img src="./logobig.webp" alt="Free Learning Hub Logo" className='h-52 w-fit mx-auto' />
      </div>
      <p></p>
    </div>
  );
}

export default Hero;