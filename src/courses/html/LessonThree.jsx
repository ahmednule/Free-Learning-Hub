import React, { useState } from 'react'
import SubFooter from '../../components/SubFooter'
import Footer from '../../components/Footer'
import Quiz from './Questions/Quiz'
import QuizThree from './Questions/QuizThree.json'

const LessonThree = () => {
  const [questions, setQuestions] = useState(false);

  return (
    <div className='px-4 mt-10'>
      <h1 className='font-bold text-2xl md:text-3xl'>Setting up IDE</h1>

      <article className='mt-6 font-md flex flex-col gap-8 mb-20'>
        <p>Setting up an Integrated Development Environment (IDE) is akin to crafting a tailored workspace for coding, ensuring optimal productivity and efficiency. An IDE seamlessly integrates essential tools such as a text editor, debugger, and compiler into a unified application, simplifying the process of writing, testing, and managing code.</p>
        <p>Here’s a straightforward guide to setting up your IDE:</p>
        <ol className='ml-2 flex flex-col gap-4'>
          <li><span className='font-bold text-[17px]'>1. Select an IDE:</span> Choose an IDE that aligns with the programming language you intend to work with. Popular options include <a className='cs dark:dcs' href="https://code.visualstudio.com/" target='_blank'>Visual Studio Code</a>, <a className='cs dark:dcs' href="https://www.sublimetext.com/" target='_blank'>Sublime Text</a> and <a className='cs dark:dcs' href="https://www.jetbrains.com/idea/" target='_blank'>Intellij IDEA</a> each catering to specific languages and development needs.</li>
          <li><span className='font-bold text-[17px]'>2. Install the IDE:</span> Download and install the chosen IDE on your computer. Follow the step-by-step instructions provided by the IDE’s website or installer to complete the installation process seamlessly.</li>
          <li><span className='font-bold text-[17px]'>3. Customize Your Environment:</span> Personalize your IDE by adjusting settings such as themes, layouts, and keyboard shortcuts to match your preferences and streamline your workflow. Tailoring the environment to your liking enhances comfort and productivity during coding sessions.</li>
          <li><span className='font-bold text-[17px]'>4. Install Necessary Plugins or Extensions:</span> Enhance the functionality of your IDE by installing plugins or extensions that complement your development tasks. These add-ons expand the capabilities of the IDE, such as integrating with version control systems like <a className='cs dark:dcs' href="https://git-scm.com/" target='_blank'>Git</a> or providing additional language support.</li>
          <li><span className='font-bold text-[17px]'>5. Learn the Basics:</span> Familiarize yourself with the fundamental features and functionalities of the IDE. Learn how to create new projects, navigate the file system, write code efficiently, and utilize debugging tools to identify and resolve errors effectively.</li>
          <li><span className='font-bold text-[17px]'>6. Embark on Coding:</span> With your IDE set up and basic knowledge acquired, dive into coding! Start with simple exercises or small projects to acclimate yourself to the environment and gradually build your proficiency.</li>
        </ol>
        <p>Remember, while setting up and learning to use an IDE may require some initial investment of time and effort, the benefits of increased efficiency and streamlined development processes are invaluable. Embrace the journey of mastering your IDE, and let it serve as a catalyst for your coding endeavors.</p>
      </article>

      <div className='flex flex-col mb-10 gap-2'>
        <button className='bg-green-500 py-2 px-12 rounded-lg font-bold justify-center items-center cursor-not-allowed'>NO PROJECT YET</button>
        <button onClick={() => setQuestions(true)} className='bg-green-500 py-2 px-12 rounded-lg font-bold justify-center items-center'> {questions ? 'IN PROGRESS....' : 'COMPLETE QUIZ'} </button>
      </div>

      { questions && (
        <div className='w-full h-[70vh]'>
          <div className='bg-gray-200 rounded-md dark:bg-gray-800 h-full w-full'>
            <Quiz data={QuizThree} />
          </div>
          <div>
            <button onClick={() => setQuestions(false)} className='bg-green-500 py-2 w-full px-12 rounded-lg mt-6 font-bold justify-center items-center'> FINISH & CONTINUE </button>
          </div>
        </div>
      )}

      <div>
        <SubFooter
          t1="Roles of HTML & CSS"
          l1="/learn/html/roles-of-html-css"
          t2="Basic Elements"
          l2="/learn/html/basic-elements"
          edit="https://github.com/developer-assets/Free-Learning-Hub/blob/main/src/courses/html/LessonThree.jsx"
        />
      </div>

      <div className='mt-24'>
        <Footer />
      </div>
      
    </div>
  )
}

export default LessonThree