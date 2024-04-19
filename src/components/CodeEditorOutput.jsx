import React from 'react'

const CodeEditorOutput = () => {
  return (
    <div>
      <p className='text-xl mt-[6px] mb-2'>Output:</p>
      <button className='uppercase bg-gray-100 dark:bg-gray-900 text-gray-950 dark:text-gray-50 pl-3 border border-yellow-200 dark:border-blue-200 pr-10 hover:bg-yellow-500 dark:hover:bg-blue-600 rounded-md py-[6px]'>Run Code</button>
    </div>
  )
}

export default CodeEditorOutput