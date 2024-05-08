
const Newsletter = () => {
  return (
    <div className='text-center bg-gradient-to-b from-transparent via-gray-900 to-gray-900 pb-56 pt-32'>
      <h3 className='text-xl sm:text-2xl md:text-4xl'>Stay upto date with our weekly newsletter.</h3>
      <p className='py-3'>Join our newsletter for regular updates. No spam ever.</p>
      <div className='w-full flex justify-center'>
        <div className='w-[370px] flex justify-center gap-3 items-center'>
          <input
            type="email"
            className='inputOne'
            placeholder='Email'
          />
          <button className='h-9 mt-[7px] px-6 hover:bg-green-600 duration-200 hover:text-gray-950 bg-green-500 rounded-md'>Subscribe</button>
        </div>
        
      </div>
    </div>
  )
}

export default Newsletter