import React, { useState } from 'react'
import Footer from '../../components/Footer'
import SubFooter from '../../components/SubFooter'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { anOldHope } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { atelierEstuaryLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Quiz from './Questions/Quiz'
import QuizNine from './Questions/QuizNine.json'

const LessonNine = () => {
  const [questions, setQuestions] = useState(false);

  const isDarkTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  const codeString1 = `<img src="image.jpg" alt="Description of the image">`;

  

  return (
    <div className='px-4 mt-10'>
      <h1 className='font-bold text-2xl md:text-3xl'>Image Embedding</h1>
      <article className='mt-6 font-md flex flex-col gap-8 mb-20'>
        <p>Image embedding in HTML allows you to display images within your web pages. Here's how to embed images using HTML.</p>
        <h4 className='text-xl font-bold'>Basic Image Tag</h4>
        <p>The most common way to embed an image is by using the <span className='cs dark:dcs'>&lt;img&gt;</span> (image) tag. You specify the image source (URL) using the <span className='cs dark:dcs'>src</span> attribute and provide alternate text using the <span className='cs dark:dcs'>alt</span> attribute (for accessibility).</p>
        <SyntaxHighlighter className="w-fit px-5 max-w-[97%]" language='xml' style={isDarkTheme ? anOldHope : atelierEstuaryLight}>
          {codeString1}
        </SyntaxHighlighter>
        <h4 className='text-xl font-bold'>Relative Paths</h4>
        <p>If the image is located within the same directory as your HTML file, you can use a relative path. You can use <span className='cs dark:dcs'>./image.jpg</span> or just the name of the image <span className='cs dark:dcs'>image.jpg</span> to show an image in the same folder as your HTML document, to go down a folder you can use <span className='cs dark:dcs'>images/image.jpg</span> and to move out of a folder you can use <span className='cs dark:dcs'>../other-images/image.jpg</span>.</p>
      
      
      
      
      
      </article>
    </div>
  )
}

export default LessonNine