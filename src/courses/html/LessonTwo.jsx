import React, { useState } from 'react'
import SubFooter from '../../components/SubFooter'
import Footer from '../../components/Footer'
import Quiz from './Questions/Quiz'
import QuizTwo from './Questions/QuizTwo.json'

const LessonTwo = () => {
  const [questions, setQuestions] = useState(false);

  return (
    <div className='px-4 mt-10'>
      <h1 className='font-bold text-2xl md:text-3xl'>Roles of HTML & CSS</h1>

      <article className='mt-6 font-md flex flex-col gap-8 mb-20'>
        <p>HTML (HyperText Markup Language) and CSS (Cascading Style Sheets) serve as the backbone of web development, playing pivotal roles in crafting captivating and functional web pages.</p>
        <p>TML, often referred to as the foundation of any website, provides the structural framework for content on the web. It acts as the architectural blueprint, delineating the layout and organization of various elements such as text, images, and links on a webpage. Utilizing a system of tags, HTML marks up the content, instructing the browser on how to render each element. For instance, the <span className='cs dark:dcs'>&lt;p&gt;</span> tag signifies a paragraph, while <span className='cs dark:dcs'>&lt;img&gt;</span> represents an image.</p>
        <p>On the other hand, CSS emerges as the aesthetic engine that enhances the visual appeal of a website. Comparable to paint and decor adorning a building, CSS serves to style HTML elements, dictating their appearance on the screen. It offers a plethora of styling options, allowing designers to define colors, fonts, spacing, layout, and more, thereby breathing life into the HTML structure. With CSS, a mundane text document can be transformed into a visually captivating page that captures the user's attention.</p>
        <p>When HTML and CSS collaborate, they synergize to produce web pages that are both functional and visually enticing. While HTML lays the groundwork by providing the essential structure, CSS adds the creative flair that elevates the user experience. They constitute the cornerstone for individuals aspiring to venture into web development or establish their online presence. Acquiring proficiency in HTML equips one with the ability to publish content on the web, while mastering CSS empowers them to craft aesthetically pleasing designs.</p>
        <p>In essence, HTML and CSS are not just languages; they are the catalysts that propel the digital realm forward, enabling individuals to express their creativity and share information on a global scale.</p>
      </article>

      <div className='flex flex-col mb-10 gap-2'>
        <button className='bg-green-500 py-2 px-12 rounded-lg font-bold justify-center items-center cursor-not-allowed'>NO PROJECT YET</button>
        <button onClick={() => setQuestions(true)} className='bg-green-500 py-2 px-12 rounded-lg font-bold justify-center items-center'> {questions ? 'IN PROGRESS....' : 'COMPLETE QUIZ'} </button>
      </div>

      { questions && (
        <div className='w-full h-[70vh]'>
          <div className='bg-gray-200 rounded-md dark:bg-gray-800 h-full w-full'>
            <Quiz data={QuizTwo} />
          </div>
          <div>
            <button onClick={() => setQuestions(false)} className='bg-green-500 py-2 w-full px-12 rounded-lg mt-6 font-bold justify-center items-center'> FINISH & CONTINUE </button>
          </div>
        </div>
      )}

      <div>
        <SubFooter
          t1="Overview of HTML & CSS"
          l1="/learn/html/overview-of-html-css"
          t2="Setting up IDE"
          l2="/learn/html/setting-up-ide"
          edit="https://github.com/developer-assets/Free-Learning-Hub/blob/main/src/courses/html/LessonTwo.jsx"
        />
      </div>

      <div className='mt-24'>
        <Footer />
      </div>
      
    </div>
  )
}

export default LessonTwo