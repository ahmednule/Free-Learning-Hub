import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";

const ColorPickerConverter = () => {
  const [color, setColor] = useColor("#561ecb");

  return (
    <div className='bg-gray-50 text-black dark:text-white dark:bg-gray-950 mx-auto w-full min-h-screen'>
      <div className='container max-w-7xl mx-auto'>
        <div>
          <Navbar />
        </div>
        <div className='pt-32 max-w-md mx-auto min-h-screen'>
          <h1 className='text-center mb-5 font-bold text-2xl md:text-3xl'>Color Picker / Converter</h1>
          <div className='px-5'>
            <ColorPicker color={color} onChange={setColor} />
          </div>
        </div>
        <div className='pt-32'>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default ColorPickerConverter