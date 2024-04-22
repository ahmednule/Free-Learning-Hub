import React, { useState } from 'react'
import Footer from '../../components/Footer'
import SubFooter from '../../components/SubFooter'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { anOldHope } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { atelierEstuaryLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Quiz from './Questions/Quiz'
import QuizSix from './Questions/QuizSix.json'


const LessonSix = () => {
  const [questions, setQuestions] = useState(false);

  const isDarkTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  const codeString1 = `<img src="image.jpg" />`;
  const codeString2 = `<div class="container">`;
  const codeString3 = `<section id="intro">`;
  const codeString4 = `<img src="image.jpg" alt="Image">`;
  const codeString5 = `<img src="image.jpg" alt="Alternative Text">`;
  const codeString6 = `<a href="https://www.example.com">Link</a>`;
  const codeString7 = `<a href="#" title="Click here">Link</a>`;
  const codeString8 = `<p style="color: red; font-size: 16px;">Styled Text</p>`;
  const codeString9 = `<a href="https://www.example.com" target="_blank">Link</a>`;
  const codeString10 = `<input type="text" placeholder="Enter your name">`;
  const codeString11 = `
<input type="text">
<input type="checkbox">
<input type="submit">

`;



  return (
    <div className='px-4 mt-10'>
      <h1 className='font-bold text-2xl md:text-3xl'>HTML Tags and Attributes</h1>
      <article className='mt-6 font-md flex flex-col gap-8 mb-20'>
        <p>Understanding HTML tags and attributes is fundamental for creating structured and interactive web pages. HTML (HyperText Markup Language) utilizes tags to define elements and attributes to provide additional information about those elements. Here's an overview of HTML tags and attributes:</p>
        <h4 className='text-xl font-bold'>Open & Closing Tags (Container Tag)</h4>
        <p>Most HTML elements are defined by opening and closing tags. The opening tag indicates the beginning of an element, while the closing tag signifies its end. For example: <span className='cs dark:dcs'>&lt;p&gt;</span> denotes the start of a paragraph, and <span className='cs dark:dcs'>&lt;/p&gt;</span> marks its end.</p>
        <h4 className='text-xl font-bold'>Void Elements (Self Closing Tags)</h4>
        <p>Some elements do not require a closing tag and are known as void or self-closing elements. Examples include <span className='cs dark:dcs'>&lt;img&gt;</span>, <span className='cs dark:dcs'>&lt;br&gt;</span>, and <span className='cs dark:dcs'>&lt;input&gt;</span>. Void elements are terminated with a trailing slash, such as: </p>
        <SyntaxHighlighter className="w-fit px-5 max-w-[97%]" language='xml' style={isDarkTheme ? anOldHope : atelierEstuaryLight}>
          {codeString1}
        </SyntaxHighlighter>
        <h4 className='text-xl font-bold'>Class Attribute</h4>
        <p>The class attribute specifies one or more class names for an element, allowing CSS to style multiple elements with the same class. Example:</p>
        <SyntaxHighlighter className="w-fit px-5 max-w-[97%]" language='xml' style={isDarkTheme ? anOldHope : atelierEstuaryLight}>
          {codeString2}
        </SyntaxHighlighter>
        <h4 className='text-xl font-bold'>ID Attribute</h4>
        <p>The id attribute provides a unique identifier for an element. It is used for styling with CSS or targeting elements with JavaScript. Example: </p>
        <SyntaxHighlighter className="w-fit px-5 max-w-[97%]" language='xml' style={isDarkTheme ? anOldHope : atelierEstuaryLight}>
          {codeString3}
        </SyntaxHighlighter>
        <h4 className='text-xl font-bold'>SRC Attribute</h4>
        <p>The src attribute specifies the source URL for elements like images, audio, video, iframes, etc. Example: </p>
        <SyntaxHighlighter className="w-fit px-5 max-w-[97%]" language='xml' style={isDarkTheme ? anOldHope : atelierEstuaryLight}>
          {codeString4}
        </SyntaxHighlighter>
        <h4 className='text-xl font-bold'>ALT Attribute</h4>
        <p>The alt attribute provides alternative text for images, which is displayed if the image fails to load or for accessibility purposes. Example:</p>
        <SyntaxHighlighter className="w-fit px-5 max-w-[97%]" language='xml' style={isDarkTheme ? anOldHope : atelierEstuaryLight}>
          {codeString5}
        </SyntaxHighlighter>
        <h4 className='text-xl font-bold'>HREF Attribute</h4>
        <p>The href attribute defines the URL for hyperlinks created with the <span className='cs dark:dcs'>&lt;a&gt;</span> element. Example:</p>
        <SyntaxHighlighter className="w-fit px-5 max-w-[97%]" language='xml' style={isDarkTheme ? anOldHope : atelierEstuaryLight}>
          {codeString6}
        </SyntaxHighlighter>
        <h4 className='text-xl font-bold'>TITLE Attribute</h4>
        <p>The title attribute provides additional information about an element, typically displayed as a tooltip when the user hovers over the element. Example: </p>
        <SyntaxHighlighter className="w-fit px-5 max-w-[97%]" language='xml' style={isDarkTheme ? anOldHope : atelierEstuaryLight}>
          {codeString7}
        </SyntaxHighlighter>
        <h4 className='text-xl font-bold'>STYLE Attribute</h4>
        <p>The style attribute allows inline CSS styling for an element. Example:</p>
        <SyntaxHighlighter className="w-fit px-5 max-w-[97%]" language='xml' style={isDarkTheme ? anOldHope : atelierEstuaryLight}>
          {codeString8}
        </SyntaxHighlighter>
        <h4 className='text-xl font-bold'>TARGET Attribute</h4>
        <p>The target attribute specifies where to open the linked document when using <span className='cs dark:dcs'>&lt;a&gt;</span> elements. Example:</p>
        <SyntaxHighlighter className="w-fit px-5 max-w-[97%]" language='xml' style={isDarkTheme ? anOldHope : atelierEstuaryLight}>
          {codeString9}
        </SyntaxHighlighter>
        <h4 className='text-xl font-bold'>PLACEHOLDER Attribute</h4>
        <p>The placeholder attribute provides a hint or example text for input fields. Example: </p>
        <SyntaxHighlighter className="w-fit px-5 max-w-[97%]" language='xml' style={isDarkTheme ? anOldHope : atelierEstuaryLight}>
          {codeString10}
        </SyntaxHighlighter>
        <h4 className='text-xl font-bold'>TYPE Attribute</h4>
        <p>The type attribute specifies the type of the input element. Example:</p>
        <SyntaxHighlighter className="w-fit px-5 max-w-[97%]" language='xml' style={isDarkTheme ? anOldHope : atelierEstuaryLight}>
          {codeString11}
        </SyntaxHighlighter>
        <p>These are just a few examples of HTML tags and attributes. Understanding how to use them effectively allows developers to create well-structured, accessible, and interactive web pages.</p>
      </article>
      <div className='flex flex-col mb-10 gap-2'>
        <button className='bg-green-500 py-2 px-12 rounded-lg font-bold justify-center items-center cursor-not-allowed'>NO PROJECT YET</button>
        <button onClick={() => setQuestions(true)} className='bg-green-500 py-2 px-12 rounded-lg font-bold justify-center items-center'> {questions ? 'IN PROGRESS....' : 'COMPLETE QUIZ'} </button>
      </div>

      { questions && (
        <div className='w-full h-[70vh]'>
          <div className='bg-gray-200 rounded-md dark:bg-gray-800 h-full w-full'>
            <Quiz data={QuizSix} />
          </div>
          <div>
            <button onClick={() => setQuestions(false)} className='bg-green-500 py-2 w-full px-12 rounded-lg mt-6 font-bold justify-center items-center'> FINISH & CONTINUE </button>
          </div>
        </div>
      )}
      <div>
        <SubFooter
          t1="Text Formating"
          l1="/learn/html/text-formating"
          t2="Semantic HTML"
          l2="/learn/html/semantic-html"
          reset="/learn/html"
          edit="https://github.com/developer-assets/Free-Learning-Hub/blob/main/src/courses/html/LessonSix.jsx"
        />
      </div>
      <div className='mt-24 relative'>
        <Footer />
      </div>
    </div>
  )
}

export default LessonSix