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
  const codeString2 = `<img src="image.jpg" alt="Description of the image" width="300" height="200">`;
  const codeString3 = `
<a href="https://www.example.com">
  <img src="image.jpg" alt="Description of the image">
</a>
`;
  const codeString4 = `<img style="max-width: 100%;" src="image.jpg" alt="Description of the image">`;
  const codeString5 = `<img src="image.jpg" alt="Description of the image" loading="lazy">`;



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
        <h4 className='text-xl font-bold'>Image size</h4>
        <p>You can specify the width and height of the image using the <span className='cs dark:dcs'>width</span> and <span className='cs dark:dcs'>height</span> attributes. It's recommended to include these attributes to prevent layout shifts while the page is loading.</p>
        <SyntaxHighlighter className="w-fit px-5 max-w-[97%]" language='xml' style={isDarkTheme ? anOldHope : atelierEstuaryLight}>
          {codeString2}
        </SyntaxHighlighter>
        <h4 className='text-xl font-bold'>Linking Images</h4>
        <p>You can make the image clickable by wrapping it in an <span className='cs dark:dcs'>&lt;a&gt;</span> (anchor) tag.</p>
        <SyntaxHighlighter className="w-fit px-5 max-w-[97%]" language='xml' style={isDarkTheme ? anOldHope : atelierEstuaryLight}>
          {codeString3}
        </SyntaxHighlighter>
        <h4 className='text-xl font-bold'>Responsive Images</h4>
        <p>To make images responsive and adapt to different screen sizes, you can use the <span className='cs dark:dcs'>max-width: 100%;</span> CSS style.</p>
        <SyntaxHighlighter className="w-fit px-5 max-w-[97%]" language='xml' style={isDarkTheme ? anOldHope : atelierEstuaryLight}>
          {codeString4}
        </SyntaxHighlighter>
        <h4 className='text-xl font-bold'>Lazy Loading</h4>
        <p>Lazy loading delays loading images until they are needed, improving page load performance. Use the <span className='cs dark:dcs'>loading="lazy"</span> attribute to enable lazy loading:</p>
        <SyntaxHighlighter className="w-fit px-5 max-w-[97%]" language='xml' style={isDarkTheme ? anOldHope : atelierEstuaryLight}>
          {codeString5}
        </SyntaxHighlighter>
        <h4 className='text-xl font-bold'>Image Formats</h4>
        <p>You can embed various image formats such as <span className='cs dark:dcs'>JPG</span>, <span className='cs dark:dcs'>PNG</span>, <span className='cs dark:dcs'>GIF</span> and <span className='cs dark:dcs'>SVG</span>. Ensure your image format is appropriate for the content and use case.</p>
        <p>By using these techniques, you can effectively embed images into your web pages, enhancing their visual appeal and user experience.</p>
      </article>

      <div className='flex flex-col mb-10 gap-2'>
        <button className='bg-green-500 py-2 px-12 rounded-lg font-bold justify-center items-center cursor-not-allowed'>NO PROJECT YET</button>
        <button onClick={() => setQuestions(true)} className='bg-green-500 py-2 px-12 rounded-lg font-bold justify-center items-center'> {questions ? 'IN PROGRESS....' : 'COMPLETE QUIZ'} </button>
      </div>

      { questions && (
        <div className='w-full h-[70vh]'>
          <div className='bg-gray-200 rounded-md dark:bg-gray-800 h-full w-full'>
            <Quiz data={QuizNine} />
          </div>
          <div>
            <button onClick={() => setQuestions(false)} className='bg-green-500 py-2 w-full px-12 rounded-lg mt-6 font-bold justify-center items-center'> FINISH & CONTINUE </button>
          </div>
        </div>
      )}

      <div>
        <SubFooter
          t1="Link Creation"
          l1="/learn/html/link-creation"
          t2="List Creation"
          l2="/learn/html/list-creation"
          reset="/learn/html"
          edit="https://github.com/developer-assets/Free-Learning-Hub/blob/main/src/courses/html/LessonNine.jsx"
        />
      </div>

      <div className='mt-24 relative'>
        <Footer />
      </div>

    </div>
  )
}

export default LessonNine