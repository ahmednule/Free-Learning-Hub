import React, { useState } from 'react'
import Footer from '../../components/Footer'
import SubFooter from '../../components/SubFooter'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { anOldHope } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { atelierEstuaryLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Quiz from './Questions/Quiz'
import QuizEight from './Questions/QuizEight.json'

const LessonEight = () => {
  const [questions, setQuestions] = useState(false);

  const isDarkTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  const codeString1 = `<a href="https://www.example.com">Visit Example Website</a>`;
  const codeString2 = `<a href="about.html">About Us</a>`;
  const codeString3 = `<a href="#section-id">Jump to Section</a>`;
  const codeString4 = `<a href="https://www.example.com" target="_blank">Visit Example Website</a>`;
  const codeString5 = `
<a href="https://www.example.com">
  <img src="image.jpg" alt="Image">
</a>`;

  const codeString6 = `
<a href="https://www.example.com"><b>Visit Example Website</b></a>
<a href="https://www.example.com"><i>Visit Example Website</i></a>`;



  return (
    <div className='px-4 mt-10'>
      <h1 className='font-bold text-2xl md:text-3xl'>Link Creation</h1>

      <article className='mt-6 font-md flex flex-col gap-8 mb-20'>
        <p>Link creation in HTML is essential for connecting web pages and resources, enabling navigation between different parts of a website or to external content. Here's how to create links using HTML:</p>
        <h4 className='text-xl font-bold'>Basic Link</h4>
        <p>The basic syntax for creating a link is to use the <span className='cs dark:dcs'>&lt;a&gt;</span> (anchor) element with the <span className='cs dark:dcs'>href</span> attribute to specify the destination URL. This creates a link labeled "Visit Example Website" that, when clicked, takes the user to the "https://www.example.com" website.</p>
        <SyntaxHighlighter className="w-fit px-5 max-w-[97%]" language='xml' style={isDarkTheme ? anOldHope : atelierEstuaryLight}>
          {codeString1}
        </SyntaxHighlighter>
        <h4 className='text-xl font-bold'>Linking to Local Files</h4>
        <p>You can link to files within your own website directory by specifying the file path in the <span className='cs dark:dcs'>href</span> attribute. This link points to a file named "about.html" in the same directory as the current web page.</p>
        <SyntaxHighlighter className="w-fit px-5 max-w-[97%]" language='xml' style={isDarkTheme ? anOldHope : atelierEstuaryLight}>
          {codeString2}
        </SyntaxHighlighter>
        <h4 className='text-xl font-bold'>Linking to Sections Within a Page</h4>
        <p>To create a link that jumps to a specific section within the same page, you can use the <span className='cs dark:dcs'>id</span> attribute to target the section, and then use the <span className='cs dark:dcs'>href</span> attribute with a hash symbol <span className='cs dark:dcs'>(#)</span> followed by the <span className='cs dark:dcs'>id</span> value. This link jumps to the section with the id <span className='cs dark:dcs'>#section-id</span> when clicked.</p>
        <SyntaxHighlighter className="w-fit px-5 max-w-[97%]" language='xml' style={isDarkTheme ? anOldHope : atelierEstuaryLight}>
          {codeString3}
        </SyntaxHighlighter>
        <h4 className='text-xl font-bold'>Opening Links in New Tab</h4>
        <p>You can specify that a link should open in a new browser tab or window by adding the <span className='cs dark:dcs'>target="_blank"</span> attribute. This ensures that when the link is clicked, the destination page opens in a new tab or window.</p>
        <SyntaxHighlighter className="w-fit px-5 max-w-[97%]" language='xml' style={isDarkTheme ? anOldHope : atelierEstuaryLight}>
          {codeString4}
        </SyntaxHighlighter>
        <h4 className='text-xl font-bold'>Linking Images</h4>
        <p>Images can also be turned into links by wrapping them with an <span className='cs dark:dcs'>&lt;a&gt;</span> element. Clicking on the image will now take the user to the specified URL.</p>
        <SyntaxHighlighter className="w-fit px-5 max-w-[97%]" language='xml' style={isDarkTheme ? anOldHope : atelierEstuaryLight}>
          {codeString5}
        </SyntaxHighlighter>
        <h4 className='text-xl font-bold'>Linking With Text Formating</h4>
        <p>You can apply text formatting, such as bold or italic, to the link text. You can replace "https://www.example.com" with the actual URL you want to link to and adjust other attributes as needed. By using these techniques, you can create effective and user-friendly navigation throughout your web pages.</p>
        <SyntaxHighlighter className="w-fit px-5 max-w-[97%]" language='xml' style={isDarkTheme ? anOldHope : atelierEstuaryLight}>
          {codeString6}
        </SyntaxHighlighter>
      </article>

      <div className='flex flex-col mb-10 gap-2'>
        <button className='bg-green-500 py-2 px-12 rounded-lg font-bold justify-center items-center cursor-not-allowed'>NO PROJECT YET</button>
        <button onClick={() => setQuestions(true)} className='bg-green-500 py-2 px-12 rounded-lg font-bold justify-center items-center'> {questions ? 'IN PROGRESS....' : 'COMPLETE QUIZ'} </button>
      </div>

      { questions && (
        <div className='w-full h-[70vh]'>
          <div className='bg-gray-200 rounded-md dark:bg-gray-800 h-full w-full'>
            <Quiz data={QuizEight} />
          </div>
          <div>
            <button onClick={() => setQuestions(false)} className='bg-green-500 py-2 w-full px-12 rounded-lg mt-6 font-bold justify-center items-center'> FINISH & CONTINUE </button>
          </div>
        </div>
      )}
      
      <div>
        <SubFooter
          t1="Semantic HTML"
          l1="/learn/html/semantic-html"
          t2="Image Embedding"
          l2="/learn/html/image-embedding"
          reset="/learn/html"
          edit="https://github.com/developer-assets/Free-Learning-Hub/blob/main/src/courses/html/LessonEight.jsx"
        />
      </div>

      <div className='mt-24 relative'>
        <Footer />
      </div>
      
    </div>
  )
}

export default LessonEight