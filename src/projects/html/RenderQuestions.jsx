import React from 'react'
import { IoIosCheckmarkCircle } from "react-icons/io";

const RenderQuestions = ({ questions }) => {
  return (
    <div className='bg-gray-200 dark:bg-gray-800 mt-10 px-3 py-6 rounded-md'>
      <ul>
        {questions.map((question, index) => (
          <li className={'py-3 my-1 rounded flex justify-start px-2 y-700 bg-gray-50 dark:bg-gray-950'} key={index}>
            <span>
              <IoIosCheckmarkCircle className='mt-1 text-green-500' />
            </span>
            <span className='ml-4'>
              {question.content}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RenderQuestions